export default function WhyChooseAxis() {
  const reasons = [
    {
      title: "Expertly Planned Tours",
      text: "Every journey is built with precision — from training schedules to cultural excursions.",
    },
    {
      title: "Accredited Global Partners",
      text: "We collaborate with trusted clubs, coaches and hotels across Europe and the USA.",
    },
    {
      title: "Dedicated Tour Directors",
      text: "Your team receives full on-the-ground support throughout the entire tour.",
    },
    {
      title: "Flexible Itineraries",
      text: "We tailor tours for your age group, level, goals and season.",
    },
  ];

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center">
          Why Choose Axis Football Tours?
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="p-6 border border-gray-200 bg-white rounded-2xl"
            >
              <h3 className="font-medium mb-2">{r.title}</h3>
              <p className="text-sm text-gray-600">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
