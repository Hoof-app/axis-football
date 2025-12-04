"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/tournaments", label: "Tournaments" },
    { href: "/training-camps", label: "Training Camps" },
    { href: "/coach-education", label: "Coach Education" },
    { href: "/experiences", label: "Experiences" },
    { href: "/how", label: "How it Works" },
    { href: "/about", label: "About Us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">

      <div className="max-w-7xl mx-auto w-full px-8 h-20 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={scrolled ? "/logo/axis-a-gold.png" : "/logo/axis-a-black.png"}
            alt="Axis Football Logo"
            width={42}
            height={42}
            className="object-contain transition"
          />
          <span
            className={
              "text-lg font-semibold transition-colors " +
              (scrolled ? "text-black" : "text-black")
            }
          >
            Axis Football Tours
          </span>
        </Link>

        {/* CENTER — NAVIGATION */}
        <nav className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative inline-flex items-center justify-center rounded-full transition"
              >
                <span className="relative z-10 transition-colors duration-200 group-hover:text-white text-sm font-medium">
                  {item.label}
                </span>
                <span
                  className="absolute inset-0 -z-10 bg-axis-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 px-5 py-2 scale-100 group-hover:scale-110"
                ></span>
              </Link>
            ))}
          </div>
        </nav>

        {/* RIGHT — CTA BUTTON */}
        <div className="hidden md:flex flex-shrink-0">
          <Link
            href="/contact"
            className="
              hidden md:inline-flex items-center justify-center
              px-6 py-2
              rounded-full
              border-[1.5px] border-axis-gold
              text-sm font-medium
              text-axis-gold
              hover:bg-axis-gold hover:text-white
              transition-colors duration-200
            "
          >
            Enquire Now
          </Link>
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
              className="block text-sm py-1 hover:text-axis-gold transition"
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