"use client";

import React from "react";

interface GalleryCardProps {
  title: string;
  category: string;
  image: string;
  alt: string;
  onPreview?: () => void;
}

export default function GalleryCard({
  title,
  category,
  image,
  alt,
  onPreview,
}: GalleryCardProps) {
  return (
    <div 
      onClick={onPreview}
      className="group relative h-72 rounded-lg overflow-hidden border border-outline-variant/40 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div
        className="bg-cover bg-center w-full h-full group-hover:scale-110 transition-transform duration-700"
        style={{ backgroundImage: `url('${image}')` }}
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/90 via-deep-navy/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

      <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
        <div>
          <span className="font-label-caps text-xs text-primary-fixed uppercase tracking-wider block mb-1">
            {category}
          </span>
          <h3 className="font-headline-md text-lg text-white font-bold">
            {title}
          </h3>
        </div>
        <div className="p-2 rounded-full bg-primary-container text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
          <span className="material-symbols-outlined text-[18px]">zoom_in</span>
        </div>
      </div>
    </div>
  );
}
