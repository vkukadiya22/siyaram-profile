"use client";

import React from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${COMPANY_INFO.phoneMukesh || "+919624964125"}`}
      aria-label="Call Siyaram Profile"
      className="fixed bottom-5 left-5 z-40 bg-primary-container text-white p-3.5 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group"
    >
      <Phone className="w-5 h-5 text-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-label-caps text-xs ml-0 group-hover:ml-2 font-bold">
        Call Now
      </span>
    </a>
  );
}
