import { IMAGES } from "./assets";
import type { Article } from "./data";

const CDN = "https://b1713133.smushcdn.com/1713133/wp-content/uploads";

function img(path: string) {
  return `${CDN}${path}?lossy=1&strip=1&webp=1`;
}

export type SectionLayout = "grid-2" | "grid-3" | "list-excerpt" | "list";

export type HomeSection = {
  title: string;
  layout: SectionLayout;
  articles: Article[];
};

export const RECENT_GRID: Article[] = [
  {
    title: "Follow-Up: Spinsopotamia's Vanishing Act — Zentoria's Front-Door Descriptor Now Appears Parked on GoDaddy",
    href: "https://fintelegram.com/follow-up-spinsopotamias-vanishing-act/",
    category: "Gambling Compliance",
    categoryHref: "https://fintelegram.com/category/gambling-compliance/",
    author: "Ben",
    date: "June 24, 2026",
  },
  {
    title: "Spinsopotamia Front Descriptor Slams to 403 After FinTelegram's Zentoria/NALMI Exposé",
    href: "https://fintelegram.com/spinsopotamia-front-descriptor-slams-to-403/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "Ben",
    date: "June 23, 2026",
  },
  {
    title: "Explainer Compliance Report: Zentoria, Spinsopotamia and NALMI — A Plain-English Map of a Casino Payment and Infrastructure Cluster",
    href: "https://fintelegram.com/explainer-compliance-report-zentoria-spinsopotamia-nalmi/",
    category: "Compliance",
    categoryHref: "https://fintelegram.com/category/compliance/",
    author: "tamir",
    date: "June 23, 2026",
  },
  {
    title: "FinTelegram Releases SoftSwiss / Dream Finance Compliance Report v1.0: iGaming Rails, Crypto Payments, MiCA Pressure and Ownership Questions",
    href: "https://fintelegram.com/fintelegram-releases-softswiss-dream-finance-compliance-report/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "Reg Techer",
    date: "June 22, 2026",
  },
];

