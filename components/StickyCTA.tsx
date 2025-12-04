"use client";

import Link from 'next/link'
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  // Fade-in on mount
  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-auto z-50 pointer-events-none">
      <div
        className={`
          pointer-events-auto transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
        <div className="flex items-center justify-between gap-6 bg-black text-white rounded-full px-6 py-4 shadow-lg w-full md:w-auto">
          <span className="text-sm md:text-base">Ready to build your tour?</span>

          <Link
            href="/contact"
            className="rounded-full bg-white text-black px-6 py-2 font-medium border border-white 
              hover:bg-transparent hover:text-white transition"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  );
}