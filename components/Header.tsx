"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "/tournaments", label: "Tournaments" },
    { href: "/training-camps", label: "Training Camps" },
    { href: "/coach-education", label: "Coach Education" },
    { href: "/experiences", label: "Experiences" },
    { href: "/how", label: "How it Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto w-full px-8 h-20 flex items-center justify-between">
        
        {/* LEFT — ORIGINAL LOGO */}
        <div className="flex-shrink-0 flex items-center gap-3">

          {/* <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded">
            A
          </div> */}

          <div className="flex items-center gap-3">
            <Image
              src="/logo/axis-a-black.png"
              alt="Axis Football Logo"
              width={42}
              height={42}
              className="object-contain"
            />
            <span className="font-semibold tracking-wide text-[15px] text-[#222]">
              Axis Football Tours
            </span>
          </div>
        </div>

        {/* CENTER — NAVIGATION */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* RIGHT — ORIGINAL RECTANGLE CTA BUTTON */}
        <div className="hidden md:flex flex-shrink-0">
          <Link href="/contact" className="hidden md:inline-block border px-4 py-2">Enquire Now</Link>

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-sm"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm py-1"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 border border-black bg-black text-white px-6 py-2 text-sm text-center hover:bg-white hover:text-black transition"
          >
            Enquire now
          </Link>
        </div>
      )}
    </header>
  );
}
