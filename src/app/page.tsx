import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import TrendingBar from "@/components/home/TrendingBar";
import HomeSidebar from "@/components/home/HomeSidebar";
import HeroBlock from "@/components/home/HeroBlock";
import { CategoryBlock } from "@/components/home/CategoryBlock";
import { getHomepageData } from "@/lib/homepage-server";

export const metadata: Metadata = {
  title: "Home | FinTelegram News",
  description:
    "FinTelegram is a cyberfinance intelligence and compliance platform investigating financial crime, regulatory violations, and the rails, entities, and ecosystems that facilitate them.",
};

export const revalidate = 300;

export default async function HomePage() {
  const { featured, grid, trending, sections, sidebarLatest } =
    await getHomepageData();

  return (
    <SiteLayout>
      <div className="td-container">
        <TrendingBar items={trending} />

        <div className="td-pb-row">
          <div className="td-pb-span8 td-main-content">
            <HeroBlock featured={featured} grid={grid} />

            {sections.map((section) => (
              <CategoryBlock key={section.title} section={section} />
            ))}
          </div>

          <HomeSidebar latest={sidebarLatest} />
        </div>
      </div>
    </SiteLayout>
  );
}
