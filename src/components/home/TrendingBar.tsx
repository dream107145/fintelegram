import Link from "next/link";
import { TRENDING } from "@/lib/data";

export default function TrendingBar() {
  return (
    <div className="td-trending-now">
      <div className="td-trending-now-title">Trending Now</div>
      <div className="td-trending-now-wrapper">
        {TRENDING.map((item) => (
          <Link key={item} href="#" className="td-trending-now-post">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
