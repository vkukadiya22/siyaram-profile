import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/constants";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-deep-navy border-t border-white/10 w-full text-white mt-auto">
      {/* Main Footer Container */}
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-gutter py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-gutter">
          {/* Brand Info (Desktop / Larger Screen only) */}
          <div className="hidden lg:block lg:col-span-2">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="font-body-md text-sm md:text-body-md text-white/70 max-w-md mb-6 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="font-body-md text-xs md:text-body-md text-white/60">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </div>
          </div>

          {/* Links Container (2 columns on phone, 2 columns on desktop) */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="font-label-caps text-label-caps text-primary-fixed font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Gallery & Projects
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-label-caps text-label-caps text-primary-fixed font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
                Legal & Info
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link href="/privacy" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="font-body-md text-body-md text-white/80 hover:text-primary-fixed transition-colors py-0.5 inline-block">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-1 pt-6 border-t border-white/10 lg:pt-0 lg:border-t-0">
            <h4 className="font-label-caps text-label-caps text-primary-fixed font-bold mb-4 tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span>
              Get In Touch
            </h4>

            <div className="flex flex-col gap-3.5">
              {/* Address */}
              <a
                href={COMPANY_INFO.googleMapsUrl || "https://maps.app.goo.gl/zsFeiSK69JnX2iMi6"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 bg-white/[0.03] hover:bg-white/[0.07] p-3 rounded-lg border border-white/5 transition-colors group"
              >
                <span className="material-symbols-outlined text-[20px] text-primary-fixed flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">location_on</span>
                <span className="font-body-md text-body-md text-white/80 group-hover:text-primary-fixed transition-colors leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] p-3 rounded-lg border border-white/5 transition-colors group"
              >
                <span className="material-symbols-outlined text-[20px] text-primary-fixed flex-shrink-0">mail</span>
                <span className="font-body-md text-body-md text-white/80 group-hover:text-primary-fixed transition-colors break-all">
                  {COMPANY_INFO.email}
                </span>
              </a>

              {/* Phone Numbers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                <a
                  href="tel:+919624964125"
                  className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] p-3 rounded-lg border border-white/5 transition-colors group"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary-fixed flex-shrink-0">call</span>
                  <div className="flex flex-col">
                    <span className="font-body-md text-xs text-white/50">{COMPANY_INFO.nameMukesh}</span>
                    <span className="font-body-md text-body-md text-white/90 font-medium group-hover:text-primary-fixed transition-colors">+91 96249 64125</span>
                  </div>
                </a>

                <a
                  href="tel:+919824515170"
                  className="flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.07] p-3 rounded-lg border border-white/5 transition-colors group"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary-fixed flex-shrink-0">call</span>
                  <div className="flex flex-col">
                    <span className="font-body-md text-xs text-white/50">{COMPANY_INFO.nameKishor}</span>
                    <span className="font-body-md text-body-md text-white/90 font-medium group-hover:text-primary-fixed transition-colors">+91 98245 15170</span>
                  </div>
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366]/15 hover:bg-[#25D366]/25 active:scale-[0.98] border border-[#25D366]/30 rounded-lg text-[#25D366] font-semibold font-body-md text-body-md transition-all duration-200 mt-1 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-5 px-4 text-center">
        <p className="font-body-md text-body-md text-white/60">
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
