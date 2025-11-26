// import Hero from '../components/Hero'
// import TourCard from '../components/TourCard'
// import fs from 'fs'
// import path from 'path'

// export default function Home() {
//   const filePath = path.join(process.cwd(), 'data', 'tournaments.json')
//   const tours = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

//   return (
//     <div>
//       <Hero />
//       <section className="py-16">
//         <div className="container">
//           <h2 className="text-3xl font-semibold mb-8 text-center">Featured Tours</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {tours.map((t: any) => (
//               <TourCard key={t.slug} title={t.title} location={t.location} summary={t.summary} href={`/tournaments/${t.slug}`} />
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-50 py-16">
//         <div className="container text-center">
//           <h3 className="text-2xl font-semibold mb-4">Why Choose Axis Football Tours?</h3>
//           <div className="grid md:grid-cols-3 gap-8 mt-8">
//             <div>
//               <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
//               <h4 className="font-semibold">30+ Years Experience</h4>
//               <p className="text-sm text-gray-600">Delivering world-class training camps across the globe.</p>
//             </div>
//             <div>
//               <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
//               <h4 className="font-semibold">Your Money Protected</h4>
//               <p className="text-sm text-gray-600">Partnerships that protect customer payments and deposits.</p>
//             </div>
//             <div>
//               <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
//               <h4 className="font-semibold">Tour Management</h4>
//               <p className="text-sm text-gray-600">Dedicated Tour Directors with 24/7 on-ground support.</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getHomeContent } from '../lib/data';

export default function HomePage() {
  const home = getHomeContent() as any;

  const { hero, featured, trustedPartners, whyChoose } = home;

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
              Axis Football Tours
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4 text-black">
              {hero.title}
            </h1>

            <p className="text-gray-700 mb-8">
              {hero.subtitle}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs md:text-sm">
              {hero.features?.map((item: any) => (
                <div
                  key={item.label}
                  className="border border-gray-200 rounded-xl px-3 py-2 text-gray-700 bg-white"
                >
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {hero.primaryCta && (
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex items-center rounded-full border border-black px-5 py-2 text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  {hero.primaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-50">
            {hero.image && (
              <Image
                src={hero.image}
                alt={hero.title}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* FEATURED SECTION — White background */}
      <section className="px-6 pb-16 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 text-black">
            Featured Experiences
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Featured Tournament */}
            <Link
              href={`/tournaments/${featured.tournament.slug}`}
              className="border border-gray-200 rounded-2xl p-5 bg-white hover:border-black transition"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Featured Tournament
              </p>
              <h3 className="text-lg font-semibold text-black mb-1">
                {featured.tournament.name}
              </h3>
              <p className="text-sm text-gray-600">
                {featured.tournament.city}, {featured.tournament.country}
              </p>
            </Link>

            {/* Featured Training Camp */}
            <Link
              href={`/training-camps/${featured.trainingCamp.slug}`}
              className="border border-gray-200 rounded-2xl p-5 bg-white hover:border-black transition"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Featured Training Camp
              </p>
              <h3 className="text-lg font-semibold text-black mb-1">
                {featured.trainingCamp.name}
              </h3>
              <p className="text-sm text-gray-600">
                {featured.trainingCamp.city}, {featured.trainingCamp.country}
              </p>
            </Link>

            {/* Featured Coach Education */}
            <Link
              href={`/coach-education/${featured.coachEducation.slug}`}
              className="border border-gray-200 rounded-2xl p-5 bg-white hover:border-black transition"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                Featured Coach Education
              </p>
              <h3 className="text-lg font-semibold text-black mb-1">
                {featured.coachEducation.name}
              </h3>
              <p className="text-sm text-gray-600">
                {featured.coachEducation.city}, {featured.coachEducation.country}
              </p>
            </Link>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE AXIS — Light grey section */}
      {whyChoose && (
        <section className="px-6 py-16 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-black">
              {whyChoose.title || 'Why Choose Axis Football Tours?'}
            </h2>
            {whyChoose.intro && (
              <p className="text-sm md:text-base text-gray-700 mb-8 max-w-3xl">
                {whyChoose.intro}
              </p>
            )}

            <div className="grid gap-6 md:grid-cols-3">
              {whyChoose.items?.map((item: any) => (
                <div
                  key={item.title}
                  className="bg-white border border-gray-200 rounded-2xl p-5"
                >
                  <h3 className="text-sm font-semibold mb-2 text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PARTNERS — Light grey background */}
      <section className="px-6 pb-20 pt-12 md:px-12 lg:px-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-5">
            Our Trusted Partners
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {trustedPartners.map((partner: any) => (
              <div
                key={partner.slug}
                className="flex items-center justify-center border border-gray-200 rounded-xl px-4 py-3 bg-white"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain max-h-10 w-auto"
                  />
                ) : (
                  <span className="text-xs text-gray-600 text-center">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
