// lib/animations.ts

// Dynamic / energetic animation tokens (Style B)

export const hoverPrimaryButton =
  "transition-all duration-200 ease-out hover:scale-[1.04] hover:shadow-[0_10px_25px_rgba(0,0,0,0.18)]";

export const hoverSecondaryButton =
  "transition-all duration-200 ease-out hover:scale-[1.03]";

export const hoverTertiaryLink =
  "transition-colors duration-200 ease-out hover:text-black hover:underline";

export const hoverCardLift =
  "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]";

export const hoverImageZoom =
  "transition-transform duration-500 ease-out hover:scale-105";

export const fadeInBase =
  "opacity-0 translate-y-8 md:translate-y-10";
export const fadeInActive =
  "opacity-100 translate-y-0 transition-all duration-500 md:duration-700 ease-out";