import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/data";

export default function ArticleCard({
  article,
  size = "default",
}: {
  article: Article;
  size?: "default" | "large" | "small";
}) {
  if (size === "large") {
    return (
      <article className="mb-6">
        <Link href={article.categoryHref} className="ft-category mb-3">
          {article.category}
        </Link>
        <h2 className="text-[28px] md:text-[32px] font-bold leading-tight mb-3">
          <Link href={article.href} className="hover:text-ft-red">
            {article.title}
          </Link>
        </h2>
        <div className="text-[12px] text-ft-muted mb-3">
          <Link href={`https://fintelegram.com/author/${article.author.toLowerCase().replace(/\s+/g, "-")}/`} className="font-bold text-ft-text hover:text-ft-red">
            {article.author}
          </Link>
          <span className="mx-1">-</span>
          <time>{article.date}</time>
        </div>
        {article.excerpt && (
          <p className="text-[14px] text-ft-gray leading-relaxed">{article.excerpt}</p>
        )}
      </article>
    );
  }

  if (article.image) {
    return (
      <article className="mb-6">
        <Link href={article.href} className="block mb-3 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            width={680}
            height={385}
            className="w-full h-auto object-cover"
          />
        </Link>
        <Link href={article.categoryHref} className="ft-category mb-2">
          {article.category}
        </Link>
        <h3 className="text-[18px] font-bold leading-snug mb-2">
          <Link href={article.href} className="hover:text-ft-red">
            {article.title}
          </Link>
        </h3>
        <div className="text-[12px] text-ft-muted mb-2">
          <span className="font-bold text-ft-text">{article.author}</span>
          <span className="mx-1">-</span>
          <time>{article.date}</time>
        </div>
        {article.excerpt && (
          <p className="text-[13px] text-ft-gray leading-relaxed">{article.excerpt}</p>
        )}
      </article>
    );
  }

  return (
    <article className={`mb-5 ${size === "small" ? "pb-4 border-b border-ft-border" : ""}`}>
      <Link href={article.categoryHref} className="ft-category mb-2">
        {article.category}
      </Link>
      <h3 className={`font-bold leading-snug mb-2 ${size === "small" ? "text-[15px]" : "text-[18px]"}`}>
        <Link href={article.href} className="hover:text-ft-red">
          {article.title}
        </Link>
      </h3>
      <div className="text-[12px] text-ft-muted">
        <span className="font-bold text-ft-text">{article.author}</span>
        <span className="mx-1">-</span>
        <time>{article.date}</time>
      </div>
      {article.excerpt && size !== "small" && (
        <p className="text-[13px] text-ft-gray leading-relaxed mt-2">{article.excerpt}</p>
      )}
    </article>
  );
}
