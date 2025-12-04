"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 whitespace-nowrap";

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const variants = {
    primary:
      "bg-axis-gold text-white hover:bg-black hover:text-white shadow-sm",
    secondary:
      "border border-black text-black hover:bg-black hover:text-white",
    tertiary:
      "text-black underline-offset-4 hover:underline hover:text-axis-gold",
  };

  const classes = cn(
    base,
    sizes[size],
    variants[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}