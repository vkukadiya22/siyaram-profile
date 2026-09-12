import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import FAQAccordion from "@/components/sections/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions (FAQ)",
  description: "Find answers regarding CNC cutting tolerances, steel plate thicknesses, CAD drawing formats, lead times, and shipping.",
  canonicalUrl: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <PageBanner
        categoryLabel="HELP & KNOWLEDGE BASE"
        title="Frequently Asked Questions"
        description="Clear answers about our engineering capabilities, steel grades, quality assurances, and order processes."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <SectionHeading
            label="KNOWLEDGE BASE"
            title="Common Inquiries Answered"
            align="center"
          />

          <div className="mt-12">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
