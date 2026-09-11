"use client";

import React, { useState } from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
  size?: number;
}

export default function Logo({
  variant = "light",
  showText = true,
  className = "",
  size,
}: LogoProps) {
  const [imgError, setImgError] = useState(false);

  const textColor = variant === "dark" ? "text-deep-navy" : "text-white";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 sm:gap-3 group transition-opacity hover:opacity-95 flex-shrink-0 ${className}`}
    >
      {/* Expanded Official Logo Container with Responsive Dimensions */}
      <div
        className="relative flex-shrink-0 rounded-xl bg-white p-0.5 shadow-md border-2 border-white/90 flex items-center justify-center overflow-hidden w-11 h-11 sm:w-12 sm:h-12 md:w-[52px] md:h-[52px]"
        style={size ? { width: `${size}px`, height: `${size}px` } : undefined}
      >
        {!imgError ? (
          <img
            src="/siyaram_profile_sm.webp"
            alt="Siyaram Profile Logo"
            className="w-full h-full object-contain p-0.5 scale-105"
            onError={() => setImgError(true)}
            loading="eager"
            // @ts-ignore
            fetchPriority="high"
          />
        ) : null}

        {/* Vector SVG Emblem Fallback */}
        {imgError && (
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full p-0.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 250 20 C 120 20 20 120 20 250 C 20 380 20 480 20 480 L 480 480 C 480 480 480 380 480 250 C 480 120 380 20 250 20 Z"
              fill="url(#sp_gradient)"
            />
            <path
              d="M 250 35 C 135 35 35 130 35 250 C 35 370 35 465 35 465 L 465 465 C 465 465 465 370 465 250 C 465 130 365 35 250 35 Z"
              stroke="#64C8FA"
              strokeWidth="10"
              fill="none"
              opacity="0.4"
            />
            <g fill="#FFFFFF">
              <path d="M 85 145 C 85 135 415 135 415 145 C 415 210 385 220 385 220 L 115 220 C 115 220 85 210 85 145 Z" />
              <path d="M 95 240 L 235 240 L 235 305 L 170 305 L 95 370 L 235 370 L 235 425 L 85 425 C 85 365 185 330 185 295 L 95 295 Z" />
              <path d="M 265 240 L 415 240 C 415 320 350 350 265 350 L 265 425 L 295 425 L 295 340 L 355 340 C 390 325 390 265 355 265 L 265 265 Z" />
            </g>
            <defs>
              <linearGradient id="sp_gradient" x1="250" y1="20" x2="250" y2="480" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00A8E8" />
                <stop offset="50%" stopColor="#0077B6" />
                <stop offset="100%" stopColor="#004B74" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {/* Brand Text - Big, Bold & Single Line Guaranteed (Option 2: Rajdhani) */}
      {showText && (
        <span className={`whitespace-nowrap font-rajdhani font-bold tracking-wider text-[24px] sm:text-[26px] md:text-[30px] lg:text-[32px] leading-tight ${textColor}`}>
          Siyaram Profile
        </span>
      )}
    </Link>
  );
}
