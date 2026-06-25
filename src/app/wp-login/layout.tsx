import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In ‹ FinTelegram News — WordPress",
};

export default function WpLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
