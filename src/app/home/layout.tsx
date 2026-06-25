import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | FinTelegram News",
};

export default function NewsHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
