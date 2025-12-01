import Link from 'next/link'

export default function StickyCTA() {
  return (
<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-auto">
  <div className="flex items-center justify-between gap-6 bg-black text-white rounded-lg px-6 py-3 shadow-lg w-full md:w-auto">
    <span className="text-sm md:text-base">Ready to build your tour?</span>
    <Link href="/contact" className="bg-white text-black px-4 py-1.5 rounded">
      Enquire Now
    </Link>
  </div>
</div>
  )
}
