import React from "react";
import Link from "next/link";
import { ServiceItem, COMPANY_INFO } from "@/lib/constants";
import { 
  Cpu, 
  Disc, 
  Layers, 
  Tractor, 
  Wrench, 
  Scissors, 
  Building2, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";

function getServiceIcon(iconName: string) {
  switch (iconName) {
    case "precision_manufacturing":
      return <Cpu className="w-5 h-5 text-[#0077B6]" />;
    case "trip_origin":
      return <Disc className="w-5 h-5 text-[#0077B6]" />;
    case "layers":
      return <Layers className="w-5 h-5 text-[#0077B6]" />;
    case "agriculture":
      return <Tractor className="w-5 h-5 text-[#0077B6]" />;
    case "settings_suggest":
      return <Wrench className="w-5 h-5 text-[#0077B6]" />;
    case "content_cut":
      return <Scissors className="w-5 h-5 text-[#0077B6]" />;
    case "foundation":
      return <Building2 className="w-5 h-5 text-[#0077B6]" />;
    default:
      return <Wrench className="w-5 h-5 text-[#0077B6]" />;
  }
}

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
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded border border-[#0077B6]/20 shadow-sm flex items-center justify-center">
          {getServiceIcon(service.icon)}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-xl sm:text-2xl text-deep-navy mb-2.5">
          {service.title}
        </h3>
        <p className="font-body-md text-body-md text-deep-navy/80 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>

        {service.features && service.features.length > 0 && (
          <ul className="mb-6 space-y-1 border-t border-deep-navy/10 pt-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs font-label-caps text-deep-navy/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary-container mr-1.5 flex-shrink-0" />
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
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
