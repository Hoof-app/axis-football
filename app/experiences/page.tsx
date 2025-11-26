import { getExperiences } from "../../lib/data";
import Link from "next/link";

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold mb-8">Experiences</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <Link
            key={exp.slug}
            href={`/experiences/${exp.slug}`}
            className="block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-sm transition"
          >
            {/* Optional: hero image */}
            {exp.gallery && exp.gallery.length > 0 && (
              <img
                src={exp.gallery[0]}
                alt={exp.name}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-5">
              <h2 className="text-xl font-medium">{exp.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{exp.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
