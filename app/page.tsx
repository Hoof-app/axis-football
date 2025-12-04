// app/page.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { getHomeContent } from '../lib/data';
import { useEffect, useState } from "react";
import AnimateOnView from "../components/AnimateOnView";

export default function HomePage() {
  const home = getHomeContent() as any;

  const { hero, featured, trustedPartners, whyChoose } = home;

  /* --- Gallery state --- */
  const gallery = home.hero.gallery || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!gallery || gallery.length === 0) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [gallery]);

  const currentImage =
    gallery.length > 0
      ? gallery[index]
      : "/images/defaults/placeholder-hero.jpg";

  return (
    <main className="min-h-screen bg-white text-black">
            <div className="h-20 md:h-24"></div>
      {/* Hero */}
      <AnimateOnView variant="fadeUp">
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
                Axis Football Tours
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 text-black">
                {hero.title}
              </h1>

              <p className="text-gray-700 mb-8">
                {hero.subtitle}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hero.features?.map((item: any) => (
                  <div
                    key={item.label}
                    className="border border-gray-200 rounded-xl px-3 py-2 text-gray-700 bg-white"
                  >
                    <p className="text-center text-[12px] font-semibold text-black leading-tight">
                      {item.title}
                    </p>
                    <p className="text-center text-[11px] text-gray-600 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {hero.primaryCta && (
                  <Link
                    href={hero.primaryCta.href}
                    className="inline-flex items-center rounded-full bg-black text-white px-6 py-2 text-sm font-medium hover:bg-[#b5840b] transition"
                  >
                    {hero.primaryCta.label}
                  </Link>
                )}
              </div>
            </div>

            {/* Right: Gallery replacing static hero image */}
            <div className="relative w-full h-64 md:h-80 rounded-3xl border border-gray-200 bg-gray-50 overflow-hidden">
              <Image
                key={currentImage}
                src={currentImage}
                alt={home.name}
                fill
                className="object-cover transition-opacity duration-700"
              />

              {/* Optional gallery indicators (can remove if you prefer cleaner) */}
              {gallery.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {gallery.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-all ${i === index ? "bg-white" : "bg-white/40"
                        }`}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>
      </AnimateOnView>

      {/* FEATURED SECTION — Enhanced Version */}
      <AnimateOnView variant="fadeUp">
        <section className="px-6 pb-20 md:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-black">
              Featured Experiences
            </h2>

            <div className="grid gap-10 md:grid-cols-3">

              {/* --- FEATURED TOURNAMENT --- */}
              <div className="border border-gray-200 rounded-2xl p-5 bg-white flex flex-col">
                <h3 className="text-center text-lg font-semibold mb-4">Tournaments</h3>

                <Link
                  href={`/tournaments/${featured.tournament.slug}`}
                  className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mb-4"
                >
                  {featured.tournament.image && (
                    <Image
                      src={featured.tournament.image}
                      alt={featured.tournament.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </Link>

                <p className="text-base font-semibold mt-1">
                  {featured.tournament.name}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {featured.tournament.city}, {featured.tournament.country}
                </p>

                {/* Updated Meta Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.tournament.numberOfDays} Days
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.tournament.ageBand}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.tournament.season}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="mt-auto text-center bg-black text-white rounded-full py-2 text-sm font-medium hover:bg-[#b5840b] transition"
                >
                  Enquire now
                </Link>

                <Link
                  href="/tournaments"
                  className="mt-4 text-center text-sm text-black underline-offset-4 hover:text-black/70"
                >
                  View all tournaments
                </Link>
              </div>

              {/* --- FEATURED TRAINING CAMP --- */}
              <div className="border border-gray-200 rounded-2xl p-5 bg-white flex flex-col">
                <h3 className="text-center text-lg font-semibold mb-4">Training Camps</h3>

                <Link
                  href={`/training-camps/${featured.trainingCamp.slug}`}
                  className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mb-4"
                >
                  {featured.trainingCamp.image && (
                    <Image
                      src={featured.trainingCamp.image}
                      alt={featured.trainingCamp.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </Link>

                <p className="text-base font-semibold mt-1">
                  {featured.trainingCamp.name}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {featured.trainingCamp.city}, {featured.trainingCamp.country}
                </p>

                {/* Updated Meta Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.trainingCamp.numberOfDays} Days
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.trainingCamp.ageBand}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.trainingCamp.season}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="mt-auto text-center bg-black text-white rounded-full py-2 text-sm font-medium hover:bg-[#b5840b] transition"
                >
                  Enquire now
                </Link>

                <Link
                  href="/training-camps"
                  className="mt-4 text-center text-sm text-black underline-offset-4 hover:text-black/70"
                >
                  View all training camps
                </Link>
              </div>

              {/* --- FEATURED COACH EDUCATION --- */}
              <div className="border border-gray-200 rounded-2xl p-5 bg-white flex flex-col">
                <h3 className="text-center text-lg font-semibold mb-4">Coach Education</h3>

                <Link
                  href={`/coach-education/${featured.coachEducation.slug}`}
                  className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 bg-gray-50 mb-4"
                >
                  {featured.coachEducation.image && (
                    <Image
                      src={featured.coachEducation.image}
                      alt={featured.coachEducation.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </Link>

                <p className="text-base font-semibold mt-1">
                  {featured.coachEducation.name}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {featured.coachEducation.city}, {featured.coachEducation.country}
                </p>

                {/* Updated Meta Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.coachEducation.numberOfDays} Days
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.coachEducation.ageBand}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs border border-gray-200">
                    {featured.coachEducation.season}
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="mt-auto text-center bg-black text-white rounded-full py-2 text-sm font-medium hover:bg-[#b5840b] transition"
                >
                  Enquire now
                </Link>

                <Link
                  href="/coach-education"
                  className="mt-4 text-center text-sm text-black underline-offset-4 hover:text-black/70"
                >
                  View all coach education
                </Link>
              </div>

            </div>
          </div>
        </section>
      </AnimateOnView>
      {/* WHY CHOOSE AXIS — Light grey section */}
      {whyChoose && (
        <AnimateOnView variant="fadeUp">
          <section className="px-6 py-16 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-6xl mx-auto">

              {/* SECTION TITLE */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-black">
                {whyChoose.title || "Why Choose Axis Football Tours?"}
              </h2>

              {/* CARD GRID */}
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                {whyChoose.items?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 rounded-2xl p-6 md:p-8 shadow-sm"
                  >
                    {/* ICON + TITLE ROW */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 border border-gray-300 rounded-xl flex items-center justify-center text-xs text-center">
                        {item.icon ? (
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        ) : (
                          <span className="text-[11px] leading-tight text-gray-600">
                            [Axis<br />Website<br />Icon]
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-black leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION (supports new lines) */}
                    <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </section>
        </AnimateOnView>
      )}


      {/* PARTNERS — unchanged */}
      <AnimateOnView variant="fadeUp">
        <section className="px-6 pb-20 pt-12 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-5">
              Our Trusted Partners
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
              {trustedPartners.map((partner: any) => (
                <div
                  key={partner.slug}
                  className="flex items-center justify-center border border-gray-200 rounded-xl px-4 py-3 bg-white"
                >
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain max-h-10 w-auto"
                    />
                  ) : (
                    <span className="text-xs text-gray-600 text-center">
                      {partner.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnView>
    </main>
  );
}
