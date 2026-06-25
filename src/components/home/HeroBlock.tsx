import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/data";
import { IMAGES } from "@/lib/assets";

function OverlayModule({
  article,
  size = "large",
}: {
  article: Article;
  size?: "large" | "small";
}) {
  const image = article.image || IMAGES.railAtlas;

  return (
    <article className={`td-module-overlay ${size === "large" ? "td-module-overlay-lg" : "td-module-overlay-sm"}`}>
      <Link href={article.href} className="td-module-overlay-link">
        <Image
          src={image}
          alt={article.title}
          fill
          className="td-module-overlay-img"
          sizes={size === "large" ? "420px" : "210px"}
        />
        <div className="td-module-overlay-gradient" />
        <div className="td-module-overlay-content">
          <span className="ft-category">{article.category}</span>
          <h3 className={size === "large" ? "overlay-title-lg" : "overlay-title-sm"}>
            {article.title}
          </h3>
          {size === "large" && article.author && (
            <div className="overlay-meta">
              <span>{article.author}</span>
              {article.date && <span> - {article.date}</span>}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}

export default function HeroBlock({
  featured,
  grid,
}: {
  featured: Article;
  grid: Article[];
}) {
  return (
    <div className="td-hero-block">
      <OverlayModule article={featured} size="large" />
      <div className="td-hero-grid">
        {grid.map((article) => (
          <OverlayModule key={article.title} article={article} size="small" />
        ))}
      </div>
    </div>
  );
}
