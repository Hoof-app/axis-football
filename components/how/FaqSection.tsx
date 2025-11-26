const faqs = [
  {
    q: "How far in advance should we book?",
    a: "The more time you have to plan the better, but at least 6 months out is ideal for our tours...",
  },
  {
    q: "Can you tailor our level?",
    a: "Yes, all tours are specific to your group’s age, level, goals and objectives.",
  },
  {
    q: "What about safety?",
    a: "We work only with accredited partners ensuring a safe, stress-free experience.",
  },
  {
    q: "What protection is in place for our money?",
    a: "All fees are held in an independent trust account, fully protected.",
  },
  {
    q: "Can families travel on the tour?",
    a: "Absolutely — families are encouraged and we provide additional activities.",
  },
];

export default function FaqSection() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="border border-gray-200 rounded-xl p-5 bg-white"
            >
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
