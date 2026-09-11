"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-[#1D3557]/90 backdrop-blur-md border-b border-white/10 shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter py-2.5 sm:py-3">
        {/* Brand Logo with Official Emblem */}
        <Logo variant="light" />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label-caps text-label-caps transition-all duration-300 scale-95 active:scale-90 ${
                  isActive
                    ? "text-primary-fixed border-b-2 border-primary-fixed pb-1 font-bold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Contact CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary-container text-white font-label-caps text-label-caps px-6 py-3 rounded hover:bg-[#005d90] transition-colors scale-95 active:scale-90 transition-transform shadow-sm"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 focus:outline-none active:scale-90"
          aria-label="Toggle Navigation Menu"
        >
          <span className={`material-symbols-outlined text-2xl transition-transform duration-300 ease-in-out block ${
            mobileMenuOpen ? "rotate-90 text-primary-fixed" : "rotate-0 text-white"
          }`}>
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu - Pure GPU CSS Grid Animation (Zero-Blink & 60fps Smooth) */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden overflow-hidden ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-white/10"
            : "grid-rows-[0fr] opacity-0 border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-margin-mobile pt-3 pb-6 flex flex-col space-y-2.5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-label-caps text-label-caps text-sm py-2.5 px-4 rounded-lg block transition-colors duration-200 ${
                    isActive
                      ? "bg-primary-container/30 text-primary-fixed font-bold border border-primary-fixed/20"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-primary-container text-white font-label-caps text-label-caps py-3 rounded-lg hover:bg-[#005d90] transition-colors mt-2 shadow-md font-bold block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