export const HOME_SECTIONS: HomeSection[] = [
  {
    title: "Focus Reports",
    layout: "list-excerpt",
    articles: [
      {
        title: "New Technical Annex Sharpens the Zentoria /Spinsopotamia Cluster!",
        href: "https://fintelegram.com/new-technical-annex-sharpens-the-zentoria-spinsopotamia-cluster/",
        category: "Compliance Reports",
        categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
        author: "Ben",
        date: "June 20, 2026",
        excerpt:
          "FinTelegram has publishing a new Technical Annex as a companion annex to its recently released \"Zentoria / Spinsopotamia and the NALMI Casino Network\" Compliance Intelligence Report. The new dossier does not replace the main report; it deepens the public-source technical case around the Spinsopotamia.com anchor with preserved HTML, exact telemetry and configuration markers, cross-domain API dependencies, and direct catalogue-level asset links.",
      },
      {
        title: "Zentoria / Spinsopotamia and the NALMI Casino Network – New Compliance Intelligence Report Released",
        href: "https://fintelegram.com/zentoria-spinsopotamia-nalmi-casino-network/",
        category: "Compliance Reports",
        categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
        author: "",
        date: "June 19, 2026",
      },
      {
        title: "WhiteBIT Secures Austrian MiCA License — Vienna's FMA Emerges As A Key Gateway For Global Crypto Exchanges",
        href: "https://fintelegram.com/whitebit-secures-austrian-mica-license/",
        category: "Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/",
        author: "",
        date: "June 19, 2026",
      },
      {
        title: "Stardust Investigation Update: Cyprus Service Providers Deny Operational Role As FinTelegram Expands Payment-Rail Review!",
        href: "https://fintelegram.com/stardust-investigation-update/",
        category: "Compliance Reports",
        categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
        author: "",
        date: "June 18, 2026",
      },
      {
        title: "FinTelegram Releases Technical Correlation Report on the SPTPub Platform Cluster and the Betzter Network",
        href: "https://fintelegram.com/sptpub-platform-cluster-betzter-network/",
        category: "Compliance Reports",
        categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
        author: "",
        date: "June 17, 2026",
      },
    ],
  },
  {
    title: "Cybercrime",
    layout: "grid-3",
    articles: [
      {
        title: "Cyberattack Notice: FinTelegram Targeted by Email Bombing and DDoS Attacks After Softon Reports",
        href: "https://fintelegram.com/cyberattack-notice-fintelegram-ddos/",
        category: "DDOS and Online Attacks",
        categoryHref: "https://fintelegram.com/category/ddos-and-online-attacks/",
        author: "",
        date: "",
      },
      {
        title: "Trueluck Casino Exposed: Gadzooks Limited, A Curaçao Share Shuffle, And The Larnaca Fiduciary Hub Behind The Third Pillar Of The Cyprus Casino Cluster!",
        href: "https://fintelegram.com/trueluck-casino-exposed/",
        category: "Gambling Compliance",
        categoryHref: "https://fintelegram.com/category/gambling-compliance/",
        author: "",
        date: "",
      },
      {
        title: "FinTelegram Investigation: We Are Looking Into Softon and the Cyprus iGaming Payment Layer — Whistleblowers, We Need Your Help",
        href: "https://fintelegram.com/fintelegram-investigation-softon-cyprus-igaming/",
        category: "Illegal gambling",
        categoryHref: "https://fintelegram.com/category/illegal-gambling/",
        author: "",
        date: "",
      },
    ],
  },
  {
    title: "Bankruptcies et al",
    layout: "grid-3",
    articles: [
      {
        title: "T1 Payments And Donald Kasdon: Post-Bankruptcy Fallout, Payvision, And The Unfinished High-Risk Payments Story",
        href: "https://fintelegram.com/t1-payments-donald-kasdon/",
        category: "Bankruptcies",
        categoryHref: "https://fintelegram.com/category/bankruptcies/",
        author: "",
        date: "",
      },
      {
        title: "Singapore's Wirecard Verdict is a Mirror Held up to Germany's Regulatory Disgrace!",
        href: "https://fintelegram.com/singapores-wirecard-verdict/",
        category: "Bankruptcies",
        categoryHref: "https://fintelegram.com/category/bankruptcies/",
        author: "",
        date: "",
      },
      {
        title: "Caroline Ellison's January 2026 Exit: The FTX Insider Walks, While SBF Bets on Appeals—and Politics",
        href: "https://fintelegram.com/caroline-ellison-january-2026-exit/",
        category: "Bankruptcies",
        categoryHref: "https://fintelegram.com/category/bankruptcies/",
        author: "",
        date: "",
      },
    ],
  },
  {
    title: "Startup on Trial Series",
    layout: "grid-3",
    articles: [
      {
        title: "Terraform \"Startup on Trial\": Do Kwon Sentenced to 15 Years After Judge Calls Terra Collapse an \"Epic\" $40B Fraud",
        href: "https://fintelegram.com/terraform-startup-on-trial-do-kwon/",
        category: "Court Cases",
        categoryHref: "https://fintelegram.com/category/court-cases/",
        author: "tamir",
        date: "December 12, 2025",
        excerpt:
          "A U.S. federal judge in Manhattan sentenced Terraform Labs founder Do Kwon to 15 years in prison, concluding that the TerraUSD/LUNA implosion was not a bad-product accident but a fraud that wiped out roughly $40 billion in market value and devastated real victims.",
      },
      {
        title: "Startup on Trial: Elizabeth Holmes and Theranos – Visionary or Fraudster? The Final Appeal Denied",
        href: "https://fintelegram.com/startup-on-trial-elizabeth-holmes/",
        category: "Court Cases",
        categoryHref: "https://fintelegram.com/category/court-cases/",
        author: "",
        date: "May 12, 2025",
      },
      {
        title: "Startup on Trial: Charlie Javice and the Frank Fraud – When Fake Users Fueled a $175 Million Acquisition",
        href: "https://fintelegram.com/startup-on-trial-charlie-javice/",
        category: "Court Cases",
        categoryHref: "https://fintelegram.com/category/court-cases/",
        author: "",
        date: "May 11, 2025",
      },
    ],
  },
  {
    title: "DeFi Decoded",
    layout: "grid-3",
    articles: [
      {
        title: "DeFi Bingo: Hyperliquid's Billion-Dollar Machine: DeFi's Most Profitable Trading Startup Faces the License Question",
        href: "https://fintelegram.com/defi-bingo-hyperliquids-billion-dollar-machine/",
        category: "Crypto Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/crypto-compliance/",
        author: "Reg Techer",
        date: "April 14, 2026",
        excerpt:
          "Hyperliquid has become one of the most extraordinary revenue engines in crypto. Public analytics suggest that the protocol generated roughly $961.5 million in gross protocol revenue in 2025 and about $873.7 million in gross profit.",
      },
      {
        title: "Trump's Crypto Court Turns on Justin Sun: WLFI Freeze Row Exposes the First Family's DeFi Power Play",
        href: "https://fintelegram.com/trumps-crypto-court-justin-sun/",
        category: "Crypto Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/crypto-compliance/",
        author: "",
        date: "April 13, 2026",
      },
      {
        title: "ESMA Draws The Line: Why Hyperliquid's Crypto Perpetuals Look Increasingly Like CFDs In DeFi Clothing",
        href: "https://fintelegram.com/esma-draws-the-line-hyperliquid/",
        category: "Crypto Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/crypto-compliance/",
        author: "",
        date: "March 16, 2026",
      },
    ],
  },
  {
    title: "People Radar",
    layout: "grid-3",
    articles: [
      {
        title: "Who Is Behind Klickl? The Chinese-Controlled Polish VASP Inside The OpenPayd Scam Rails",
        href: "https://fintelegram.com/who-is-behind-klickl/",
        category: "Compliance Reports",
        categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
        author: "",
        date: "",
      },
      {
        title: "Fintech Visionary or Laundering Enabler? Turkish Probe and OCCRP Findings Expose the Dark Side of Ozan Özerk's Payment Empire!",
        href: "https://fintelegram.com/ozan-ozerk-payment-empire/",
        category: "Law Enforcement",
        categoryHref: "https://fintelegram.com/category/law-enforcement/",
        author: "",
        date: "",
      },
      {
        title: "The Strugano Files: Notorious Binary Options Lawyer Reportedly Arrested In Greece As U.S. Insider-Trading Case Catches Up With Him",
        href: "https://fintelegram.com/the-strugano-files/",
        category: "Court Cases",
        categoryHref: "https://fintelegram.com/category/court-cases/",
        author: "",
        date: "",
      },
    ],
  },
  {
    title: "Investor Briefings",
    layout: "list",
    articles: [
      {
        title: "OpenPayd Financials 2025: Growth Story, Thin Equity Base, And A Very Ambitious Unicorn Valuation",
        href: "https://fintelegram.com/openpayd-financials-2025/",
        category: "CyberFinance",
        categoryHref: "https://fintelegram.com/category/cyberfinance/",
        author: "",
        date: "",
      },
      {
        title: "Bloodbath at Coinbase: Q1 2026 Earnings Miss, $394M Net Loss, and a Desperate Pivot to AI Amid 14% Workforce Slash",
        href: "https://fintelegram.com/bloodbath-at-coinbase-q1-2026/",
        category: "CyberFinance",
        categoryHref: "https://fintelegram.com/category/cyberfinance/",
        author: "",
        date: "",
      },
      {
        title: "Trump's Strange Victory: Meloni, Hormuz, and the $300 Billion Price Tag of the Iran War",
        href: "https://fintelegram.com/trumps-strange-victory-meloni-hormuz/",
        category: "Politics",
        categoryHref: "https://fintelegram.com/category/politics/",
        author: "tamir",
        date: "June 21, 2026",
      },
      {
        title: "FinTelegram Investigation: Stardust Global CCS Ltd and STAKES.com Payment-Rail Allegations — Whistleblowers Sought",
        href: "https://fintelegram.com/stardust-global-ccs-stakes-com/",
        category: "Compliance Reports",
        categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
        author: "Reg Techer",
        date: "June 17, 2026",
      },
      {
        title: "Softon Compliance Report: Cyprus Structures, Offshore Casino Narratives, EU Payment Exposure And Technical Risk Signals",
        href: "https://fintelegram.com/softon-compliance-report/",
        category: "Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/",
        author: "Charlene Lensburg",
        date: "June 16, 2026",
      },
      {
        title: "Compliance Radar: Latvijas Banka Licenses Fibonatix — A Fresh EU Licence For A High-Risk Payment Legacy?",
        href: "https://fintelegram.com/compliance-radar-fibonatix/",
        category: "Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/",
        author: "Charlene Lensburg",
        date: "June 15, 2026",
      },
    ],
  },
  {
    title: "Financial Influencers",
    layout: "list-excerpt",
    articles: [
      {
        title: "Gambling's Hidden Salesforce: How Social Media Influencers Funnel Millions of Europeans into Illegal Casinos",
        href: "https://fintelegram.com/gamblings-hidden-salesforce/",
        category: "Illegal gambling",
        categoryHref: "https://fintelegram.com/category/illegal-gambling/",
        author: "tamir",
        date: "March 6, 2026",
        excerpt:
          "An investigation by Investigative Europe has exposed how high-profile YouTube and Twitch personalities across at least seven European countries are acting as de facto distribution agents for blacklisted, unlicensed online casinos — earning revenue-share commissions from the very losses of their followers.",
      },
      {
        title: "Report: Finfluencers on TikTok and X – Roles, Reach, Evolution, and Key Trends",
        href: "https://fintelegram.com/report-finfluencers-on-tiktok-and-x/",
        category: "Influencers",
        categoryHref: "https://fintelegram.com/category/influencers/",
        author: "Guest Contributor",
        date: "May 18, 2025",
        excerpt:
          "Over the past year, financial influencers (\"FinFluencers\") have become increasingly prominent on social media, particularly on TikTok and X (formerly Twitter).",
      },
      {
        title: "Sam Altman's Olive Oil Moment: How Graza Became the First Cyber Society EVOO Brand",
        href: "https://fintelegram.com/sam-altmans-olive-oil-moment/",
        category: "Influencers",
        categoryHref: "https://fintelegram.com/category/influencers/",
        author: "Mark Lagarde",
        date: "May 15, 2025",
      },
      {
        title: "From Crypto King to Prison Chess: SBF's Defiant Rewrite of the FTX Saga",
        href: "https://fintelegram.com/from-crypto-king-to-prison-chess/",
        category: "Court Cases",
        categoryHref: "https://fintelegram.com/category/court-cases/",
        author: "Ben",
        date: "March 7, 2025",
      },
      {
        title: "Arms for Ukraine: Battlefield Necessity or Black Market and Money Laundering Bonanza?",
        href: "https://fintelegram.com/arms-for-ukraine/",
        category: "Influencers",
        categoryHref: "https://fintelegram.com/category/influencers/",
        author: "tamir",
        date: "March 2, 2025",
      },
    ],
  },
  {
    title: "Compliance",
    layout: "list-excerpt",
    articles: [
      {
        title: "Hyperliquid After the FCA Warning: DeFi Branding Meets Regulated Derivatives Reality",
        href: "https://fintelegram.com/hyperliquid-after-the-fca-warning/",
        category: "Crypto Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/crypto-compliance/",
        author: "Reg Techer",
        date: "June 11, 2026",
        excerpt:
          "The UK FCA has warned that Hyperliquid may be providing or promoting financial services without permission. FinTelegram analyses why Hyperliquid's DeFi positioning may no longer protect it from derivatives regulation.",
      },
      {
        title: "Rail Atlas Case: The Kingdom Bank – Offshore Banking, EU Payment Rails, KYC Outsourcing and the iGaming Risk Profile",
        href: "https://fintelegram.com/rail-atlas-the-kingdom-bank-speedy-banky-eu-payment-rails/",
        category: "Compliance",
        categoryHref: "https://fintelegram.com/category/compliance/",
        author: "Reg Techer",
        date: "June 6, 2026",
        excerpt:
          "FinTelegram's Rail Atlas reviews The Kingdom Bank's offshore banking and payment infrastructure. Our operational review found EU-facing onboarding from Austria and Italy, KYC via Plato/GoodFintech, instant-transfer routing via Banky, and ordinary bank-transfer instructions through Speedy AG in Poland with The Kingdom Bank Corporation as account owner.",
        image: IMAGES.railAtlas,
      },
    ],
  },
];

