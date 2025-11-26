"use client";

import Image from "next/image";

export default function HowHeroSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              How it Works
            </h1>

            <p className="text-sm md:text-base text-gray-700 mb-6">
              From first enquiry to final whistle — our process makes it quick
              and easy to understand for coaches, parents and players across the
              USA, Europe and the UK.
            </p>

            <div className="flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
              >
                Enquire Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition"
              >
                Schedule a Call
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="relative w-full h-64 md:h-80 rounded-3xl border border-gray-200 bg-gray-50 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
              [Axis Website – How it Works Hero Picture]
            </div>
            {/* Replace with actual Image later */}
          </div>
        </div>
      </div>
    </section>
  );
}
