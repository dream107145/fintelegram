import { getAbsoluteProxiedImageUrl, proxiedImage } from "./image-proxy";

const CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

/** Official WordPress mark — same asset as wp-login.php (direct URL for email clients). */
export const WORDPRESS_LOGO_URL =
  "https://s.w.org/style/images/about/WordPress-logotype-wmark.png";

function cdn(path: string) {
  return proxiedImage(`${CDN}${path}?lossy=1&strip=1&webp=1`);
}

export const IMAGES = {
  logo: cdn("/2025/05/FT-Logo-CyberFinance.png"),
  footerLogo: cdn("/2025/05/FT-Logo-2025-2.png"),
  railAtlas: cdn("/2026/01/Rail-Atlas-FI.jpg"),
  favicon: cdn("/2025/05/FT-Logo-2025-2.png"),
  wordpressLogo: proxiedImage(WORDPRESS_LOGO_URL),
  whistle42Banner: cdn("/2026/01/Whistle42-Screen-New-1024x710.png"),
  micaFeatured: cdn("/2026/06/MiCA-Vault-FI.jpg"),
  spinsopotamia: cdn("/2026/06/Spinsopotamia_Parked-FI.jpg"),
  zentoria403: cdn("/2026/06/Spinsopotamia_403_Featured_Image.jpg"),
  zentoriaExplainer: cdn("/2026/06/Zentoria-NALMI-explainer.jpg"),
  softswissReport: cdn("/2026/06/SoftSwiss-CR-June-2026-FI.jpg"),
  focusReport: cdn("/2026/06/Zentoria_Spinsopotamia_Cluster_Illustration.jpg"),
} as const;

export function cdnImage(path: string) {
  return proxiedImage(`${CDN}${path}?lossy=1&strip=1&webp=1`);
}

export function getAbsoluteImageUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const origin = base.replace(/\/$/, "");

  if (path.startsWith("/")) {
    return `${origin}${path}`;
  }
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return getAbsoluteProxiedImageUrl(path);
  }
  return `${origin}/${path}`;
}
