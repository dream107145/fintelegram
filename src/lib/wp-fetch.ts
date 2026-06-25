const JINA_PROXY = "https://r.jina.ai/";
const WP_API = "https://fintelegram.com/wp-json/wp/v2";
const SMUSH_CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

export type WpPost = {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  jetpack_featured_media_url?: string;
  author: number;
  categories: number[];
};

export type WpCategory = {
  id: number;
  name: string;
  slug: string;
  link: string;
};

export type WpUser = {
  id: number;
  name: string;
  slug: string;
};

function extractJson<T>(text: string): T {
  const arrayStart = text.indexOf("[");
  const objectStart = text.indexOf("{");
  const start =
    arrayStart >= 0 && (objectStart < 0 || arrayStart < objectStart)
      ? arrayStart
      : objectStart;
  if (start < 0) {
    throw new Error("WP API response did not contain JSON");
  }
  return JSON.parse(text.slice(start)) as T;
}

export async function fetchWpJson<T>(path: string): Promise<T> {
  const url = `${JINA_PROXY}${WP_API}${path}`;
  const res = await fetch(url, {
    next: { revalidate: 300 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`WP fetch failed (${res.status}): ${path}`);
  }

  const text = await res.text();
  return extractJson<T>(text);
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export function toSmushCdn(url: string | undefined): string | undefined {
  if (!url) return undefined;

  if (url.includes("smushcdn.com")) {
    return url.includes("?") ? url : `${url}?lossy=1&strip=1&webp=1`;
  }

  const match = url.match(/wp-content\/uploads\/(.+)$/);
  if (match) {
    return `${SMUSH_CDN}/${match[1]}?lossy=1&strip=1&webp=1`;
  }

  return url;
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function titleTokens(title: string): string[] {
  return normalizeTitle(title)
    .match(/[a-z0-9]{4,}/g)
    ?.filter((w) => !["with", "from", "that", "this", "after", "into"].includes(w)) ?? [];
}

export function slugFromHref(href: string): string {
  try {
    const parts = new URL(href).pathname.split("/").filter(Boolean);
    return parts[parts.length - 1] ?? "";
  } catch {
    return "";
  }
}

export function findPostByTitle(title: string, posts: WpPost[]): WpPost | undefined {
  const target = normalizeTitle(title);
  const exact = posts.find(
    (p) => normalizeTitle(stripHtml(p.title.rendered)) === target,
  );
  if (exact) return exact;

  const prefix = target.slice(0, 48);
  const byPrefix = posts.find((p) =>
    normalizeTitle(stripHtml(p.title.rendered)).startsWith(prefix),
  );
  if (byPrefix) return byPrefix;

  const tokens = titleTokens(title);
  if (tokens.length < 2) return undefined;

  let best: { post: WpPost; score: number } | undefined;
  for (const post of posts) {
    const postNorm = normalizeTitle(stripHtml(post.title.rendered));
    const score = tokens.filter((token) => postNorm.includes(token)).length;
    if (score >= 2 && (!best || score > best.score)) {
      best = { post, score };
    }
  }

  return best?.post;
}

export function findPostForArticle(
  article: { title: string; href: string },
  posts: WpPost[],
): WpPost | undefined {
  const byTitle = findPostByTitle(article.title, posts);
  if (byTitle) return byTitle;

  const slug = slugFromHref(article.href);
  if (slug) {
    const bySlug = posts.find((p) => p.slug === slug);
    if (bySlug) return bySlug;
  }

  return undefined;
}

export async function fetchWpContext() {
  const [posts, categories, users] = await Promise.all([
    fetchWpJson<WpPost[]>(
      "/posts?per_page=100&_fields=id,slug,title,link,date,excerpt,jetpack_featured_media_url,author,categories",
    ),
    fetchWpJson<WpCategory[]>("/categories?per_page=100&_fields=id,name,slug,link"),
    fetchWpJson<WpUser[]>("/users?per_page=30&_fields=id,name,slug"),
  ]);

  const categoryById = new Map(categories.map((c) => [c.id, c]));
  const userById = new Map(users.map((u) => [u.id, u]));

  return { posts, categoryById, userById };
}

export function wpPostToArticle(
  post: WpPost,
  categoryById: Map<number, WpCategory>,
  userById: Map<number, WpUser>,
) {
  const leafCategory =
    post.categories
      .map((id) => categoryById.get(id))
      .filter(Boolean)
      .sort((a, b) => (a!.name.length - b!.name.length))
      .pop() ?? categoryById.get(post.categories[0]);

  const author = userById.get(post.author);

  return {
    title: stripHtml(post.title.rendered),
    href: post.link,
    category: leafCategory?.name ?? "News",
    categoryHref: leafCategory?.link ?? "https://fintelegram.com/category/ticker/",
    author: author?.name ?? "",
    date: formatPostDate(post.date),
    excerpt: post.excerpt ? stripHtml(post.excerpt.rendered) : undefined,
    image: toSmushCdn(post.jetpack_featured_media_url),
  };
}
