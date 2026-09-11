import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: string;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-label-caps text-label-caps rounded transition-colors inline-flex items-center justify-center gap-2 uppercase tracking-wider scale-95 active:scale-90 transition-transform font-bold cursor-pointer";
  
  const variantStyles = {
    primary: "bg-primary-container text-white hover:bg-[#005d90]",
    secondary: "bg-deep-navy text-white hover:bg-deep-navy/90",
    outline: "border border-deep-navy/20 text-deep-navy hover:bg-deep-navy/5",
    ghost: "text-primary-container hover:bg-primary-container/10",
    whatsapp: "bg-[#25D366] text-black hover:bg-[#128C7E] hover:text-white"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs",
    lg: "px-8 py-4 text-xs md:text-sm"
  };

  const combinedClasses = twMerge(
    clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-[16px]">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-[16px]">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
