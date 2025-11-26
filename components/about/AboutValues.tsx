export default function AboutValues() {
  const values = [
    {
      title: "Player Development",
      text: "Every tour is designed with growth in mind — technical, tactical and personal development.",
    },
    {
      title: "Safety First",
      text: "We work only with accredited partners, verified clubs and trusted facilities around the world.",
    },
    {
      title: "World-Class Experiences",
      text: "From training sessions to sightseeing, every moment is carefully planned for maximum impact.",
    },
  ];

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-10 text-center">
          Our Values
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {values.map((v) => (
            <div
              key={v.title}
              className="text-center px-4 py-6 border border-gray-200 rounded-2xl bg-white"
            >
              <h3 className="text-lg font-medium mb-2">{v.title}</h3>
              <p className="text-sm text-gray-600">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
