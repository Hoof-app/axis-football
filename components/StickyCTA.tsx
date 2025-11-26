import Link from 'next/link'
export default function StickyCTA(){
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white rounded-lg px-6 py-3 shadow-lg">
      <div className="flex items-center gap-6">
        <span className="text-sm">Ready to build your tour? UK · EUROPE · NORTH AMERICA</span>
        <Link href="/contact" className="bg-white text-black px-3 py-1 rounded">Enquire Now</Link>
      </div>
    </div>
  )
}
