const CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

export const IMAGES = {
  logo: `${CDN}/2025/05/FT-Logo-CyberFinance.png?lossy=1&strip=1&webp=1`,
  footerLogo: `${CDN}/2025/05/FT-Logo-2025-2.png?lossy=1&strip=1&webp=1`,
  railAtlas: `${CDN}/2026/01/Rail-Atlas-FI.jpg?lossy=1&strip=1&webp=1`,
  favicon: `${CDN}/2025/05/FT-Logo-2025-2.png?lossy=1&strip=1&webp=1`,
  wordpressLogo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
  whistle42Banner: `${CDN}/2026/02/Whistle42-Secure-Info-Banner.jpg?lossy=1&strip=1&webp=1`,
  micaFeatured: `${CDN}/2026/06/MiCA-Countdown-CASP.jpg?lossy=1&strip=1&webp=1`,
  spinsopotamia: `${CDN}/2026/06/Spinsopotamia-Vanishing-Act.jpg?lossy=1&strip=1&webp=1`,
  zentoria403: `${CDN}/2026/06/Zentoria-NALMI-403.jpg?lossy=1&strip=1&webp=1`,
  zentoriaExplainer: `${CDN}/2026/06/Zentoria-NALMI-Cluster.jpg?lossy=1&strip=1&webp=1`,
  softswissReport: `${CDN}/2026/06/SoftSwiss-Dream-Finance.jpg?lossy=1&strip=1&webp=1`,
  focusReport: `${CDN}/2026/06/Zentoria-Spinsopotamia-Annex.jpg?lossy=1&strip=1&webp=1`,
} as const;

export function cdnImage(path: string) {
  return `${CDN}${path}?lossy=1&strip=1&webp=1`;
}

export function getAbsoluteImageUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base.replace(/\/$/, "")}${path}`;
}
