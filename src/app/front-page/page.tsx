import type { Metadata } from "next";
import FrontPageContent from "@/components/FrontPageContent";

export const metadata: Metadata = {
  title: "FinTelegram – Exposing Financial Crime & Regulatory Failures",
  description:
    "FinTelegram is a cyber finance intelligence platform focused on exposing financial crime, regulatory violations, and high-risk investment schemes.",
};

export default function FrontPage() {
  return <FrontPageContent />;
}
