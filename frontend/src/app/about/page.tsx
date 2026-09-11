import React from "react";
import PageBanner from "@/components/ui/PageBanner";
import Timeline from "@/components/sections/Timeline";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "About Us - Our Legacy of Precision",
  description: "Pioneering industrial excellence through advanced manufacturing, structural integrity, and unwavering commitment to quality in Bhavnagar, Gujarat.",
});

export default function AboutPage() {
  return (
    <>
      <PageBanner
        categoryLabel="ABOUT SIYARAM PROFILE"
        title="Our Legacy of Precision"
        description="Pioneering industrial excellence through advanced manufacturing, structural integrity, and unwavering commitment to quality in Bhavnagar, Gujarat."
        bgImage="https://lh3.googleusercontent.com/aida-public/AB6AXuB6hFIZneg6J3Nq8zcSwhQK4DPwI160EQ57Vf-UUdGEt_jqcUMZc6_R-gB4Ce3Nb8yUdxTAqie_ieC51pRqIkoCcLVr2mL61GOXNsxICeKI-hrWeLchNSoKgp0dMtMx9-fRV-zFfpcnjSbpw-mU0ROqCDBGhElQjEfMJNAAnjXuUUbEZG0viFJB-8iJdi9J2SbzXkFbGGu4uqrZgJUAJ9eezx5yhDzu6HBKXDeCZFxm6qdjKbK52BZg"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Our Story Section */}
      <section className="py-10 md:py-section-padding bg-surface-container-low text-on-surface">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4 md:mb-6 border-l-4 border-primary-container pl-4 md:pl-6 font-bold">
              Forged in Bhavnagar
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 md:mb-6 leading-relaxed">
              Established in the industrial heart of Gujarat, Siyaram Profile began with a singular vision: to elevate the standards of precision engineering. What started as a specialized workshop has evolved into a premier manufacturing facility equipped to handle complex, large-scale projects.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 md:mb-8">
              Our journey is defined by continuous technological adaptation and a deep-rooted understanding of metallurgical science. We don&apos;t just shape metal; we engineer structural solutions that form the backbone of modern infrastructure.
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-8 mt-6 md:mt-12 border-t border-outline-variant/30 pt-6 md:pt-8">
              <div>
                <div className="font-display-lg text-3xl md:text-display-lg text-primary-container mb-1 md:mb-2 font-bold">
                  {COMPANY_INFO.yearsOfExcellence}
                </div>
                <div className="font-label-sm text-xs md:text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Years of Excellence
                </div>
              </div>
              <div>
                <div className="font-display-lg text-3xl md:text-display-lg text-primary-container mb-1 md:mb-2 font-bold">
                  {COMPANY_INFO.projectsDelivered}
                </div>
                <div className="font-label-sm text-xs md:text-label-sm uppercase tracking-wider text-on-surface-variant">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>

          <div className="relative group mt-4 lg:mt-0">
            <div className="absolute inset-0 bg-primary-container/10 -translate-x-2 translate-y-2 md:-translate-x-4 md:translate-y-4 border border-outline-variant/50 rounded" />
            <div
              className="relative z-10 w-full h-[320px] sm:h-[400px] md:h-[500px] bg-cover bg-center rounded border border-outline-variant/50 transition-all duration-700"
              style={{
                backgroundImage: `url('/factory2.webp')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-section-padding bg-white border-y border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="glass-panel p-6 md:p-10 border border-outline-variant/50 rounded hover:border-primary-container transition-colors duration-500 bg-surface-container-lowest shadow-sm hover:shadow-md">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">explore</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-3 md:mb-4 font-bold">Our Mission</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To deliver unparalleled precision engineering components that drive industrial progress. We commit to utilizing advanced manufacturing technologies and stringent quality controls to exceed client specifications on every project.
            </p>
          </div>

          <div className="glass-panel p-6 md:p-10 border border-outline-variant/50 rounded hover:border-primary-container transition-colors duration-500 bg-surface-container-lowest shadow-sm hover:shadow-md">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
              <span className="material-symbols-outlined text-primary text-2xl md:text-3xl">visibility</span>
            </div>
            <h3 className="font-title-md text-title-md text-on-surface mb-3 md:mb-4 font-bold">Our Vision</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To be recognized globally as the definitive standard for industrial profile manufacturing, fostering a future where structural integrity and innovative engineering seamlessly integrate to build robust, sustainable infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-10 md:py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading
            label="MILESTONES"
            title="Our Journey Through The Years"
            subtitle="Continuous growth, technological adoption, and commitment to manufacturing excellence."
            align="center"
          />
          <Timeline />
        </div>
      </section>

      {/* Infrastructure Showcase */}
      <section className="py-10 md:py-section-padding bg-white text-on-surface border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto px-gutter">
          <SectionHeading
            label="FACILITY"
            title="Advanced Infrastructure"
            subtitle="Our facility houses state-of-the-art CNC centers and specialized fabrication equipment capable of handling massive structural elements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-8">
            <div className="relative h-64 overflow-hidden group rounded">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage: `url('/factory4.webp')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                  CNC Machining
                </span>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group rounded">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd7pjX-h3rwgMf4EFadlf0nFm-AXDA5AbHtdaxaI38XOxPH-948N_biT0u8DCHRgYrzkm01n00xxsErP2-sKxog71WxQOa6xWUR3K0bT-EQbNBwIybJdebDPPhREcVgVdgw2FMUlGR8Ogduve-rilY7T8US4eb8rJcRNtqcZc87jCI1ogF-gxRy1gQ-1D-6cnlvG34kAuEHAeQ_GOtoXsGkhOaPxI9afWIUcgxfVehnd155syXapTs')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                  Laser Cutting
                </span>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group rounded">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWScjYW5O3R9XWSIwrAxsnO7e1veJUTB2KHxU-x02SsHM0_eQ--_l3moX2t0Kh0mDCiOzSr09vchQl5t5BxD0RgFYWmKYv_pFEvRVx4DEv-pNIvit_aavOU-NPZkl8thzVyqs5HuMGVfXdsrw_cUGiZrd1kysPTBiFzaHJR8tCCLEjGkxH5CHLPgIFdPKLoYYqDepKq3df7vhWPtb5UycpUb-JA0Uu89Apco4Baq00S6LUU4ruswiC')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                  Material Storage
                </span>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden group rounded">
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtogaX9Y4mZELH3tO_xOHeCOJ_AdsFIUn7JwG8Yi70SMBO8qgriP8U7rMam2lpKDVTjJsVAoZZ84R1z_RPJAlfksOjv9pJngkcTL5a2tl5KCK1RVjwUI87wr0A3Izr7a3tC94lt5UjbiaoG217ZpublSN17MnrtXCLgRNf_Wd_uyy_Poi1w5FXbDcvnJE7OM9iuBqbC5usYk-HQ1xxfT4-cFlgjJe6dHeDs9qTDbx6bFaL5A2MVpUB')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider font-bold">
                  Quality Assurance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
