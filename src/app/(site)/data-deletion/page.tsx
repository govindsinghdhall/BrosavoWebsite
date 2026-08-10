import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { LegalContent } from "@/components/sections/LegalContent";
import { DATA_DELETION_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Data Deletion Request — BROSAVO",
  description:
    "Instructions for requesting deletion of personal data associated with BROSAVO services.",
};

export default function DataDeletionPage() {
  return (
    <>
      <PageHero
        label="Privacy"
        title="Data Deletion Request"
        description="Learn how to request deletion of your personal data associated with BROSAVO services."
      />

      <LegalContent
        sections={DATA_DELETION_SECTIONS}
        lastUpdated="August 11, 2026"
      />
    </>
  );
}