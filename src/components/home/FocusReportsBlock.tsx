import Link from "next/link";
import ProxiedImage from "@/components/ProxiedImage";
import { SOCIAL_LINKS } from "@/lib/data";
import type { Article } from "@/lib/data";
import { BlockTitle, CategoryPill, PostMeta, PostTitle } from "./PostParts";

export default function FocusReportsBlock({ articles }: { articles: Article[] }) {
  const [lead, ...rest] = articles;

  return (
    <div className="td-block-wrap">
      <BlockTitle title="Focus Reports" />
      <div className="focus-reports-row">
        <div className="focus-reports-main">
          {lead && (
            <article className="focus-lead">
              {lead.image && (
                <Link href={lead.href} className="focus-lead-image">
                  <ProxiedImage
                    src={lead.image}
                    alt={lead.title}
                    width={360}
                    height={240}
                    className="w-full h-auto"
                  />
                </Link>
              )}
              <CategoryPill category={lead.category} href={lead.categoryHref} />
              <PostTitle article={lead} level={3} />
              <PostMeta article={lead} />
              {lead.excerpt && <p className="post-excerpt">{lead.excerpt}</p>}
            </article>
          )}

          <div className="focus-list">
            {rest.map((article) => (
              <article key={article.title} className="focus-list-item">
                {article.image && (
                  <Link href={article.href} className="focus-list-thumb">
                    <ProxiedImage
                      src={article.image}
                      alt={article.title}
                      width={100}
                      height={70}
                    />
                  </Link>
                )}
                <div className="focus-list-body">
                  <CategoryPill category={article.category} href={article.categoryHref} />
                  <PostTitle article={article} level={4} />
                  <PostMeta article={article} />
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="focus-social-strip">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.label}
              className="focus-social-icon"
            >
              {link.label.charAt(0)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
