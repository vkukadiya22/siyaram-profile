"use client";

import React, { useState } from "react";
import { FAQ_LIST } from "@/lib/constants";
import { ChevronDown } from "lucide-react";

type Language = "en" | "gu" | "hi";

export default function FAQAccordion() {
  const [lang, setLang] = useState<Language>("en");
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const languages: { code: Language; label: string; }[] = [
    { code: "en", label: "English"},
    { code: "gu", label: "ગુજરાતી (Gujarati)"},
    { code: "hi", label: "हिन्दी (Hindi)"},
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Language Switcher Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-8 p-1.5 bg-surface-container-highest/60 backdrop-blur-sm rounded-xl border border-outline-variant/40 w-fit mx-auto shadow-sm">
        {languages.map((item) => {
          const isActive = lang === item.code;
          return (
            <button
              key={item.code}
              onClick={() => setLang(item.code)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-primary-container text-white shadow-md scale-[1.02]"
                  : "text-deep-navy hover:bg-white/80"
              }`}
            >
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {FAQ_LIST.map((faq) => {
          const isOpen = openId === faq.id;

          const questionText =
            lang === "gu"
              ? faq.questionGu
              : lang === "hi"
              ? faq.questionHi
              : faq.question;

          const answerText =
            lang === "gu"
              ? faq.answerGu
              : lang === "hi"
              ? faq.answerHi
              : faq.answer;

          return (
            <div
              key={faq.id}
              className="border border-outline-variant/40 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full p-5 md:p-6 text-left flex justify-between items-center focus:outline-none hover:bg-surface-container-low transition-colors gap-4"
              >
                <span className="font-headline-md text-base md:text-lg font-bold text-deep-navy leading-snug">
                  {questionText}
                </span>
                <ChevronDown className={`text-primary-container w-6 h-6 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-5 md:px-6 pb-6 pt-2 font-body-md text-deep-navy/85 border-t border-outline-variant/20 leading-relaxed text-sm md:text-base animate-in fade-in duration-300">
                  {answerText}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

