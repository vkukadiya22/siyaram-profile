import React from "react";
import Hero from "@/components/sections/Hero";
import ServiceCard from "@/components/ui/ServiceCard";
import StatsCounter from "@/components/sections/StatsCounter";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { SERVICES_LIST, COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Precision Engineering Redefined",
  description: "Premier partner for precision CNC profile cutting, circle cutting, and heavy steel plate supply in Bhavnagar, Gujarat.",
});

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Company Intro Section - Matches home.html */}
      <section className="py-10 md:py-section-padding bg-white text-deep-navy border-t border-deep-navy/5">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="ABOUT SIYARAM PROFILE"
              title="Crafting Quality. Building Confidence"
              subtitle=""
            />
            <p className="font-body-md text-body-md text-deep-navy/80 mb-6 leading-relaxed">
              From M.S. Plate processing to CNC and Profile Cutting, Siyaram Profile delivers dependable manufacturing solutions designed for industrial, agricultural, and engineering applications. Every product reflects our commitment to quality, precision, and customer satisfaction.
            </p>
            <p className="font-body-md text-body-md text-deep-navy/80 mb-8 leading-relaxed">
              Our commitment goes beyond machinery; it&apos;s about a culture of exacting standards, robust quality control, and a deep understanding of metallurgical properties. We don&apos;t just cut steel; we engineer solutions.
            </p>
            <Button href="/about" variant="primary" icon="arrow_forward">
              Learn Our Legacy
            </Button>
          </div>

          <div className="relative h-[400px] border border-primary-container/20 rounded overflow-hidden group">
            <div className="absolute inset-0 bg-primary-container/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <img
              className="w-full h-full object-cover"
              alt="Siyaram Profile industrial factory workshop floor in Bhavnagar"
              src="/factory.webp"
            />
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="py-10 md:py-section-padding bg-[#CAF0F8] relative z-10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <SectionHeading
            label="CAPABILITIES"
            title="Our Specialized Engineering Services"
            subtitle="Engineered precision for heavy industry. We leverage advanced machinery and rigorous quality control."
            align="center"
          />

          <div className="flex md:grid overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 md:gap-gutter pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {SERVICES_LIST.map((service) => (
              <div key={service.id} className="w-[85vw] max-w-[320px] shrink-0 snap-center md:w-auto md:shrink">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />


    </>
  );
}
