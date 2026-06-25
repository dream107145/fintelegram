"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-ft-black text-white text-[11px]">
      <div className="td-container flex items-center justify-between h-[34px]">
        <div className="flex items-center gap-3">
          <span className="text-white/70">3.9&deg;C</span>
          <span className="text-white/50">New York</span>
          <span className="hidden sm:inline text-white/50">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-ft-red transition-colors uppercase tracking-wide font-medium"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/login"
            className="text-white hover:text-ft-red transition-colors font-medium"
          >
            Sign in
          </Link>
          <span className="text-white/40">/</span>
          <Link
            href="/register"
            className="text-white hover:text-ft-red transition-colors font-medium"
          >
            Join
          </Link>
        </div>
      </div>
    </div>
  );
}
