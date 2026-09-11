"use client";

import React, { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import GalleryCard from "@/components/ui/GalleryCard";
import SectionHeading from "@/components/ui/SectionHeading";

interface GalleryItem {
  id: string;
  title: string;
  category: "Factory" | "Machines" | "Finished Products" | "Projects";
  image: string;
  alt: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  // Finished Products
  {
    id: "g-prod-1",
    title: "Agricultural Cultivator Tota Panja Front Tyne",
    category: "Finished Products",
    image: "/tota-panja-tyne.webp",
    alt: "Precision profile cut agricultural cultivator front tynes",
  },
  {
    id: "g-prod-2",
    title: "Square Steel Flange Plates with Center Hole",
    category: "Finished Products",
    image: "/factory1.webp",
    alt: "Neat stacks of square steel flanges with center bore",
  },
  {
    id: "g-prod-3",
    title: "Heavy Curved Structural & Agricultural Brackets",
    category: "Finished Products",
    image: "/factory6.webp",
    alt: "Large stacks of curved profile cut structural steel brackets",
  },
  {
    id: "g-prod-4",
    title: "Heavy Steel Cultivator Implement Tynes",
    category: "Finished Products",
    image: "/factory8.webp",
    alt: "Cultivator tynes stacked on factory floor",
  },
  {
    id: "g-prod-5",
    title: "Thick Gauge Curved Profile Cut Steel Plates",
    category: "Finished Products",
    image: "/factory9.webp",
    alt: "Thick bent steel profile components",
  },
  {
    id: "g-prod-6",
    title: "Heavy Steel L-Brackets & Circular Blanks",
    category: "Finished Products",
    image: "/factory10.webp",
    alt: "Profile cut L-brackets and circular disc blanks",
  },
  {
    id: "g-prod-7",
    title: "Custom Profile Cut L-Bracket Mounting Plates",
    category: "Finished Products",
    image: "/factory12.webp",
    alt: "Stacked L-shaped mounting plates",
  },
  {
    id: "g-prod-8",
    title: "Heavy Flame-Cut Steel Mall Components",
    category: "Finished Products",
    image: "/cutting-mall.webp",
    alt: "Flame cut steel mall profile parts stacked in rows",
  },
  {
    id: "g-prod-9",
    title: "Heavy CNC Drilled Link Arms & Plates",
    category: "Finished Products",
    image: "/link-arms.webp",
    alt: "Precision CNC drilled heavy link arm plates",
  },
  {
    id: "g-prod-10",
    title: "Heavy Profile-Cut Steel Bearing & Lug Blocks",
    category: "Finished Products",
    image: "/bearing-blocks.webp",
    alt: "Thick steel bearing housing and lug block profiles",
  },
  {
    id: "g-prod-11",
    title: "Mass Production Profile Cut Steel Flanges",
    category: "Finished Products",
    image: "/mass-flanges.webp",
    alt: "High volume production profile cut flanges",
  },
  {
    id: "g-prod-12",
    title: "Heavy Duty Cultivator Tynes & Circle Discs",
    category: "Finished Products",
    image: "/tynes-discs.webp",
    alt: "Curved agricultural tynes and circular steel disc plates",
  },

  // Machines
  {
    id: "g-mac-1",
    title: "Aakruti PRO CUT CNC Cutting System 3000",
    category: "Machines",
    image: "/factory4.webp",
    alt: "Aakruti PRO CUT CNC profile cutting machine bed",
  },
  {
    id: "g-mac-2",
    title: "Heavy Hydraulic Pressing & Bending Machine",
    category: "Machines",
    image: "/factory3.webp",
    alt: "Green industrial hydraulic press machine",
  },
  {
    id: "g-mac-3",
    title: "Radial Arm Flame Profile Cutting Machine",
    category: "Machines",
    image: "/factory7.webp",
    alt: "Radial arm flame cutting machine in operation with sparks",
  },

  // Factory
  {
    id: "g-fac-1",
    title: "Outdoor Processing Shed & Yard",
    category: "Factory",
    image: "/factory.webp",
    alt: "Outdoor factory shed with steel plates and equipment",
  },
  {
    id: "g-fac-2",
    title: "Portacryo Liquid Oxygen Gas System",
    category: "Factory",
    image: "/factory5.webp",
    alt: "Liquid Oxygen Cryogenic Storage Vessel",
  },
  {
    id: "g-fac-3",
    title: "Escorts Hydra 10 Mobile Crane",
    category: "Factory",
    image: "/factory11.webp",
    alt: "Heavy duty mobile hydraulic crane for material handling",
  },
  {
    id: "g-fac-4",
    title: "Heavy MS Raw Steel Plate Yard",
    category: "Factory",
    image: "/profile-plate1.webp",
    alt: "Large mild steel plates stacked in factory yard",
  },
  {
    id: "g-fac-5",
    title: "Thick Gauge Steel Plate Stock",
    category: "Factory",
    image: "/profile-plate2.webp",
    alt: "Stacked heavy steel plates",
  },

  // Projects
  {
    id: "g-proj-1",
    title: "Precision Flame-Cut Steel Lugs & Pin Flanges",
    category: "Projects",
    image: "/steel-flange-lugs.webp",
    alt: "Flame cut steel mounting lugs with pin holes",
  },
  {
    id: "g-proj-2",
    title: "Heavy Duty Cultivator Tyne Component Batch",
    category: "Projects",
    image: "/cultivator-tyne-stack.webp",
    alt: "Heavy curved agricultural cultivator tynes",
  },
  {
    id: "g-proj-3",
    title: "Interlocking Profile Cut Steel Link Arms Project",
    category: "Projects",
    image: "/interlocking-link-arms.webp",
    alt: "Heavy flame-cut interlocking link arm profiles",
  },
  {
    id: "g-proj-4",
    title: "Stacked Precision Angle Bracket Plates Order",
    category: "Projects",
    image: "/angle-bracket-plates.webp",
    alt: "Angle bracket plates with drilled pin holes",
  },
  {
    id: "g-proj-5",
    title: "Recyclable Steel Profile Cutting Offcuts & Scrap",
    category: "Projects",
    image: "/scrap.webp",
    alt: "Pile of steel profile cutting offcuts ready for recycling",
  },
];

const CATEGORIES = ["All", "Factory", "Machines", "Finished Products", "Projects"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageBanner
        categoryLabel="PORTFOLIO & FACILITY"
        title="Industrial Gallery"
        description="Explore inside our Bhavnagar facility, our advanced machine fleet, and precision-engineered finished components."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
          <SectionHeading
            label="VISUAL OVERVIEW"
            title="Factory & Component Showcase"
            align="center"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label-caps text-xs px-6 py-3 rounded transition-all duration-300 font-bold uppercase tracking-wider ${
                  activeCategory === cat
                    ? "bg-primary-container text-white shadow-sm"
                    : "bg-white border border-outline-variant/40 text-deep-navy hover:bg-surface-variant"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredItems.map((item) => (
              <GalleryCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                alt={item.alt}
                onPreview={() => setSelectedImage(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-deep-navy border border-white/20 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/30 rounded-full p-2 z-10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="h-[500px] w-full relative bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 bg-deep-navy text-white">
              <span className="font-label-caps text-xs text-primary-fixed block mb-1">
                {selectedImage.category}
              </span>
              <h3 className="font-headline-md text-xl font-bold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
