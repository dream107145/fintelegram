import Link from "next/link";
import SiteLayout from "@/components/SiteLayout";
import Breadcrumb from "@/components/Breadcrumb";
import { SITE, SOCIAL_LINKS } from "@/lib/data";

const INTRO =
  "FinTelegram is a cyber finance intelligence platform focused on exposing financial crime, regulatory violations, and high-risk investment schemes. We empower investors, regulators, and journalists with investigative reports, whistleblower insights, and forensic financial analysis.";

export default function FrontPageContent() {
  return (
    <SiteLayout>
      <div className="td-container py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
          ]}
        />

        <article className="td-page-content">
          <header className="td-page-header">
            <h1 className="td-page-title">FinTelegram Financial Intelligence</h1>
            <p className="td-page-tagline">{SITE.tagline}</p>
          </header>

          <div className="td-page-body">
            <p>{INTRO}</p>
            <p className="td-page-contact">
              Contact us:{" "}
              <a href={`mailto:${SITE.contact}`} className="td-page-email">
                {SITE.contact}
              </a>
            </p>
          </div>

          <div className="td-page-social">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </article>
      </div>
    </SiteLayout>
  );
}
