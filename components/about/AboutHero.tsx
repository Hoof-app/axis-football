"use client";

export default function AboutHero() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          
          {/* Left */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              About Axis Football Tours
            </h1>

            <p className="text-sm md:text-base text-gray-700 mb-6">
              We create world-class football travel experiences for teams, clubs,
              academies and families across the USA, Europe and the UK.  
              Our mission is to provide safe, inspiring and unforgettable 
              football journeys for every player.
            </p>
          </div>

          {/* Right */}
          <div className="relative w-full h-64 md:h-80 rounded-3xl border border-gray-200 bg-gray-50 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
              [Axis Website – About Hero Image]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
