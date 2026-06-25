const SMUSH_CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

export function toSmushCdnUrl(url: string): string {
  if (url.includes("smushcdn.com")) {
    return url.includes("?") ? url : `${url}?lossy=1&strip=1&webp=1`;
  }

  const match = url.match(/wp-content\/uploads\/(.+)$/);
  if (match) {
    return `${SMUSH_CDN}/${match[1]}?lossy=1&strip=1&webp=1`;
  }

  return url;
}

/** Rewrite an external image URL to our server-side proxy route. */
export function proxiedImage(url: string): string {
  if (!url) return url;
  if (url.startsWith("/api/img")) return url;
  if (url.startsWith("/") && !url.startsWith("//")) return url;

  const external = toSmushCdnUrl(url);
  return `/api/img?url=${encodeURIComponent(external)}`;
}

export function proxyImageUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  return proxiedImage(url);
}

export function getAbsoluteProxiedImageUrl(url: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return `${base.replace(/\/$/, "")}${proxiedImage(url)}`;
}
