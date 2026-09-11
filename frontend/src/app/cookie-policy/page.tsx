import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Cookie Policy",
  description: "Cookie Policy for Siyaram Profile explaining how we use essential cookies and web analytics.",
});

export default function CookiePolicyPage() {
  return (
    <>
      <PageBanner
        categoryLabel="LEGAL & POLICIES"
        title="Cookie Policy"
        description="Transparent overview of how cookies and browser data are managed at Siyaram Profile."
        breadcrumbs={[{ label: "Cookie Policy" }]}
      />

      <section className="py-section-padding bg-white text-deep-navy">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-gutter space-y-8 font-body-md leading-relaxed">
          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p className="text-deep-navy/80">
              Cookies are small text files stored on your computer or mobile device when visiting websites. They help the website recognize your browser, maintain secure user sessions, and deliver an optimized browsing experience.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">2. How Siyaram Profile Uses Cookies</h2>
            <p className="text-deep-navy/80">
              We use strictly necessary cookies to enable site navigation, security features, and technical inquiry processing. We do not use third-party advertising cookies or sell user browsing data.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">3. Essential & Performance Cookies</h2>
            <ul className="list-disc pl-6 space-y-2 text-deep-navy/80">
              <li><strong>Essential Session Cookies:</strong> Required for routing, security, and contact form submission.</li>
              <li><strong>Performance Analytics:</strong> Helps us understand page load performance and optimize website accessibility for industrial clients.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">4. Managing Your Cookie Preferences</h2>
            <p className="text-deep-navy/80">
              You can choose to disable or block cookies through your individual browser settings (Chrome, Safari, Firefox, Edge). Please note that disabling essential cookies may impact certain interactive features on our website.
            </p>
          </div>

          <div>
            <h2 className="font-headline-md text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-deep-navy/80">
              If you have any questions regarding our Cookie Policy, please contact our legal compliance team at <span className="font-bold text-primary-container">{COMPANY_INFO.email}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
