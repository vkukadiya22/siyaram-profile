import React from "react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  const titleColor = theme === "dark" ? "text-white" : "text-deep-navy";
  const subtitleColor = theme === "dark" ? "text-white/80" : "text-deep-navy/80";

  return (
    <div className={clsx("max-w-3xl mb-6 md:mb-12", alignmentClass, className)}>
      {label && (
        <span className="font-label-caps text-label-caps text-primary-container tracking-[0.2em] mb-3 block uppercase">
          {label}
        </span>
      )}
      <h2 className={clsx("font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-4", titleColor)}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx("font-body-md text-body-md max-w-2xl", subtitleColor)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
