import React from "react";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[640px] sm:min-h-[700px] md:min-h-[780px] lg:min-h-[820px] flex items-center overflow-hidden -mt-[80px] pt-24 md:pt-20 pb-20 md:pb-16">
      {/* Background Image with Elegant Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1D3557]/90 before:via-[#1D3557]/70 before:to-[#1D3557]/40 md:before:from-[#1D3557]/80 md:before:via-[#1D3557]/50 md:before:to-transparent/50 before:z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero_home.webp')`,
          }}
          aria-label="Siyaram Profile industrial steel engineering"
        />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full -mt-6 md:-mt-12">
        <div className="max-w-3xl">
          <span className="font-label-caps text-primary-fixed tracking-[0.2em] mb-3 md:mb-4 block uppercase font-bold text-sm sm:text-sm md:text-sm">
            {COMPANY_INFO.name}
          </span>
          <h1 className="text-[34px] leading-[1.18] sm:text-4xl md:font-headline-xl md:text-headline-xl text-white mb-4 md:mb-6 drop-shadow-sm font-bold">
            Precision Engineering <br />
            <span className="text-primary-fixed">Redefined.</span>
          </h1>
          <p className="text-base sm:text-lg md:font-body-lg md:text-body-lg text-white/90 mb-6 md:mb-10 max-w-xl leading-relaxed">
            From M.S. plates to finished engineering components, we deliver reliable steel solutions built to meet industrial demands.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button href="/services" variant="primary" size="lg" icon="arrow_forward" className="w-full sm:w-auto text-center justify-center">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 md:gap-2 animate-bounce text-white/70">
        <span className="font-label-caps text-label-caps text-[9px] md:text-[10px]">SCROLL</span>
        <span className="material-symbols-outlined text-[14px] md:text-[16px]">south</span>
      </div>
    </section>
  );
}
