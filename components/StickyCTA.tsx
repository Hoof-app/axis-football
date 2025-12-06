"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCTA() {
  const [hideCTA, setHideCTA] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        // Hide only if the footer is significantly visible (50%)
        if (entry.intersectionRatio > 0.5) {
          setHideCTA(true);
        } else {
          setHideCTA(false);
        }
      },
      {
        root: null,
        threshold: [0, 0.5], // only hide when 50% of footer is visible
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div
        className={`md:hidden fixed inset-x-0 bottom-4 px-4 z-40 transition-all duration-300 flex justify-center ${
          hideCTA ? "opacity-0 pointer-events-none translate-y-4" : ""
        }`}
      >
        <Link
          href="/contact"
          className="w-full max-w-xs mx-auto bg-black text-white text-center py-3 rounded-full text-base font-medium tracking-wide shadow-lg"
        >
          Enquire Now
        </Link>
      </div>
      <div
        className={`hidden md:flex fixed left-1/2 transform -translate-x-1/2 bottom-6 transition-all duration-300 bg-black text-white rounded-full px-6 py-3 shadow-xl items-center gap-4 z-40 ${hideCTA ? "opacity-0 pointer-events-none translate-y-5" : ""}`}
      >
        <span className="text-sm">Ready to build your tour?</span>
        <Link
          href="/contact"
          className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
        >
          Enquire Now
        </Link>
      </div>
    </>
  );
}
