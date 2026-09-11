import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({ items, variant = "light" }: BreadcrumbProps) {
  const isDarkVariant = variant === "dark";

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className={`flex items-center space-x-2 font-label-caps text-xs ${
        isDarkVariant ? "text-on-surface-variant" : "text-white/70"
      }`}>
        <li>
          <Link
            href="/"
            className={`transition-colors ${
              isDarkVariant ? "hover:text-primary font-medium" : "hover:text-primary-fixed"
            }`}
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className={`w-3.5 h-3.5 ${
              isDarkVariant ? "text-outline" : "text-white/50"
            }`} />
            {item.href ? (
              <Link
                href={item.href}
                className={`transition-colors ${
                  isDarkVariant ? "hover:text-primary" : "hover:text-primary-fixed"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`font-bold ${
                isDarkVariant ? "text-primary font-bold" : "text-primary-fixed font-bold"
              }`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
