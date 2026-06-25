import { IMAGES } from "./assets";

export const SITE = {
  name: "FinTelegram News",
  tagline: "Spread financial intelligence",
  logo: IMAGES.logo,
  footerLogo: IMAGES.footerLogo,
  contact: "office@fintelegram.com",
};

export const NAV_ITEMS = [
  { label: "Rail Atlas", href: "https://fintelegram.com/rail-atlas/" },
  { label: "Complaints & Fact Checks", href: "https://fintelegram.com/category/complaints-fact-checks/" },
  { label: "Law & Compliance Enforcement", href: "https://fintelegram.com/category/law-compliance-enforcement/" },
  { label: "Whistleblower", href: "https://fintelegram.com/whistleblower/" },
  { label: "Home", href: "/" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/fintelegram" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/fintelegram" },
  { label: "TikTok", href: "https://www.tiktok.com/@fintelegram" },
  { label: "Twitter", href: "https://twitter.com/fintelegram" },
];

export const TRENDING = [
  "FinTelegram Investigation: Stardust Global CCS Ltd and STAKES.com Payment-Rail Allegations — Whistleblowers Sought",
  "Softon Compliance Report: Cyprus Structures, Offshore Casino Narratives, EU Payment Exposure And Technical Risk Signals",
  "Rail Atlas Case: The Kingdom Bank – Offshore Banking, EU Payment Rails, KYC Outsourcing and the iGaming Risk Profile",
  "MiCA Countdown: Europe's Crypto Grey Zone Dies On 1 July 2026 — And Poland May Become The First Regulatory Casualty",
];

export type Article = {
  title: string;
  href: string;
  category: string;
  categoryHref: string;
  author: string;
  date: string;
  excerpt?: string;
  image?: string;
  featured?: boolean;
};

export const FEATURED_ARTICLE: Article = {
  title:
    "MiCA Countdown: Europe's Crypto Grey Zone Dies On 1 July 2026 — And Poland May Become The First Regulatory Casualty",
  href: "https://fintelegram.com/mica-countdown-europes-crypto-grey-zone-dies-on-1-july-2026/",
  category: "CASP",
  categoryHref: "https://fintelegram.com/category/casp/",
  author: "Charlene Lensburg",
  date: "June 25, 2026",
  featured: true,
};

export const ARTICLES: Article[] = [
  {
    title:
      "Follow-Up: Spinsopotamia's Vanishing Act — Zentoria's Front-Door Descriptor Now Appears Parked on GoDaddy",
    href: "https://fintelegram.com/follow-up-spinsopotamias-vanishing-act/",
    category: "Gambling Compliance",
    categoryHref: "https://fintelegram.com/category/gambling-compliance/",
    author: "Ben",
    date: "June 24, 2026",
  },
  {
    title:
      "Spinsopotamia Front Descriptor Slams to 403 After FinTelegram's Zentoria/NALMI Exposé",
    href: "https://fintelegram.com/spinsopotamia-front-descriptor-slams-to-403/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "Ben",
    date: "June 23, 2026",
  },
  {
    title:
      "Explainer Compliance Report: Zentoria, Spinsopotamia and NALMI — A Plain-English Map of a Casino Payment and Infrastructure Cluster",
    href: "https://fintelegram.com/explainer-compliance-report-zentoria-spinsopotamia-nalmi/",
    category: "Compliance",
    categoryHref: "https://fintelegram.com/category/compliance/",
    author: "tamir",
    date: "June 23, 2026",
  },
  {
    title:
      "FinTelegram Releases SoftSwiss / Dream Finance Compliance Report v1.0: iGaming Rails, Crypto Payments, MiCA Pressure and Ownership Questions",
    href: "https://fintelegram.com/fintelegram-releases-softswiss-dream-finance-compliance-report/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "Reg Techer",
    date: "June 22, 2026",
  },
  {
    title: "New Technical Annex Sharpens the Zentoria /Spinsopotamia Cluster!",
    href: "https://fintelegram.com/new-technical-annex-sharpens-the-zentoria-spinsopotamia-cluster/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "Ben",
    date: "June 20, 2026",
    excerpt:
      "FinTelegram has publishing a new Technical Annex as a companion annex to its recently released \"Zentoria / Spinsopotamia and the NALMI Casino Network\" Compliance Intelligence Report.",
  },
  {
    title:
      "DeFi Bingo: Hyperliquid's Billion-Dollar Machine: DeFi's Most Profitable Trading Startup Faces the License Question",
    href: "https://fintelegram.com/defi-bingo-hyperliquids-billion-dollar-machine/",
    category: "Crypto Compliance",
    categoryHref: "https://fintelegram.com/category/compliance/crypto-compliance/",
    author: "Reg Techer",
    date: "April 14, 2026",
    excerpt:
      "Hyperliquid has become one of the most extraordinary revenue engines in crypto. Public analytics suggest that the protocol generated roughly $961.5 million in gross protocol revenue in 2025.",
  },
  {
    title:
      "Rail Atlas Case: The Kingdom Bank – Offshore Banking, EU Payment Rails, KYC Outsourcing and the iGaming Risk Profile",
    href: "https://fintelegram.com/rail-atlas-the-kingdom-bank-speedy-banky-eu-payment-rails/",
    category: "Compliance",
    categoryHref: "https://fintelegram.com/category/compliance/",
    author: "Reg Techer",
    date: "June 6, 2026",
    excerpt:
      "FinTelegram's Rail Atlas reviews The Kingdom Bank's offshore banking and payment infrastructure.",
    image: IMAGES.railAtlas,
  },
  {
    title:
      "Gambling's Hidden Salesforce: How Social Media Influencers Funnel Millions of Europeans into Illegal Casinos",
    href: "https://fintelegram.com/gamblings-hidden-salesforce/",
    category: "Illegal gambling",
    categoryHref: "https://fintelegram.com/category/illegal-gambling/",
    author: "tamir",
    date: "March 6, 2026",
    excerpt:
      "An investigation by Investigative Europe has exposed how high-profile YouTube and Twitch personalities across at least seven European countries are acting as de facto distribution agents for blacklisted, unlicensed online casinos.",
  },
];

export const SECTIONS = [
  { title: "Focus Reports", articles: ARTICLES.slice(4, 5) },
  { title: "Cybercrime", articles: [] as Article[] },
  { title: "Bankruptcies et al", articles: [] as Article[] },
  { title: "DeFi Decoded", articles: ARTICLES.slice(5, 6) },
  { title: "People Radar", articles: [] as Article[] },
  { title: "Investor Briefings", articles: [] as Article[] },
  { title: "Financial Influencers", articles: ARTICLES.slice(7, 8) },
  { title: "Compliance", articles: ARTICLES.slice(6, 7) },
];
