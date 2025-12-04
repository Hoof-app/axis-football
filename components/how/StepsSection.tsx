import AnimateOnView from "../AnimateOnView";

export default function StepsSection() {
  const steps = [
    {
      number: "1",
      title: "Enquiry Form",
      text: "Goals, destinations, draft itineraries.",
    },
    {
      number: "2",
      title: "Custom Itinerary",
      text: "Training sessions, fixtures, cultural experiences.",
    },
    {
      number: "3",
      title: "Quote & Approval",
      text: "Transparent pricing, fundraising support.",
    },
    {
      number: "4",
      title: "Pre Trip Organisation",
      text: "Bookings, logistics, schedules & final preparations.",
    },
    {
      number: "5",
      title: "On Tour Support",
      text: "Dedicated Tour Director & on-site daily support.",
    },
  ];

  return (
          <AnimateOnView variant="fadeUp" delay={0.15} className="w-full">
    
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          5 Steps for Your Axis Football Tour
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 text-center">
          {steps.map((step) => (
            // <AnimateOnView key={step.number} variant="fadeUp" delay={0.15}>
              <div className="flex flex-col items-center">
                <div
                  className="
          w-16 h-16
          rounded-full
          flex items-center justify-center
          border border-axis-gold
          bg-white
          text-black
          text-xl font-semibold
          mb-3
        "
                >
                  {step.number}
                </div>
                <h3 className="font-medium mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
                </AnimateOnView>

  );
}
