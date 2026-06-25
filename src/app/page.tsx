import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import TrendingBar from "@/components/home/TrendingBar";
import HomeSidebar from "@/components/home/HomeSidebar";
import HeroBlock from "@/components/home/HeroBlock";
import { CategoryBlock } from "@/components/home/CategoryBlock";
import { FEATURED_ARTICLE } from "@/lib/data";
import { HOME_SECTIONS, RECENT_GRID } from "@/lib/homepage-data";

export const metadata: Metadata = {
  title: "Home | FinTelegram News",
  description:
    "FinTelegram is a cyberfinance intelligence and compliance platform investigating financial crime, regulatory violations, and the rails, entities, and ecosystems that facilitate them.",
};

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="td-container">
        <TrendingBar />

        <div className="td-pb-row">
          <div className="td-pb-span8 td-main-content">
            <HeroBlock featured={FEATURED_ARTICLE} grid={RECENT_GRID} />

            {HOME_SECTIONS.map((section) => (
              <CategoryBlock key={section.title} section={section} />
            ))}
          </div>

          <HomeSidebar />
        </div>
      </div>
    </SiteLayout>
  );
}
