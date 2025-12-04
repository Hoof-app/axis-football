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

          {/* Social Media */}
          <div>
            <h5 className="font-semibold text-black mb-2">Follow Us</h5>
            <div className="flex gap-4 mt-2">

              <a href="https://www.linkedin.com/company/axis-football-co/" target="_blank" className="text-gray-500 hover:text-black transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                  <path d="M8 9h4v2.5c.7-1.6 2.3-2.7 4.1-2.5 3 .1 3.9 2 3.9 5.2V21h-4v-6.1c0-1.8-.4-3.1-2.2-3.1-1.7 0-2.8 1.2-2.8 3.1V21H8V9Z"/>
                </svg>
              </a>

              <a href="https://www.instagram.com/axis_football_co" target="_blank" className="text-gray-500 hover:text-black transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17" cy="7" r="1.3"/>
                </svg>
              </a>

              <a href="https://www.facebook.com/axis.football.co" target="_blank" className="text-gray-500 hover:text-black transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7c0-.5.5-1 1-1h3V2Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
