"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/data";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="td-header-wrap">
      <div className="td-banner-wrap">
        <div className="td-container td-header-logo-wrap">
          <Link href="/" className="td-main-logo">
            <Image
              src={SITE.logo}
              alt="FinTelegram"
              width={280}
              height={60}
              className="td-logo-img"
              priority
            />
          </Link>
          <span className="td-tagline-text">{SITE.tagline}</span>
        </div>
      </div>

      <div className="td-header-menu-wrap">
        <div className="td-container td-header-menu-row">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="td-mobile-toggle md:hidden"
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`td-header-menu ${menuOpen ? "open" : ""}`}>
            <ul className="sf-menu">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="td-header-search">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="td-header-search-button"
              aria-label="Search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            {searchOpen && (
              <div className="td-drop-down-search">
                <form>
                  <input type="search" name="s" placeholder="Search" />
                  <input type="submit" value="Search" />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
