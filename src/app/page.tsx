import SiteLayout from "@/components/SiteLayout";
import ArticleCard from "@/components/ArticleCard";
import {
  ARTICLES,
  FEATURED_ARTICLE,
  TRENDING,
  SECTIONS,
} from "@/lib/data";
import { IMAGES } from "@/lib/assets";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="max-w-[1068px] mx-auto px-4 py-6">
        {/* Trending */}
        <div className="bg-ft-light-gray border border-ft-border p-4 mb-6">
          <div className="flex flex-wrap items-start gap-2">
            <span className="font-condensed font-bold text-[13px] uppercase text-ft-red shrink-0">
              Trending Now:
            </span>
            <div className="flex flex-col gap-1">
              {TRENDING.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[13px] text-ft-text hover:text-ft-red leading-snug"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main column */}
          <div className="lg:col-span-8">
            <ArticleCard article={FEATURED_ARTICLE} size="large" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {ARTICLES.slice(0, 4).map((article) => (
                <ArticleCard key={article.title} article={article} size="small" />
              ))}
            </div>

            {SECTIONS.map((section) => (
              <section key={section.title} className="mb-8">
                <h4 className="text-[16px] font-bold uppercase border-b-2 border-ft-black pb-2 mb-4">
                  {section.title}
                </h4>
                {section.articles.length > 0 ? (
                  section.articles.map((article) => (
                    <ArticleCard key={article.title} article={article} />
                  ))
                ) : (
                  <p className="text-[13px] text-ft-muted italic">No recent posts</p>
                )}
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="mb-8">
              <Link
                href="https://fintelegram.com/rail-atlas/"
                className="block overflow-hidden"
              >
                <Image
                  src={IMAGES.railAtlas}
                  alt="Rail Atlas"
                  width={340}
                  height={200}
                  className="w-full h-auto"
                />
              </Link>
            </div>

            <div className="mb-8">
              <h4 className="text-[16px] font-bold uppercase border-b-2 border-ft-black pb-2 mb-4">
                Latest
              </h4>
              {ARTICLES.slice(4).map((article) => (
                <ArticleCard key={article.title} article={article} size="small" />
              ))}
            </div>

            <div className="bg-ft-light-gray border border-ft-border p-5">
              <h4 className="text-[14px] font-bold uppercase mb-3">
                Report
              </h4>
              <p className="text-[13px] text-ft-gray leading-relaxed">
                FinTelegram is a cyberfinance intelligence and compliance platform.
                Contact us:{" "}
                <a href="mailto:office@fintelegram.com" className="text-ft-red hover:underline">
                  office@fintelegram.com
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
