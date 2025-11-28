import Image from "next/image";
import Link from "next/link";
import BottomCTA from "../../components/how/BottomCTA";

const clubLogos = [
  "images/club-logos/2000px-Logo_of_AC_Milan.png",
  "images/club-logos/aresenal-badge.png",
  "images/club-logos/Black BG Wolves Badge RGB.png",
  "images/club-logos/Bonaire_Football_Federation_logo.png",
  "images/club-logos/CPFC-Primary-Badge-Web.png",
  "images/club-logos/El_Salvador_crest.svg.png",
  "images/club-logos/Everton_FC_logo.png",
  "images/club-logos/FC_Inter_Milan_first_logo_(1908-1928).png",
  "images/club-logos/Fútbol_Club_Atlas.svg.png",
  "images/club-logos/Millonarios_Fútbol_Club_logo.png",
  "images/club-logos/Philadelphia_Union_2018_logo.svg.png",
  "images/club-logos/Rangers_FC.svg.png",
  "images/club-logos/Sevilla_cf.png",
  "images/club-logos/Sporting_Club_Jacksonville_primary_crest.png",
  "images/club-logos/spurs-blue-compressed.png",
  "images/club-logos/United_States_Soccer_Federation_logo_2016.svg.png",
  "images/club-logos/WHUFC-Crest_21-Full-Colour_CMYK.png"
];

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

          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
            {clubLogos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Club logo"
                className="h-14 w-auto object-contain hover:grayscale-0 transition"
              />
            ))}
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
