import Link from "next/link";
import type { Article } from "@/lib/data";

export function BlockTitle({ title }: { title: string }) {
  return (
    <h4 className="block-title">
      <span>{title}</span>
    </h4>
  );
}

export function CategoryPill({
  category,
  href,
}: {
  category: string;
  href: string;
}) {
  return (
    <Link href={href} className="ft-category">
      {category}
    </Link>
  );
}

export function PostMeta({ article }: { article: Article }) {
  if (!article.author && !article.date) return null;
  return (
    <div className="post-meta">
      {article.author && (
        <Link
          href={`https://fintelegram.com/author/${article.author.toLowerCase().replace(/\s+/g, "-")}/`}
          className="post-author"
        >
          {article.author}
        </Link>
      )}
      {article.author && article.date && <span className="post-sep"> - </span>}
      {article.date && <time>{article.date}</time>}
    </div>
  );
}

export function PostTitle({
  article,
  level = 3,
}: {
  article: Article;
  level?: 2 | 3 | 4;
}) {
  const Tag = `h${level}` as "h2" | "h3" | "h4";
  const sizeClass =
    level === 2
      ? "post-title-h2"
      : level === 3
        ? "post-title-h3"
        : "post-title-h4";

  return (
    <Tag className={sizeClass}>
      <Link href={article.href}>{article.title}</Link>
    </Tag>
  );
}
