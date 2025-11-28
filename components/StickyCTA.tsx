import Link from 'next/link'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-black text-white rounded-lg px-6 py-3 shadow-lg max-w-full md:max-w-none w-[90%] md:w-auto">
      <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 text-center md:text-left">
        
        <span className="text-sm leading-snug">
          Ready to build your tour? UK · EUROPE · NORTH AMERICA
        </span>

        <Link
          href="/contact"
          className="bg-white text-black px-4 py-2 rounded text-sm font-medium whitespace-nowrap"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  )
}
