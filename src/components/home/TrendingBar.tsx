"use client";

import { useState } from "react";
import Link from "next/link";
import { TRENDING } from "@/lib/data";

export default function TrendingBar() {
  const [index, setIndex] = useState(0);

  function prev() {
    setIndex((i) => (i === 0 ? TRENDING.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === TRENDING.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="td-trending-now">
      <div className="td-trending-now-title">Trending Now</div>
      <div className="td-trending-now-content">
        <Link href="#" className="td-trending-now-post">
          {TRENDING[index]}
        </Link>
      </div>
      <div className="td-trending-now-nav">
        <button type="button" onClick={prev} aria-label="Previous">
          &#8249;
        </button>
        <button type="button" onClick={next} aria-label="Next">
          &#8250;
        </button>
      </div>
    </div>
  );
}
