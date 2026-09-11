import React from "react";
import { COMPANY_INFO } from "@/lib/constants";

export default function StatsCounter() {
  const stats = [
    { label: "Years of Excellence", value: COMPANY_INFO.yearsOfExcellence },
    { label: "Projects Delivered", value: COMPANY_INFO.projectsDelivered },
    { label: "Satisfied Clients", value: COMPANY_INFO.clientsServed },
    { label: "Quality Guarantee", value: COMPANY_INFO.defectFreeRate },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 bg-deep-navy text-white border-y border-white/10">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-3 sm:p-4 border-r border-white/10 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:last:border-r-0">
              <div className="font-stats-num text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-fixed mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="font-label-caps text-[11px] sm:text-xs text-white/70 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
