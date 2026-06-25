const CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

export const IMAGES = {
  logo: `${CDN}/2025/05/FT-Logo-CyberFinance.png?lossy=1&strip=1&webp=1`,
  footerLogo: `${CDN}/2025/05/FT-Logo-2025-2.png?lossy=1&strip=1&webp=1`,
  railAtlas: `${CDN}/2026/01/Rail-Atlas-FI.jpg?lossy=1&strip=1&webp=1`,
  favicon: `${CDN}/2025/05/FT-Logo-2025-2.png?lossy=1&strip=1&webp=1`,
  wordpressLogo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
} as const;

export function getAbsoluteImageUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base.replace(/\/$/, "")}${path}`;
}
