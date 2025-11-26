export default function BottomCTA() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm md:text-base font-medium">
          Ready to kick off?{" "}
          <span className="text-gray-600">
            Send us your dates, group size and destination.
          </span>
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-black bg-black px-5 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
        >
          Enquire Now
        </a>
      </div>
    </section>
  );
}
