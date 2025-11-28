// components/detail/AxisDetailPage.tsx

"use client";

import Image from "next/image";
import React from "react";

/**
 * Expected data shape (adjust as needed to match your JSON):
 *
 * name: string
 * shortDescription: string
 * city: string
 * country: string
 * numberOfDays?: string | number
 * ageBand?: string
 * season?: string
 * extraBadges?: string[]
 * heroImage?: string
 * programOverview?: string
 * whatsIncluded?: string[]
 * itinerary?: { day: number; title?: string; description: string }[]
 * parentExtras?: string
 * developmentFocus?: { fixtures?: string; training?: string; classroom?: string; teamBonding?: string }
 * accomMealsSafety?: { accommodation?: string; meals?: string; playerSafety?: string }
 */

export interface AxisDetailData {
  type?: "tournament" | "trainingCamp" | "coachEducation" | "experiences";
  slug?: string;
  name: string;
  shortDescription?: string;
  city?: string;
  country?: string;
  numberOfDays?: string | number;
  ageBand?: string;
  season?: string;
  extraBadges?: string[];
  gallery: string[];
  programOverview?: string;
  whatsIncluded?: string[];
  itinerary?: { day: number; title?: string; description: string }[];
  parentExtras?: string;
  developmentFocus?: {
    fixtures?: string;
    training?: string;
    classroom?: string;
    teamBonding?: string;
  };
  accomMealsSafety?: {
    accommodation?: string;
    meals?: string;
    playerSafety?: string;
  };
}

interface Props {
  data: AxisDetailData;
}

export default function AxisDetailPage({ data }: Props) {
  return (
    <main className="bg-white text-black">
      <HeroSection data={data} />

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <TourSnapshotAndQuote data={data} />
        <SampleItineraryAndExtras data={data} />
        <DevelopmentFocusSection data={data} />
        <AccommodationMealsSafetySection data={data} />
      </div>
    </main>
  );
}

/* ---------------------- HERO ---------------------- */

// import Image from "next/image";
import { useEffect, useState } from "react";

