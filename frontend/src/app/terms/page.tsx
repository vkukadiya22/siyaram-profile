import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "Terms and conditions governing engineering services, profile cutting tolerances, and order fulfillment at Siyaram Profile.",
});

export default function TermsPage() {
  return (
    <>
      <PageBanner
        categoryLabel="LEGAL & AGREEMENTS"
        title="Terms of Service"
        description="Standard terms and conditions for manufacturing orders, material supply, and technical engineering services."
        breadcrumbs={[{ label: "Terms of Service" }]}
      />

      <section className="py-section-padding bg-white text-deep-navy">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-gutter space-y-8 font-body-md leading-relaxed">
          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">1. Engineering Specifications & Tolerances</h2>
            <p className="text-deep-navy/80">
              All profile cutting, circle cutting, and CNC machining orders are executed based on approved CAD/CAM technical drawings. Standard dimensional tolerances apply unless customized tolerances are explicitly agreed upon in writing prior to fabrication.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">2. Material Test Certificates (MTC)</h2>
            <p className="text-deep-navy/80">
              Mild Steel (M.S.) plates and alloys supplied by Siyaram Profile come with traceable mill test certificates complying with IS 2062 / ASTM standards upon client request.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">3. Payment Terms & Delivery</h2>
            <p className="text-deep-navy/80">
              Quotation prices are valid for the timeframe stated in the official estimate. Delivery timelines commence upon drawing confirmation and advance receipt as outlined in the proforma invoice.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">4. Governing Law & Jurisdiction</h2>
            <p className="text-deep-navy/80">
              Any legal disputes or proceedings arising out of engineering contracts shall be subject to the exclusive jurisdiction of the competent courts in Bhavnagar, Gujarat, India.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
