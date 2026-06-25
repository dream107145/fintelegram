const JINA_PROXY = "https://r.jina.ai/";

const ALLOWED_HOSTS = new Set([
  "fintelegram.com",
  "www.fintelegram.com",
  "b1713133.smushcdn.com",
  "s.w.org",
]);

export function isAllowedImageHost(hostname: string): boolean {
  return ALLOWED_HOSTS.has(hostname);
}

export async function fetchRemoteImage(target: URL): Promise<Response> {
  const directUrl = target.toString();
  const viaJina = `${JINA_PROXY}${directUrl}`;

  const isFinTelegram =
    target.hostname === "fintelegram.com" ||
    target.hostname === "www.fintelegram.com";

  const attempts = isFinTelegram ? [viaJina, directUrl] : [directUrl, viaJina];

  for (const url of attempts) {
    try {
      const res = await fetch(url, {
        next: { revalidate: 3600 },
        headers: { Accept: "image/*,*/*" },
      });
      if (res.ok) return res;
    } catch {
      // try next source
    }
  }

  throw new Error(`Failed to fetch image: ${directUrl}`);
}
