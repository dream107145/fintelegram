import SiteLayout from "@/components/SiteLayout";
import TrendingBar from "@/components/home/TrendingBar";
import HomeSidebar from "@/components/home/HomeSidebar";
import {
  CategoryBlock,
  HeroFeatured,
  Grid2Posts,
} from "@/components/home/CategoryBlock";
import { FEATURED_ARTICLE } from "@/lib/data";
import { HOME_SECTIONS, RECENT_GRID } from "@/lib/homepage-data";

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="td-container">
        <TrendingBar />

        <div className="td-pb-row">
          <div className="td-pb-span8 td-main-content">
            <HeroFeatured article={FEATURED_ARTICLE} />
            <Grid2Posts articles={RECENT_GRID} />

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
