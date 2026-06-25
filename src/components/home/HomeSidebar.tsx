import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/assets";
import { SITE } from "@/lib/data";
import { SIDEBAR_LATEST } from "@/lib/homepage-data";
import { BlockTitle, CategoryPill, PostTitle, PostMeta } from "./PostParts";

export default function HomeSidebar() {
  return (
    <aside className="td-main-sidebar">
      <div className="td-ss-main-sidebar">
        <div className="sidebar-widget sidebar-banner">
          <Link href="/rail-atlas">
            <Image
              src={IMAGES.railAtlas}
              alt="Rail Atlas"
              width={324}
              height={200}
              className="w-full h-auto"
            />
          </Link>
        </div>

        <div className="sidebar-widget">
          <BlockTitle title="Latest" />
          <div className="sidebar-latest">
            {SIDEBAR_LATEST.map((article) => (
              <article key={article.title} className="sidebar-latest-item">
                <CategoryPill category={article.category} href={article.categoryHref} />
                <PostTitle article={article} level={4} />
                <PostMeta article={article} />
              </article>
            ))}
          </div>
        </div>

        <div className="sidebar-widget sidebar-facebook">
          <div className="fb-placeholder">
            <div className="fb-placeholder-header">Facebook</div>
            <div className="fb-placeholder-body">
              <p>Follow FinTelegram on Facebook</p>
              <a
                href="https://www.facebook.com/fintelegram"
                target="_blank"
                rel="noopener noreferrer"
                className="fb-link"
              >
                @fintelegram
              </a>
            </div>
          </div>
        </div>

        <div className="sidebar-widget sidebar-report">
          <BlockTitle title="Report" />
          <p>
            FinTelegram is a cyberfinance intelligence and compliance platform
            investigating financial crime, regulatory violations, and the rails,
            entities, and ecosystems that facilitate them.
          </p>
          <p className="mt-3">
            Contact us:{" "}
            <a href={`mailto:${SITE.contact}`} className="report-email">
              {SITE.contact}
            </a>
          </p>
        </div>
      </div>
    </aside>
  );
}
