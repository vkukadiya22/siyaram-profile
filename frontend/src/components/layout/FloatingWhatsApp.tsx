"use client";

import React from "react";
import { COMPANY_INFO } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      <span className="material-symbols-outlined text-xl">chat</span>
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-label-caps text-xs ml-0 group-hover:ml-2 font-bold">
        WhatsApp Us
      </span>
    </a>
  );
}
