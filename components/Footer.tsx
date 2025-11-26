import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 border-t py-8 bg-white">
      <div className="container text-sm text-gray-600">

        {/* TOP SECTION — LOGO + NAV */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo + Copyright */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/axis-a-gold.png"
                alt="Axis Football Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-semibold text-lg text-black">
                Axis Football
              </span>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} Axis Football Co Ltd.
            </p>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-semibold text-black mb-1">Company</h5>
            <ul className="space-y-1">
              <li><Link href="/about">About Us</Link></li>
              {/* <li><Link href="/careers">Careers</Link></li> */}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h5 className="font-semibold text-black mb-1">Tours</h5>
            <ul className="space-y-1">
              <li><Link href="/tournaments">Tournaments</Link></li>
              <li><Link href="/training-camps">Training Camps</Link></li>
              <li><Link href="/coach-education">Coach Education</Link></li>
              <li><Link href="/experiences">Experiences</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="font-semibold text-black mb-1">Contact</h5>
            <ul className="space-y-1">
              <li><Link href="/contact">Enquire Now</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
