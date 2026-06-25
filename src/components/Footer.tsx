import ProxiedImage from "@/components/ProxiedImage";
import Link from "next/link";
import { SITE, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ft-black text-white mt-auto">
      <div className="td-container py-10">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="mb-6">
            <ProxiedImage
              src={SITE.footerLogo}
              alt="FinTelegram"
              width={200}
              height={50}
              className="h-[45px] w-auto"
            />
          </Link>
          <p className="text-[13px] text-white/70 leading-relaxed max-w-[700px] mb-6">
            FinTelegram is a cyberfinance intelligence and compliance platform
            investigating financial crime, regulatory violations, and the rails,
            entities, and ecosystems that facilitate them. Combining investigative
            journalism, whistleblower intelligence, and forensic compliance analysis,
            we map risk across payments, banking, crypto, and offshore structures to
            support transparency, accountability, and informed action.
          </p>
          <p className="text-[11px] text-white/50 leading-relaxed max-w-[700px] mb-6">
            <strong className="text-white/60">Disclaimer:</strong> FinTelegram is
            an independent intelligence and compliance platform and does not provide
            investment, legal, or financial advice. Content published on this
            website, including references and links to third-party sources, is
            provided for informational, contextual, and educational purposes only
            and does not constitute a recommendation, endorsement, or solicitation.
          </p>
          <div className="flex items-center gap-4 mb-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] text-white/70 hover:text-ft-red uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-[12px] text-white/50">
            &copy; Copyright - FinTelegram News powered by Cyber Intelligence
            Services LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