export const SIDEBAR_LATEST: Article[] = [
  {
    title: "Compliance Alert: Binance's Greek MiCA Gamble Reportedly Fails — EU Access Turns Into A Wind-Down Test",
    href: "https://fintelegram.com/binance-greek-mica-gamble/",
    category: "Compliance",
    categoryHref: "https://fintelegram.com/category/compliance/",
    author: "",
    date: "June 17, 2026",
  },
  {
    title: "New Technical Annex Sharpens the Zentoria /Spinsopotamia Cluster!",
    href: "https://fintelegram.com/new-technical-annex-sharpens-the-zentoria-spinsopotamia-cluster/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "Ben",
    date: "June 20, 2026",
  },
  {
    title: "DeFi Bingo: Hyperliquid's Billion-Dollar Machine: DeFi's Most Profitable Trading Startup Faces the License Question",
    href: "https://fintelegram.com/defi-bingo-hyperliquids-billion-dollar-machine/",
    category: "Crypto Compliance",
    categoryHref: "https://fintelegram.com/category/compliance/crypto-compliance/",
    author: "Reg Techer",
    date: "April 14, 2026",
  },
  {
    title: "Who Is Behind Klickl? The Chinese-Controlled Polish VASP Inside The OpenPayd Scam Rails",
    href: "https://fintelegram.com/who-is-behind-klickl/",
    category: "Compliance Reports",
    categoryHref: "https://fintelegram.com/category/compliance/compliance-reports/",
    author: "",
    date: "",
  },
  {
    title: "OpenPayd Financials 2025: Growth Story, Thin Equity Base, And A Very Ambitious Unicorn Valuation",
    href: "https://fintelegram.com/openpayd-financials-2025/",
    category: "CyberFinance",
    categoryHref: "https://fintelegram.com/category/cyberfinance/",
    author: "",
    date: "",
  },
];

export { img };
