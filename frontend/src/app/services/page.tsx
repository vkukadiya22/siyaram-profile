import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES_LIST, COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Specialized Engineering Services",
  description: "Explore Siyaram Profile CNC Cutting, Profile Cutting, Circle Cutting, M.S. Plate Supply, Agro Parts, and Custom Engineering Solutions.",
});

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        categoryLabel="CAPABILITIES"
        title="Our Specialized Services"
        description="Engineered precision for heavy industry. We leverage advanced machinery and rigorous quality control to deliver structural components that form the backbone of modern infrastructure."
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAlpPvko-mS4pRtvm09Acw1Cj6NGVJvw9IDDLEpA-1CELsAaNR7a3OnsRUQiVaKHD5N735Gi5WoYBQJBbQp5lBGOvOi90Q0VuGUWd3Vat6qkFEO9XN394fOBXRKhnfyQjTuJs2E97cErY33D9EqJNZulzoNjLZWZd6-iZRFMEDP3Dtte5fVaiPzWDXeruedueI5TR7q_caLWiJsnPZ2dQgO4cMFytRJd6v_A77mzDMzAsddw1d_qOV_"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-section-padding bg-[#CAF0F8] relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {SERVICES_LIST.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
