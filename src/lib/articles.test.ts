import { describe, expect, it } from "vitest";
import { formatArticleDate, latestArticles, type Article } from "./articles";

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
