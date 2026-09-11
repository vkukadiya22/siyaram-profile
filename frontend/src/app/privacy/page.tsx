import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Siyaram Profile outlining data protection, cookie policies, and technical inquiry handling.",
});

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        categoryLabel="LEGAL & POLICIES"
        title="Privacy Policy"
        description="Our commitment to safeguarding client information and industrial project data."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="py-section-padding bg-white text-deep-navy">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-gutter space-y-8 font-body-md leading-relaxed">
          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">1. Data Collection</h2>
            <p className="text-deep-navy/80">
              Siyaram Profile collects information provided directly by clients when requesting quotations or submitting technical blueprints, including name, email address, phone number, company name, and CAD specifications.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">2. Use of Information</h2>
            <p className="text-deep-navy/80">
              The information collected is strictly used to evaluate manufacturing feasibility, generate pricing quotes, execute order fulfillment, and provide technical customer support.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">3. Data Security & Confidentiality</h2>
            <p className="text-deep-navy/80">
              All client engineering drawings, proprietary component designs, and project data are treated as strictly confidential. We maintain robust administrative, technical, and physical safeguards to prevent unauthorized access.
            </p>
          </div>

          <div id="cookies">
            <h2 className="font-headline-md text-2xl font-bold mb-4">4. Cookie Policy</h2>
            <p className="text-deep-navy/80">
              Our website uses essential cookies to ensure optimal performance, user session stability, and security analytics. You may manage cookie preferences through your web browser settings.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">5. Contact Information</h2>
            <p className="text-deep-navy/80">
              For any privacy or data inquiries, please email us at <span className="font-bold text-primary-container">{COMPANY_INFO.email}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
