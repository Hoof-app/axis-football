import * as React from "react";
import { cn } from "../lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function Badge({
  children,
  variant = "solid",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        // ✨ KEY PARTS:
        // - NO h-* classes
        // - inline-flex so it sizes to its content
        // - rounded-full for pill / round ends
        "inline-flex items-center justify-center",
        "px-4 py-1.5 text-xs font-medium leading-snug",
        "whitespace-normal", // allow wrapping / multiple lines
        variant === "outline"
          ? "border border-gray-300 bg-white text-gray-900"
          : "border border-transparent bg-black text-white",
        className
      )}
    >
      {children}
    </span>
  );
}