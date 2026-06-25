"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { SITE } from "@/lib/data";

export default function AdminShell({
  children,
  active,
}: {
  children: React.ReactNode;
  active: "credentials" | "emails";
}) {
  const router = useRouter();
  const pathname = usePathname();

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/wp-login");
    router.refresh();
  }

  const navItems = [
    { id: "credentials" as const, label: "Credentials", href: "/admin/credentials" },
    { id: "emails" as const, label: "Emails", href: "/admin/emails" },
  ];

  return (
    <div className="min-h-screen bg-ft-light-gray flex">
      <aside className="w-[240px] bg-ft-black text-white shrink-0 flex flex-col">
        <div className="p-5 border-b border-white/10">
          <Image
            src={SITE.logo}
            alt="FinTelegram"
            width={160}
            height={40}
            className="h-[32px] w-auto"
          />
          <p className="text-[11px] text-white/50 mt-2 uppercase tracking-wider">
            Admin Panel
          </p>
        </div>
        <nav className="flex-1 p-3">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`block px-4 py-3 text-[13px] font-medium rounded mb-1 transition-colors ${
                active === item.id || pathname === item.href
                  ? "bg-ft-red text-white"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2.5 text-[12px] text-white/60 hover:text-white hover:bg-white/10 rounded transition-colors text-left"
          >
            Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 md:p-8 overflow-auto">{children}</main>
    </div>
  );
}
