"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/data";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-ft-border sticky top-0 z-50">
      <div className="max-w-[1068px] mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="shrink-0">
            <Image
              src={SITE.logo}
              alt="FinTelegram"
              width={280}
              height={60}
              className="h-[50px] w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-ft-gray hover:text-ft-red p-2"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-ft-gray hover:text-ft-red p-2"
              aria-label="Menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="pb-4">
            <form className="flex">
              <input
                type="search"
                placeholder="Search"
                className="ft-input flex-1"
              />
              <button type="submit" className="ft-btn ml-0">
                Search
              </button>
            </form>
          </div>
        )}

        <nav
          className={`border-t border-ft-border ${menuOpen ? "block" : "hidden md:block"}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 md:py-3.5 font-condensed text-[13px] font-bold uppercase tracking-wide text-ft-text hover:text-ft-red hover:bg-ft-light-gray transition-colors border-b md:border-b-0 border-ft-border md:border-r border-ft-border last:border-r-0"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
