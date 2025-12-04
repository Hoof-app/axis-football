"use client";

import Image from "next/image";
import AnimateOnView from "@/components/AnimateOnView";
import {
  hoverPrimaryButton,
  hoverSecondaryButton,
  hoverImageZoom,
} from "@/lib/animations";

export default function HowHeroSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      {/* Spacer for sticky header */}
      <div className="h-20 md:h-24" />

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Left */}
          <AnimateOnView variant="fadeUp" className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                How it Works
              </h1>

              <p className="text-sm md:text-base text-gray-700 mb-6">
                From first enquiry to final whistle — our process makes it quick
                and easy to understand for coaches, parents and players across
                the USA, Europe and the UK.
              </p>
            </div>

            <div className="flex gap-3">
              {/* Primary CTA */}
              <a
                href="/contact"
                className={`inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black ${hoverPrimaryButton}`}
              >
                Enquire Now
              </a>

              {/* Secondary CTA */}
              <a
                href="/contact"
                className={`inline-flex items-center justify-center rounded-full border border-axis-gold text-axis-gold px-5 py-2 text-sm font-medium hover:bg-axis-gold hover:text-white ${hoverSecondaryButton}`}
              >
                Schedule a Call
              </a>
            </div>
          </AnimateOnView>

          {/* Right */}
          <AnimateOnView variant="fadeUp">
            <div className="relative w-full h-64 md:h-80 rounded-3xl border border-gray-200 bg-gray-50 overflow-hidden">
              <div className="w-full h-full">
                <Image
                  src="/images/how-it-works/How it Works.jpg"
                  alt="How It Works"
                  fill
                  className={`object-cover ${hoverImageZoom}`}
                />
              </div>
            </div>
          </AnimateOnView>
        </div>
      </div>
    </section>
  );
}