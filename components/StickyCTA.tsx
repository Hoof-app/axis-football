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
    <div
      className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-300
        bg-black text-white rounded-full px-6 py-3 shadow-xl
        flex items-center gap-4 z-40
        ${hideCTA ? "opacity-0 pointer-events-none translate-y-5" : "bottom-6"}
      `}
    >
      <span className="text-sm">Ready to build your tour?</span>
      <Link
        href="/contact"
        className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
      >
        Enquire Now
      </Link>
    </div>
  );
}