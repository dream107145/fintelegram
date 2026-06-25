"use client";

import { useState } from "react";
import Link from "next/link";

type TrendingItem = { title: string; href: string };

export default function TrendingBar({ items }: { items: TrendingItem[] }) {
  const [index, setIndex] = useState(0);

  if (!items.length) return null;

  function prev() {
    setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  }

  function next() {
    setIndex((i) => (i === items.length - 1 ? 0 : i + 1));
  }

  const current = items[index];

  return (
    <div className="td-trending-now">
      <div className="td-trending-now-title">Trending Now</div>
      <div className="td-trending-now-content">
        <Link href={current.href} className="td-trending-now-post">
          {current.title}
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
