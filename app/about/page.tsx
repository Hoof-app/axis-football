import Image from "next/image";
import Link from "next/link";
import BottomCTA from "../../components/how/BottomCTA";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ---------------------- HERO SECTION ---------------------- */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          {/* Text */}
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-5">
              Axis Football Tours – Where Football Dreams Take Flight.
            </h1>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              At <strong>Axis Football Tours</strong>, we turn your sporting ambitions into unforgettable experiences.
            </p>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              From the UK to Europe to the USA, we design <strong>exclusive football tours</strong> for players, coaches,
              and families — built to <strong>explore, develop, and compete</strong> at every level of the game.
            </p>

            <p className="text-sm md:text-base text-gray-700 mb-4">
              With over <strong>75 years of combined experience</strong> delivering elite training camps for professional clubs
              across Europe, North and Latin America — and deep roots in grassroots football — our team brings
              <strong> unmatched expertise, precision, and passion</strong> to every tour we create.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-black bg-black px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
            >
              Enquire Now
            </Link>
          </div>

          {/* Image placeholder */}
          <div className="w-full h-64 md:h-80 bg-gray-100 border border-gray-200 rounded-2xl flex items-center justify-center text-xs text-gray-500">
            [Axis Website – About Us Picture 1]
          </div>
        </div>
      </section>

      {/* ---------------------- OUR STORY ---------------------- */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Our Story</h2>

          <p className="text-sm md:text-base text-gray-700 mb-4">
            At <strong>Axis Football Tours</strong>, we believe world-class football experiences should be within reach for everyone — 
            players and coaches alike, no matter their level. Our mission is simple: to make elite-level tours accessible, 
            enjoyable, and unforgettable.
          </p>

          <p className="text-sm md:text-base text-gray-700 mb-4">
            Behind Axis is a leadership team with a truly global footprint. With over 
            <strong> 75 years of combined experience</strong> across professional football, international travel, and tournament 
            organization, our experts bring unmatched insight and precision to every tour we design.
          </p>

          <p className="text-sm md:text-base text-gray-700 mb-6">
            Our team has successfully built and delivered multiple <strong>professional club pre-season tours</strong> for some of the 
            game’s most recognized names. That same level of expertise, attention to detail, and professional standard is exactly 
            what Axis brings to the wider sports tour industry today.
          </p>

          {/* Club logos grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 my-8">
            {/* Repeat this block for each logo (replace with real images later) */}
            <div className="w-full h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
              Logo
            </div>
            <div className="w-full h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
              Logo
            </div>
            <div className="w-full h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
              Logo
            </div>
            <div className="w-full h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
              Logo
            </div>  
            <div className="w-full h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
              Logo
            </div>
            <div className="w-full h-16 bg-gray-100 border border-gray-200 rounded flex items-center justify-center text-[10px] text-gray-400">
              Logo
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/tournaments"
              className="rounded-full border border-black px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition"
            >
              View all tournaments
            </Link>
            <Link
              href="/training-camps"
              className="rounded-full border border-black px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition"
            >
              View all training camps
            </Link>
            <Link
              href="/coach-education"
              className="rounded-full border border-black px-6 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition"
            >
              View all coach education
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA />

    </main>
  );
}
