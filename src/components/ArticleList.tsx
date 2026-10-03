import { formatArticleDate, type Article } from "@/lib/articles";

export default function ArticleList({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return (
      <p className="mt-4 text-text-64">
        記事を取得できませんでした。Qiita・Zennから直接ご覧ください。
      </p>
    );
  }

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.url}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-rule flex flex-col gap-1 py-3.5 text-text hover:text-accent"
          >
            <span className="text-base leading-normal">{article.title}</span>
            <span className="text-xs text-text-64 tabular-nums">
              {formatArticleDate(article.publishedAt)} · {article.source}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
