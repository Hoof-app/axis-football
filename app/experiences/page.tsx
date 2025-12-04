import { getExperiences } from "../../lib/data";
import Link from "next/link";
import AnimateOnView from "@/components/AnimateOnView";

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="h-20 md:h-24"></div>
            <div className="max-w-6xl mx-auto">

      <AnimateOnView variant="fadeUp" className="w-full">
        <h1 className="text-3xl font-semibold mb-8">Experiences</h1>
      </AnimateOnView>

      <AnimateOnView variant="fadeUp" delay={0.15} className="w-full">

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}`}
                 className="border border-gray-200 rounded-2xl bg-white transition overflow-hidden hover:border-[#b5840b]">

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
      </AnimateOnView>
      </div>

    </main>
  );
}
