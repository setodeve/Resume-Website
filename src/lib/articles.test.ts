import { afterEach, describe, expect, it, vi } from "vitest";
import {
  fetchLatestArticles,
  formatArticleDate,
  latestArticles,
  type Article,
} from "./articles";

const article = (title: string, publishedAt: string, source: Article["source"] = "Qiita"): Article => ({
  title,
  url: `https://example.com/${title}`,
  publishedAt,
  source,
});

describe("latestArticles", () => {
  it("タイムゾーン表記が混在していても公開日時の新しい順に並べる", () => {
    const result = latestArticles([
      article("a", "2025-01-01T10:00:00+09:00"),
      article("b", "2025-01-01T02:00:00.000Z", "Zenn"), // 11:00 JST
      article("c", "2024-12-31T23:00:00+09:00"),
    ]);
    expect(result.map((a) => a.title)).toEqual(["b", "a", "c"]);
  });

  it("上位 limit 件だけを返す", () => {
    const list = Array.from({ length: 8 }, (_, i) => article(`${i}`, `2025-01-0${i + 1}T00:00:00Z`));
    expect(latestArticles(list).map((a) => a.title)).toEqual(["7", "6", "5", "4", "3"]);
  });

  it("日付を解釈できない記事は末尾に回す", () => {
    const result = latestArticles([article("bad", "invalid"), article("ok", "2025-01-01T00:00:00Z")]);
    expect(result.map((a) => a.title)).toEqual(["ok", "bad"]);
  });
});

describe("formatArticleDate", () => {
  it("日本時間の YYYY.MM.DD で表示する", () => {
    expect(formatArticleDate("2025-03-04T20:00:00Z")).toBe("2025.03.05");
    expect(formatArticleDate("2025-03-04T08:00:00+09:00")).toBe("2025.03.04");
  });

  it("不正な日付は空文字にする", () => {
    expect(formatArticleDate("invalid")).toBe("");
  });
});

describe("fetchLatestArticles", () => {
  const respond = (byHost: Record<string, () => Response>) =>
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) => byHost[new URL(url).host]()),
    );
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it("Qiita と Zenn の記事をマージする", async () => {
    respond({
      "qiita.com": () =>
        json([{ title: "q", url: "https://qiita.com/x", created_at: "2025-01-01T09:00:00+09:00" }]),
      "zenn.dev": () =>
        json({ articles: [{ title: "z", path: "/poppok/articles/a", published_at: "2025-01-02T09:00:00+09:00" }] }),
    });
    const result = await fetchLatestArticles();
    expect(result.map((a) => [a.title, a.url])).toEqual([
      ["z", "https://zenn.dev/poppok/articles/a"],
      ["q", "https://qiita.com/x"],
    ]);
  });

  it("片方が失敗・想定外の形式でも、取得できた方だけを返す", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    respond({
      "qiita.com": () => json({ message: "Rate limit exceeded" }, 403),
      "zenn.dev": () => json({ unexpected: true }),
    });
    expect(await fetchLatestArticles()).toEqual([]);
    expect(console.error).toHaveBeenCalledWith(expect.stringContaining("HTTP 403"));
  });

  it("定期ビルドで両方とも失敗したらエラーにする", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubEnv("GITHUB_EVENT_NAME", "schedule");
    respond({ "qiita.com": () => json({}, 500), "zenn.dev": () => json({}, 500) });
    await expect(fetchLatestArticles()).rejects.toThrow("Failed to fetch articles");
  });
});
