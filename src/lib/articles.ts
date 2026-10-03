export type ArticleSource = "Qiita" | "Zenn";

export interface Article {
  title: string;
  url: string;
  publishedAt: string;
  source: ArticleSource;
}

const QIITA_URL = "https://qiita.com/api/v2/users/keiswe/items?per_page=10";
const ZENN_URL = "https://zenn.dev/api/articles?username=poppok&order=latest";

interface QiitaItem {
  title: string;
  url: string;
  created_at: string;
}

interface ZennArticle {
  title: string;
  path: string;
  published_at: string;
}

async function fetchJson(url: string): Promise<unknown> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) {
      console.error(`Failed to fetch ${url}: HTTP ${res.status}`);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    return null;
  }
}

/** 取得に失敗した場合は null を返す（0 件の成功と区別する） */
export async function fetchQiitaArticles(): Promise<Article[] | null> {
  const items = await fetchJson(QIITA_URL);
  if (!Array.isArray(items)) return null;
  return (items as QiitaItem[]).map((item) => ({
    title: item.title,
    url: item.url,
    publishedAt: item.created_at,
    source: "Qiita",
  }));
}

/** 取得に失敗した場合は null を返す（0 件の成功と区別する） */
export async function fetchZennArticles(): Promise<Article[] | null> {
  const data = (await fetchJson(ZENN_URL)) as { articles?: unknown } | null;
  if (!Array.isArray(data?.articles)) return null;
  return (data.articles as ZennArticle[]).map((article) => ({
    title: article.title,
    url: `https://zenn.dev${article.path}`,
    publishedAt: article.published_at,
    source: "Zenn",
  }));
}

/** 公開日時の新しい順に並べ、上位 limit 件を返す（日付は数値で比較する） */
export function latestArticles(articles: Article[], limit = 5): Article[] {
  const time = (a: Article) => new Date(a.publishedAt).getTime() || 0;
  return [...articles].sort((a, b) => time(b) - time(a)).slice(0, limit);
}

/** YYYY.MM.DD（日本時間）で表示する */
export function formatArticleDate(value: string): string {
  const time = new Date(value).getTime();
  if (Number.isNaN(time)) return "";
  const jst = new Date(time + 9 * 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${jst.getUTCFullYear()}.${pad(jst.getUTCMonth() + 1)}.${pad(jst.getUTCDate())}`;
}

export async function fetchLatestArticles(limit = 5): Promise<Article[]> {
  const [qiita, zenn] = await Promise.all([fetchQiitaArticles(), fetchZennArticles()]);
  // 定期ビルドで両方とも取得できなければビルドを失敗させ、前回デプロイした記事一覧を残す
  if (qiita === null && zenn === null && process.env.GITHUB_EVENT_NAME === "schedule") {
    throw new Error("Failed to fetch articles from both Qiita and Zenn");
  }
  return latestArticles([...(qiita ?? []), ...(zenn ?? [])], limit);
}
