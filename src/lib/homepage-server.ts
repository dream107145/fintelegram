import type { Article } from "./data";
import { FEATURED_ARTICLE, TRENDING } from "./data";
import {
  HOME_SECTIONS,
  RECENT_GRID,
  SIDEBAR_LATEST,
  type HomeSection,
} from "./homepage-data";
import {
  fetchWpContext,
  findPostForArticle,
  toSmushCdn,
  wpPostToArticle,
  type WpCategory,
  type WpPost,
  type WpUser,
} from "./wp-fetch";

export type HomepageData = {
  featured: Article;
  grid: Article[];
  trending: { title: string; href: string }[];
  sections: HomeSection[];
  sidebarLatest: Article[];
};

function enrichArticle(
  article: Article,
  posts: WpPost[],
  categoryById: Map<number, WpCategory>,
  userById: Map<number, WpUser>,
): Article {
  const match = findPostForArticle(article, posts);
  if (!match) {
    return {
      ...article,
      image: article.image ? toSmushCdn(article.image) : article.image,
    };
  }

  const fromWp = wpPostToArticle(match, categoryById, userById);
  return {
    ...article,
    href: fromWp.href,
    category: fromWp.category || article.category,
    categoryHref: fromWp.categoryHref || article.categoryHref,
    author: fromWp.author || article.author,
    date: fromWp.date || article.date,
    image: fromWp.image ?? toSmushCdn(article.image),
    excerpt: article.excerpt ?? fromWp.excerpt,
  };
}

function enrichSections(
  sections: HomeSection[],
  posts: WpPost[],
  categoryById: Map<number, WpCategory>,
  userById: Map<number, WpUser>,
): HomeSection[] {
  return sections.map((section) => ({
    ...section,
    articles: section.articles.map((article) =>
      enrichArticle(article, posts, categoryById, userById),
    ),
  }));
}

const FALLBACK: HomepageData = {
  featured: FEATURED_ARTICLE,
  grid: RECENT_GRID,
  trending: TRENDING.map((title) => ({ title, href: "#" })),
  sections: HOME_SECTIONS,
  sidebarLatest: SIDEBAR_LATEST,
};

export async function getHomepageData(): Promise<HomepageData> {
  try {
    const { posts, categoryById, userById } = await fetchWpContext();

    if (!posts.length) return FALLBACK;

    const toArticle = (post: WpPost) =>
      wpPostToArticle(post, categoryById, userById);

    const featured = { ...toArticle(posts[0]), featured: true };
    const grid = posts.slice(1, 5).map(toArticle);
    const trending = posts.slice(0, 4).map((p) => ({
      title: toArticle(p).title,
      href: p.link,
    }));
    const sidebarLatest = posts.slice(5, 10).map(toArticle);
    const sections = enrichSections(
      HOME_SECTIONS,
      posts,
      categoryById,
      userById,
    );

    return { featured, grid, trending, sections, sidebarLatest };
  } catch {
    return FALLBACK;
  }
}
