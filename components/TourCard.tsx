import Link from 'next/link'

export default function TourCard({ title, location, summary, href }: any) {
  return (
    <article className="border rounded-lg p-4 flex flex-col h-full">
      <div className="bg-gray-200 h-36 mb-4 rounded"></div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      {summary && <p className="text-sm text-gray-700 mt-2 flex-grow">{summary}</p>}
      {href ? (
  <Link href={href} className="mt-4 inline-block border px-3 py-2">
    Enquire Now
  </Link>
) : null}
    </article>
  )
}
