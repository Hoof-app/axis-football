export default function TimelineSection() {
  const items = [
    {
      label: "6–9 Months",
      bullets: ["Discovery", "Destination list", "Draft itinerary", "Budget"],
    },
    {
      label: "3–5 Months",
      bullets: ["Deposits", "Fixtures", "Tournament entry", "Hotels", "Transport"],
    },
    {
      label: "1–2 Months",
      bullets: ["Final brief", "Room list", "Dietary", "Training loads"],
    },
    {
      label: "On Tour",
      bullets: ["Tour Director support", "Daily schedule", "Results"],
    },
    {
      label: "Post Tour",
      bullets: ["Feedback", "Media gallery", "Next year plan"],
    },
  ];

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">Timeline</h2>

        {/* HEADINGS WITH ARROWS */}
        <div className="hidden md:flex justify-between items-center mb-6">
          {items.map((item, index) => (
            <div key={item.label} className="flex items-center">
              <span className="text-lg font-semibold text-gray-700">
                {item.label}
              </span>

              {/* Arrow */}
              {index < items.length - 1 && (
                <span className="mx-4 text-axis-gold text-xl">→</span>
              )}
            </div>
          ))}
        </div>

        {/* GOLD LINE BELOW HEADINGS */}
        <div className="hidden md:block w-full h-[2px] bg-axis-gold/40 mb-10"></div>

        {/* BULLETS */}
<div className="grid md:grid-cols-5 gap-10 text-center">
  {items.map((item) => (
    <div key={item.label} className="flex flex-col items-center">
      <ul className="text-sm text-gray-600 space-y-1">
        {item.bullets.map((b) => (
          <li key={b} className="list-none">• {b}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}