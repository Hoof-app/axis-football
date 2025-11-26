// import fs from 'fs'
// import path from 'path'
// import TourCard from '../../components/TourCard'

// export default function Tournaments() {
//   const filePath = path.join(process.cwd(), 'data', 'tournaments.json')
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

//   return (
//     <section className="py-16">
//       <div className="container">
//         <h1 className="text-3xl font-semibold mb-8">Tournaments</h1>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((t: any) => (
//             <TourCard key={t.slug} title={t.title} location={t.location} summary={t.summary} href={`/tournaments/${t.slug}`} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }


import Link from "next/link";
import Image from "next/image";
import { getTournaments } from '../../lib/data';

export default function TournamentsPage() {
  const tournaments = getTournaments();

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">Tournaments</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament: any) => (
            <Link
              key={tournament.slug}
              href={`/tournaments/${tournament.slug}`}
              className="border border-gray-200 rounded-2xl bg-white hover:border-black transition overflow-hidden"
            >
              <div className="relative h-48 w-full bg-gray-100">
                {tournament.heroImage && (
                  <Image
                    src={tournament.heroImage}
                    alt={tournament.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{tournament.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {tournament.city}, {tournament.country}
                </p>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {tournament.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
