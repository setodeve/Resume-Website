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

async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error);
    return null;
  }
}

export async function fetchQiitaArticles(): Promise<Article[]> {
  const items = await fetchJson<QiitaItem[]>(QIITA_URL);
  return (items ?? []).map((item) => ({
    title: item.title,
    url: item.url,
    publishedAt: item.created_at,
    source: "Qiita",
  }));
}

export async function fetchZennArticles(): Promise<Article[]> {
  const data = await fetchJson<{ articles?: ZennArticle[] }>(ZENN_URL);
  return (data?.articles ?? []).map((article) => ({
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
  return latestArticles([...qiita, ...zenn], limit);
}
