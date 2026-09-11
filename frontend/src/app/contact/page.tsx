import React from "react";
import ContactForm from "@/components/sections/ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Contact Us",
  description: "Get in touch with Siyaram Profile engineering experts in Bhavnagar, Gujarat for custom CNC cutting and heavy plate inquiries.",
});

export default function ContactPage() {
  return (
    <div className="bg-surface-container-lowest text-on-surface flex flex-col min-h-screen">
      <main className="flex-grow pt-20 sm:pt-24 pb-12 md:pb-16">
        <section className="max-w-container-max mx-auto px-4 sm:px-6 md:px-gutter">
          <Breadcrumb items={[{ label: "Contact Us" }]} variant="dark" />

          <div className="mb-6 md:mb-12 mt-2">
            <h1 className="text-3xl sm:text-4xl md:text-headline-xl text-on-surface mb-3 md:mb-4 font-bold">
              Get in Touch
            </h1>
            <p className="font-body-md text-sm sm:text-base md:text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
              Connect with our engineering experts to discuss your project requirements. We provide precision solutions for industrial scale operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-gutter">
            {/* Left Column: Contact Form */}
            <div className="md:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Contact Details & Map */}
            <div className="md:col-span-5 space-y-6 md:space-y-gutter">
              {/* Contact Info Card */}
              <div className="bg-surface-container-low p-5 sm:p-8 rounded border border-outline-variant text-on-surface shadow-sm">
                <h2 className="font-bold text-2xl sm:text-headline-lg text-on-surface mb-6">
                  Contact Details
                </h2>

                <div className="space-y-6">
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group cursor-pointer block"
                  >
                    <div className="p-3 border border-outline-variant rounded bg-surface-container-lowest text-primary group-hover:border-primary transition-colors">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1 uppercase font-bold group-hover:text-primary transition-colors">Address</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">{COMPANY_INFO.address}</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="p-3 border border-outline-variant rounded bg-surface-container-lowest text-primary group-hover:border-primary transition-colors">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1 uppercase font-bold">Phone</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant font-medium">
                        +91 96249 64125 <span className="text-primary-container font-bold">({COMPANY_INFO.nameMukesh})</span>
                      </p>
                      <p className="font-body-md text-body-md text-on-surface-variant font-medium mt-1">
                        +91 98245 15170 <span className="text-primary-container font-bold">({COMPANY_INFO.nameKishor})</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="p-3 border border-outline-variant rounded bg-surface-container-lowest text-primary group-hover:border-primary transition-colors">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1 uppercase font-bold">Email</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="p-3 border border-outline-variant rounded bg-surface-container-lowest text-primary group-hover:border-primary transition-colors">
                      <span className="material-symbols-outlined">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1 uppercase font-bold">Office Hours</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{COMPANY_INFO.workingHours}</p>
                      <p className="font-body-md text-body-md text-on-surface-variant/80 text-sm mt-1">Sunday Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-outline-variant">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] text-[#000000] font-label-caps text-label-caps px-6 py-4 rounded hover:bg-[#128C7E] hover:text-white transition-colors duration-300 flex items-center justify-center space-x-2 font-bold"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Real Google Map Card */}
              <div className="rounded border border-outline-variant overflow-hidden bg-surface-container-lowest shadow-sm flex flex-col">
                <div className="h-[320px] w-full relative">
                  <iframe
                    title="Siyaram Profile Location Map"
                    src="https://maps.google.com/maps?q=Siyaram+Profile+GIDC+Mamasa+Bhavnagar+Gujarat&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4 bg-surface-container-low flex justify-between items-center border-t border-outline-variant/30">
                  <span className="font-label-caps text-xs text-on-surface font-bold flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-base">location_on</span>
                    GIDC Mamasa, Talaja Highway, Bhavnagar
                  </span>
                  <a
                    href="https://maps.app.goo.gl/4MTwR7rgbVes7qVv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-xs text-primary-container hover:text-primary font-bold inline-flex items-center gap-1 uppercase"
                  >
                    Open in Maps
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
