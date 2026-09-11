import React from "react";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] md:min-h-[720px] lg:min-h-[780px] flex items-center overflow-hidden -mt-[80px] pt-24 sm:pt-28 md:pt-20 pb-12 sm:pb-16 md:pb-20">
      {/* Background Image with Elegant Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#1D3557]/95 before:via-[#1D3557]/80 before:to-[#1D3557]/50 md:before:from-[#1D3557]/85 md:before:via-[#1D3557]/55 md:before:to-transparent/50 before:z-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero_home.webp')`,
          }}
          aria-label="Siyaram Profile industrial steel engineering"
        />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter w-full">
        <div className="max-w-3xl">
          <span className="font-label-caps text-primary-fixed tracking-[0.2em] mb-2 sm:mb-3 md:mb-4 block uppercase font-bold text-xs sm:text-sm">
            {COMPANY_INFO.name}
          </span>
          <h1 className="text-[28px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-headline-xl text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-sm font-bold leading-[1.18]">
            Precision Engineering <br />
            <span className="text-primary-fixed">Redefined.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-body-lg text-white/90 mb-5 sm:mb-6 md:mb-10 max-w-xl leading-relaxed">
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
      <div className="hidden sm:flex absolute bottom-3 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1 md:gap-2 animate-bounce text-white/70">
        <span className="font-label-caps text-label-caps text-[9px] md:text-[10px]">SCROLL</span>
        <ArrowDown className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70" />
      </div>
    </section>
  );
}
