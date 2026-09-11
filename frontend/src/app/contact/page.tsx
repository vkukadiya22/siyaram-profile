import React from "react";
import ContactForm from "@/components/sections/ContactForm";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY_INFO } from "@/lib/constants";
import { constructMetadata } from "@/lib/metadata";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

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
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1 uppercase font-bold group-hover:text-primary transition-colors">Address</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant group-hover:text-primary transition-colors">{COMPANY_INFO.address}</p>
                    </div>
                  </a>

                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="p-3 border border-outline-variant rounded bg-surface-container-lowest text-primary group-hover:border-primary transition-colors">
                      <Phone className="w-5 h-5" />
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
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-label-caps text-label-caps text-on-surface mb-1 uppercase font-bold">Email</h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="p-3 border border-outline-variant rounded bg-surface-container-lowest text-primary group-hover:border-primary transition-colors">
                      <Clock className="w-5 h-5" />
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
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
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
                    <MapPin className="w-4 h-4 text-primary" />
                    GIDC Mamasa, Talaja Highway, Bhavnagar
                  </span>
                  <a
                    href="https://maps.app.goo.gl/4MTwR7rgbVes7qVv8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-label-caps text-xs text-primary-container hover:text-primary font-bold inline-flex items-center gap-1 uppercase"
                  >
                    Open in Maps
                    <ExternalLink className="w-3.5 h-3.5" />
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
