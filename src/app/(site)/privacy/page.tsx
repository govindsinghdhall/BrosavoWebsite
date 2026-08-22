import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { CompanyWorkplacePolicy } from "@/components/sections/CompanyWorkplacePolicy";
import { PRIVACY_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — BROSAVO",
  description:
    "Read the BROSAVO Privacy Policy to learn how we collect, use, protect and manage information when you use our website and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="Your privacy matters. This policy explains how we handle your data across our global operations."
      />

      <LegalContent
        sections={PRIVACY_SECTIONS}
        lastUpdated="June 11, 2026"
      />

      <CompanyWorkplacePolicy />
    </>
  );
}