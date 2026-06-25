const CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

export const IMAGES = {
  logo: `${CDN}/2025/05/FT-Logo-CyberFinance.png?lossy=1&strip=1&webp=1`,
  footerLogo: `${CDN}/2025/05/FT-Logo-2025-2.png?lossy=1&strip=1&webp=1`,
  railAtlas: `${CDN}/2026/01/Rail-Atlas-FI.jpg?lossy=1&strip=1&webp=1`,
  favicon: `${CDN}/2025/05/FT-Logo-2025-2.png?lossy=1&strip=1&webp=1`,
  wordpressLogo: "https://s.w.org/style/images/about/WordPress-logotype-wmark.png",
  whistle42Banner: `${CDN}/2026/01/Whistle42-Screen-New-1024x710.png?lossy=1&strip=1&webp=1`,
  micaFeatured: `${CDN}/2026/06/MiCA-Vault-FI.jpg?lossy=1&strip=1&webp=1`,
  spinsopotamia: `${CDN}/2026/06/Spinsopotamia_Parked-FI.jpg?lossy=1&strip=1&webp=1`,
  zentoria403: `${CDN}/2026/06/Spinsopotamia_403_Featured_Image.jpg?lossy=1&strip=1&webp=1`,
  zentoriaExplainer: `${CDN}/2026/06/Zentoria-NALMI-explainer.jpg?lossy=1&strip=1&webp=1`,
  softswissReport: `${CDN}/2026/06/SoftSwiss-CR-June-2026-FI.jpg?lossy=1&strip=1&webp=1`,
  focusReport: `${CDN}/2026/06/Zentoria_Spinsopotamia_Cluster_Illustration.jpg?lossy=1&strip=1&webp=1`,
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