function HeroSection({ data }: { data: AxisDetailData }) {
  const primaryBadges: string[] = [];
  if (data.numberOfDays)
    primaryBadges.push(
      `${typeof data.numberOfDays === "number" ? data.numberOfDays : data.numberOfDays} Days`
    );
  if (data.ageBand) primaryBadges.push(data.ageBand);
  if (data.season) primaryBadges.push(data.season);

  const secondaryBadges = data.extraBadges || [];

  /* --- Gallery state --- */
  const gallery = data.gallery || [];
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
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* Left: Text */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
              {data.type === "trainingCamp"
                ? "Training Camp"
                : data.type === "coachEducation"
                  ? "Coach Education"
                  : data.type === "experiences"
                    ? "Experiences"
                    : "Tournament"}
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold mb-3">
              {data.name}
            </h1>

            {data.shortDescription && (
              <p className="text-sm md:text-base text-gray-700 mb-4">
                {data.shortDescription}
              </p>
            )}

            {data.city && data.country && (
              <p className="text-xs md:text-sm text-gray-500 mb-6">
                {data.city}, {data.country}
              </p>
            )}

            {/* Badges */}
            <div className="space-y-3 mb-6">
              {primaryBadges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {primaryBadges.map((label) => (
                    <Badge key={label}>{label}</Badge>
                  ))}
                </div>
              )}

              {secondaryBadges.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {secondaryBadges.map((label) => (
                    <Badge key={label} variant="outline">
                      {label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
              >
                Enquire now
              </a>

              {data.itinerary && data.itinerary.length > 0 && (
                <a
                  href="#itinerary"
                  className="inline-flex items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition"
                >
                  Sample itinerary
                </a>
              )}
            </div>
          </div>

          {/* Right: Gallery replacing static hero image */}
          <div className="relative w-full h-64 md:h-80 rounded-3xl border border-gray-200 bg-gray-50 overflow-hidden">
            <Image
              key={currentImage}
              src={currentImage}
              alt={data.name}
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
      </div>
    </section>
  );
}

function Badge({
  children,
  variant = "solid",
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base = "px-3 py-1 rounded-full text-xs md:text-[13px] border transition";

  const solid =
    "text-white bg-gray-900 border-gray-900 hover:bg-axis-gold hover:border-axis-gold";

  const outline =
    "bg-white text-gray-800 border-gray-300 hover:border-axis-gold hover:text-axis-gold";

  return (
    <span className={`${base} ${variant === "solid" ? solid : outline}`}>
      {children}
    </span>
  );
}

/* ----------------- TOUR SNAPSHOT + QUOTE ----------------- */

function TourSnapshotAndQuote({ data }: { data: AxisDetailData }) {
  const hasSnapshot =
    data.programOverview || (data.whatsIncluded && data.whatsIncluded.length);

  return (
    <section
      className="py-10 border-b border-gray-200"
      aria-labelledby="tour-snapshot-title"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
        {/* Left: Tour Snapshot */}
        <div>
          <h2
            id="tour-snapshot-title"
            className="text-xl md:text-2xl font-semibold mb-5"
          >
            Tour Snapshot
          </h2>

          {hasSnapshot && (
            <div className="grid gap-6 md:grid-cols-2 bg-gray-50 border border-gray-200 rounded-2xl p-6">
              {data.programOverview && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">
                    Program Overview
                  </h3>
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {data.programOverview}
                  </p>
                </div>
              )}

              {data.whatsIncluded && data.whatsIncluded.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">
                    What&apos;s Included
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
                    {data.whatsIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right: Quote Form */}
        <QuoteForm />
      </div>
    </section>
  );
}

import Input from "../components/Input";
import Textarea from "../components/Textarea";

export function QuoteForm() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    group: "",
    dates: "",
    ageGroup: "",
    locations: "",
    goals: "",
  });

  function update(field: string, value: string) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function handleSubmit() {
    setLoading(true);

    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    setLoading(false);

    if (res.ok) {
      alert("Your quote request has been sent!");
      setValues({
        name: "",
        email: "",
        group: "",
        dates: "",
        ageGroup: "",
        locations: "",
        goals: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <aside
      id="quote"
      className="md:sticky md:top-24 self-start bg-white border border-gray-200 rounded-2xl p-5 shadow-sm/50"
    >
      <h2 className="text-base md:text-lg font-semibold mb-4">
        Request a Quick Quote
      </h2>

      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Your Name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
        />

        <Input
          label="Club/School/Group Name"
          value={values.group}
          onChange={(e) => update("group", e.target.value)}
        />

        <Input
          label="Target Dates"
          value={values.dates}
          onChange={(e) => update("dates", e.target.value)}
        />

        <Input
          label="Age Group"
          value={values.ageGroup}
          onChange={(e) => update("ageGroup", e.target.value)}
        />

        <Input
          label="Locations Interested In"
          value={values.locations}
          onChange={(e) => update("locations", e.target.value)}
        />

        <Textarea
          label="Goals for Tour"
          value={values.goals}
          onChange={(e) => update("goals", e.target.value)}
          rows={3}
        />

        <div className="pt-2 flex flex-col gap-2">
          <button
            type="button"
            className="w-full rounded-full border border-black bg-black px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
          >
            Send
          </button>

          <a
            href="https://calendly.com/davidgraypt"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center rounded-full border border-black px-4 py-2 text-sm font-medium text-black hover:bg-axis-gold hover:border-axis-gold hover:text-white transition"
          >
            Schedule a call
          </a>
        </div>
      </form>

      <p className="mt-4 text-xs text-gray-500">We reply within 1 business day.</p>
      <p className="mt-2 text-xs text-gray-500">
        Or email us at{" "}
        <a href="mailto:sales@axisfootballco.com" className="underline underline-offset-2">
          sales@axisfootballco.com
        </a>{" "}
        anytime.
      </p>
    </aside>
  );
}

/* ------------- SAMPLE ITINERARY + PARENT EXTRAS ------------- */

function SampleItineraryAndExtras({ data }: { data: AxisDetailData }) {
  if (!data.itinerary || data.itinerary.length === 0) return null;

  return (
    <section
      id="itinerary"
      className="py-10 border-b border-gray-200"
      aria-labelledby="sample-itinerary-title"
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)] items-start">
        {/* Left: Itinerary */}
        <div>
          <h2
            id="sample-itinerary-title"
            className="text-xl md:text-2xl font-semibold mb-5"
          >
            Sample Team Itinerary
          </h2>

          <div className="space-y-3">
            {data.itinerary.map((day) => (
              <div
                key={day.day}
                className="border border-gray-200 rounded-xl bg-gray-50 px-4 py-3"
              >
                <p className="text-xs font-semibold text-gray-600 mb-1">
                  Day {day.day}
                  {day.title ? ` · ${day.title}` : ""}
                </p>
                <p className="text-sm text-gray-800 whitespace-pre-line">
                  {day.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Parent / Guardian Extras */}
        {data.parentExtras && (
          <aside className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h3 className="text-base font-semibold mb-3">
              Parent/Guardian Extras
            </h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {data.parentExtras}
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}

/* ----------------- DEVELOPMENT FOCUS SECTION ----------------- */

function DevelopmentFocusSection({ data }: { data: AxisDetailData }) {
  const dev = data.developmentFocus;
  if (!dev) return null;

  const hasAny =
    dev.fixtures || dev.training || dev.classroom || dev.teamBonding;
  if (!hasAny) return null;

  return (
    <section className="py-10 border-b border-gray-200">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">
        Development Focus
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {dev.fixtures && (
          <DevCard title="Fixtures" text={dev.fixtures} />
        )}
        {dev.training && (
          <DevCard title="Training" text={dev.training} />
        )}
        {dev.classroom && (
          <DevCard title="Classroom Sessions" text={dev.classroom} />
        )}
        {dev.teamBonding && (
          <DevCard
            title="Team Bonding, Awards & Feedback"
            text={dev.teamBonding}
          />
        )}
      </div>
    </section>
  );
}

function DevCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 whitespace-pre-line">{text}</p>
    </div>
  );
}

/* ------------ ACCOMMODATION, MEALS & PLAYER SAFETY ------------ */

function AccommodationMealsSafetySection({ data }: { data: AxisDetailData }) {
  const info = data.accomMealsSafety;
  if (!info) return null;

  const hasAny = info.accommodation || info.meals || info.playerSafety;
  if (!hasAny) return null;

  return (
    <section className="py-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">
        Accommodation, Meals & Player Safety
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {info.accommodation && (
          <AMSCard title="Accommodation" text={info.accommodation} />
        )}
        {info.meals && <AMSCard title="Meals" text={info.meals} />}
        {info.playerSafety && (
          <AMSCard title="Player Safety" text={info.playerSafety} />
        )}
      </div>
    </section>
  );
}

function AMSCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700 whitespace-pre-line">{text}</p>
    </div>
  );
}
