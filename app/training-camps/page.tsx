// import fs from 'fs'
// import path from 'path'
// import TourCard from '../../components/TourCard'

// export default function TrainingCamps() {
//   const filePath = path.join(process.cwd(), 'data', 'training-camps.json')
//   const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

//   return (
//     <section className="py-16">
//       <div className="container">
//         <h1 className="text-3xl font-semibold mb-8">Training Camps</h1>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {data.map((t: any) => (
//             <TourCard key={t.slug} title={t.title} location={t.location} summary={t.summary} href={`/training-camps/${t.slug}`} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

import Link from "next/link";
import Image from "next/image";
import { getTrainingCamps } from '../../lib/data';

export default function TrainingCampsPage() {
  const camps = getTrainingCamps();

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10">Training Camps</h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {camps.map((camp: any) => (
            <Link
              key={camp.slug}
              href={`/training-camps/${camp.slug}`}
              className="border border-gray-200 rounded-2xl bg-white hover:border-black transition overflow-hidden"
            >
              <div className="relative h-48 w-full bg-gray-100">
                {camp.heroImage && (
                  <Image
                    src={camp.heroImage}
                    alt={camp.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{camp.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {camp.city}, {camp.country}
                </p>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {camp.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
