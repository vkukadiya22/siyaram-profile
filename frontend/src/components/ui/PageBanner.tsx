import React from "react";
import Breadcrumb from "./Breadcrumb";

interface PageBannerProps {
  categoryLabel?: string;
  title: string;
  description?: string;
  bgImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageBanner({
  categoryLabel,
  title,
  description,
  bgImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAlpPvko-mS4pRtvm09Acw1Cj6NGVJvw9IDDLEpA-1CELsAaNR7a3OnsRUQiVaKHD5N735Gi5WoYBQJBbQp5lBGOvOi90Q0VuGUWd3Vat6qkFEO9XN394fOBXRKhnfyQjTuJs2E97cErY33D9EqJNZulzoNjLZWZd6-iZRFMEDP3Dtte5fVaiPzWDXeruedueI5TR7q_caLWiJsnPZ2dQgO4cMFytRJd6v_A77mzDMzAsddw1d_qOV_",
  breadcrumbs,
}: PageBannerProps) {
  return (
    <header className="relative pt-32 pb-16 md:pt-44 md:pb-24 min-h-[420px] flex items-center bg-[#1D3557] -mt-[80px]">
      <div className="absolute inset-0 z-0">
        <div
          className="bg-cover bg-center w-full h-full opacity-40"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="absolute inset-0 bg-[#1D3557]/80 backdrop-blur-sm bg-gradient-to-t from-[#1D3557] to-transparent" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-gutter w-full">
        {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
        <div className="max-w-3xl">
          {categoryLabel && (
            <p className="font-label-caps text-label-caps text-primary-fixed tracking-[0.2em] mb-3 uppercase">
              {categoryLabel}
            </p>
          )}
          <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="font-body-lg text-body-lg text-white/90 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
