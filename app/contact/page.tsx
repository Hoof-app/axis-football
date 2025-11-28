"use client";

import { useState } from "react";

/* ---------------------- FORM TYPE ---------------------- */
interface ContactForm {
  // Contact
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
  groupName?: string;
  role?: string;

  // Group
  totalTravelers?: string;
  players?: string;
  coaches?: string;
  chaperones?: string;
  ageGroup?: string;
  competitiveLevel?: string;
  accessibility?: string;
  gender?: string;

  // Destinations
  region?: string;
  city1?: string;
  city2?: string;
  city3?: string;
  startDate?: string;
  returnDate?: string;
  tripLength?: string;
  departureAirport?: string;

  // Interests
  interests: string[];      // <-- FIX: array of strings
  currency?: string;
  budget?: string;
  otherInterests?: string;

  // Development
  developmentGoals?: string;
}

export default function ContactPage() {
  const [consent, setConsent] = useState(false);

  const [form, setForm] = useState<ContactForm>({
    interests: [] // Initial value (required)
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");

  /* ---------------------- UPDATE FIELD ---------------------- */
  function updateField(key: keyof ContactForm, value: string | string[]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  /* ---------------------- SUBMIT FORM ---------------------- */
  async function handleSubmit() {
    if (!consent) return;

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ interests: [] }); // Reset all fields
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <main className="bg-white">

      {/* ---------------------- HERO ---------------------- */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            Request a Quote
          </h1>
          <p className="text-sm md:text-base text-gray-700">
            Tell us about your group. We will design a custom tour for you
            whether you want to go to the UK, Europe or the USA.
          </p>
        </div>
      </section>

      {/* ---------------------- FORM ---------------------- */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          {/* CONTACT */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="input-pill"
                placeholder="First Name"
                value={form.firstName || ""}
                onChange={(e) => updateField("firstName", e.target.value)}
              />
              <input
                className="input-pill"
                placeholder="Last Name"
                value={form.lastName || ""}
                onChange={(e) => updateField("lastName", e.target.value)}
              />
              <input
                className="input-pill"
                placeholder="Email"
                type="email"
                value={form.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
              />
              <input
                className="input-pill"
                placeholder="Telephone"
                value={form.telephone || ""}
                onChange={(e) => updateField("telephone", e.target.value)}
              />
              <input
                className="input-pill md:col-span-2"
                placeholder="Club/School/Group Name"
                value={form.groupName || ""}
                onChange={(e) => updateField("groupName", e.target.value)}
              />
              <input
                className="input-pill md:col-span-2"
                placeholder="Role"
                value={form.role || ""}
                onChange={(e) => updateField("role", e.target.value)}
              />
            </div>
          </div>

          {/* GROUP */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Group</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["totalTravelers", "Total travelers"],
                ["players", "Players"],
                ["coaches", "Coaches"],
                ["chaperones", "Chaperones"],
                ["ageGroup", "Age Group"],
                ["competitiveLevel", "Competitive level"],
                ["accessibility", "Accessibility"],
                ["gender", "Gender"],
              ].map(([key, label]) => (
                <input
                  key={key}
                  className="input-pill"
                  placeholder={label}
                  value={(form as any)[key] || ""}
                  onChange={(e) => updateField(key as keyof ContactForm, e.target.value)}
                />
              ))}
            </div>
          </div>

          {/* DESTINATIONS */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Destinations & Dates</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["region", "Region"],
                ["city1", "1st Choice City"],
                ["city2", "2nd Choice City"],
                ["city3", "3rd Choice City"],
                ["startDate", "Earliest Start Date"],
                ["returnDate", "Latest Return"],
                ["tripLength", "Trip Length"],
                ["departureAirport", "Departure Airport"],
              ].map(([key, label]) => (
                <input
                  key={key}
                  className="input-pill"
                  placeholder={label}
                  value={(form as any)[key] || ""}
                  onChange={(e) =>
                    updateField(key as keyof ContactForm, e.target.value)
                  }
                />
              ))}
            </div>
          </div>

          {/* INTERESTS */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Interests & Budget</h2>

            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Academy Sessions",
                "Stadium Tours",
                "Live Matches",
                "Friendly Matches",
                "Tournament",
                "Cultural Excursions",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    updateField("interests", [
                      ...form.interests,
                      item,
                    ])
                  }
                  className="px-4 py-1.5 border border-black rounded-full text-sm hover:bg-black hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                className="input-pill"
                placeholder="$ / £ / €"
                value={form.currency || ""}
                onChange={(e) => updateField("currency", e.target.value)}
              />
              <input
                className="input-pill"
                placeholder="Estimated budget per person"
                value={form.budget || ""}
                onChange={(e) => updateField("budget", e.target.value)}
              />
            </div>

            <textarea
              className="input-box"
              placeholder="Please add any other interests here."
              value={form.otherInterests || ""}
              onChange={(e) => updateField("otherInterests", e.target.value)}
            />
          </div>

          {/* DEVELOPMENT GOALS */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Development Goals</h2>
            <textarea
              className="input-box"
              placeholder="Tell us your goals from a technical perspective, fixtures, team bonding and cultural."
              value={form.developmentGoals || ""}
              onChange={(e) => updateField("developmentGoals", e.target.value)}
            />
          </div>

          {/* CONSENT + ACTIONS */}
          <div className="border-t pt-6">
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-6">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              I agree to be contacted about this enquiry and have read the privacy notice
            </label>

            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                disabled={!consent || loading}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition ${consent
                    ? "bg-black text-white border border-black hover:bg-white hover:text-black"
                    : "bg-gray-300 text-gray-500 border border-gray-300 cursor-not-allowed"
                  }`}
              >
                {loading ? "Sending..." : "Submit Request"}
              </button>

              <a
                href="https://calendly.com/davidgraypt"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-2 text-sm font-semibold border border-black text-black hover:bg-axis-gold hover:border-axis-gold hover:text-white transition inline-flex items-center justify-center"
              >
                Schedule Call
              </a>
            </div>

            {status === "success" && (
              <p className="text-green-600 text-sm mt-4">
                Your request has been sent!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-4">
                Something went wrong. Please try again.
              </p>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
