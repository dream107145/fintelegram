import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data";
import type { HomeSection } from "@/lib/homepage-data";
import { BlockTitle, CategoryPill, PostMeta, PostTitle } from "./PostParts";

function Grid2Posts({ articles }: { articles: Article[] }) {
  return (
    <div className="td-block-row grid-2-posts">
      {articles.map((article) => (
        <article key={article.title} className="td-module-wrap">
          <CategoryPill category={article.category} href={article.categoryHref} />
          <PostTitle article={article} level={3} />
          <PostMeta article={article} />
        </article>
      ))}
    </div>
  );
}

function Grid3Posts({ articles }: { articles: Article[] }) {
  return (
    <div className="td-block-row grid-3-posts">
      {articles.map((article) => (
        <article key={article.title} className="td-module-wrap">
          <CategoryPill category={article.category} href={article.categoryHref} />
          <PostTitle article={article} level={3} />
          <PostMeta article={article} />
          {article.excerpt && (
            <p className="post-excerpt">{article.excerpt}</p>
          )}
        </article>
      ))}
    </div>
  );
}

function ListExcerptPosts({ articles }: { articles: Article[] }) {
  return (
    <div className="list-excerpt-posts">
      {articles.map((article, i) => (
        <article
          key={article.title}
          className={`td-module-wrap list-item ${i > 0 ? "list-item-compact" : ""}`}
        >
          {article.image && (
            <Link href={article.href} className="post-thumb">
              <Image
                src={article.image}
                alt={article.title}
                width={696}
                height={385}
                className="w-full h-auto"
              />
            </Link>
          )}
          <CategoryPill category={article.category} href={article.categoryHref} />
          <PostTitle article={article} level={3} />
          <PostMeta article={article} />
          {article.excerpt && <p className="post-excerpt">{article.excerpt}</p>}
        </article>
      ))}
    </div>
  );
}

function ListPosts({ articles }: { articles: Article[] }) {
  return (
    <div className="list-posts">
      {articles.map((article) => (
        <article key={article.title} className="td-module-wrap list-item-compact">
          <CategoryPill category={article.category} href={article.categoryHref} />
          <PostTitle article={article} level={4} />
          <PostMeta article={article} />
        </article>
      ))}
    </div>
  );
}

export function CategoryBlock({ section }: { section: HomeSection }) {
  return (
    <div className="td-block-wrap">
      <BlockTitle title={section.title} />
      {section.layout === "grid-2" && <Grid2Posts articles={section.articles} />}
      {section.layout === "grid-3" && <Grid3Posts articles={section.articles} />}
      {section.layout === "list-excerpt" && (
        <ListExcerptPosts articles={section.articles} />
      )}
      {section.layout === "list" && <ListPosts articles={section.articles} />}
    </div>
  );
}

export function HeroFeatured({ article }: { article: Article }) {
  return (
    <article className="td-module-wrap hero-featured">
      <CategoryPill category={article.category} href={article.categoryHref} />
      <PostTitle article={article} level={2} />
      <PostMeta article={article} />
    </article>
  );
}

export { Grid2Posts };
