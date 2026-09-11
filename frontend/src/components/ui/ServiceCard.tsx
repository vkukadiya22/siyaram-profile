import React from "react";
import Link from "next/link";
import { ServiceItem, COMPANY_INFO } from "@/lib/constants";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const whatsappQuoteUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello Siyaram Profile team, I would like to get a quote / inquire about *${service.title}*.`)}`;

  return (
    <div className="group bg-white border border-[#0077B6]/20 rounded-lg overflow-hidden hover:border-[#0077B6] transition-colors duration-300 flex flex-col h-full shadow-sm hover:shadow-md">
      <div className="h-64 relative overflow-hidden bg-surface-variant">
        <div
          className="bg-cover bg-center w-full h-full group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url('${service.image}')` }}
          aria-label={service.alt}
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded border border-[#0077B6]/20 shadow-sm">
          <span className="material-symbols-outlined text-[#0077B6]">
            {service.icon}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">
          {service.title}
        </h3>
        <p className="font-body-md text-body-md text-deep-navy/80 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="mb-6 space-y-1 border-t border-deep-navy/10 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs font-label-caps text-deep-navy/70">
                <span className="material-symbols-outlined text-[14px] text-primary-container mr-1">
                  check_circle
                </span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center justify-between pt-2">
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-container hover:text-primary font-label-caps text-label-caps uppercase group/btn font-bold transition-colors"
          >
            Inquire Now
            <span className="material-symbols-outlined ml-2 group-hover/btn:translate-x-1 transition-transform text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
