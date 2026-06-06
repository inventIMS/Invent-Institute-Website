"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IIMSLogo from "./IIMSLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: `Admissions (${new Date().getFullYear()})`, href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar if mouse is in the top 80px of the screen
      if (e.clientY < 80) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed left-1/2 z-50 w-[95%] -translate-x-1/2 transition-all duration-500 lg:w-auto ${
        scrolled ? "top-3 sm:top-4" : "top-4 sm:top-6"
      } ${visible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0 pointer-events-none"}`}
    >
      <nav
        onMouseEnter={() => setVisible(true)}
        className="relative flex min-h-1 items-center justify-between rounded-full border border-emerald-200/70 bg-white/92 py-2 pr-3 pl-14 shadow-[0_8px_30px_rgba(34,197,94,0.08)] backdrop-blur-xl sm:pr-4 sm:pl-18 lg:gap-14 lg:pr-8 lg:pl-22"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.55) inset, 0 8px 30px rgba(34,197,94,0.08), 0 4px 10px rgba(34,197,94,0.05)",
        }}
      >
        {/* Logo (Left overlapping circle) */}
        <Link
          href="/"
          className="absolute -left-1 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-white p-0.5 shadow-[0_4px_20px_rgba(34,197,94,0.14)] transition-transform duration-500 hover:scale-105 sm:-left-2 sm:p-1"
        >
          <IIMSLogo className="h-13 w-13 sm:h-16 sm:w-16 lg:h-19 lg:w-19" />
        </Link>

        {/* Desktop links (Right) */}
        <ul className="hidden items-center gap-8 pr-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="flex items-center">
              {(() => {
                const isActive = isActivePath(link.href);

                return (
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative rounded-full px-3 py-2 text-sm font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-emerald-700"
                    : "text-slate-600 hover:text-emerald-700"
                }`}
              >
                {link.label}
                {/* Green dot hover effect underneath */}
                <span
                  className={`absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300 ${
                    isActive
                      ? "scale-100 bg-yellow-500 opacity-100"
                      : "scale-0 bg-emerald-500 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />
              </Link>
                );
              })()}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 ml-auto mr-2 flex h-10 w-10 flex-col items-center justify-center gap-1.25 rounded-full bg-emerald-50 transition-colors hover:bg-emerald-100 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${
              mobileOpen ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`absolute left-0 right-0 top-full mt-3 overflow-hidden rounded-3xl transition-all duration-400 ease-in-out lg:hidden ${
          mobileOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 border border-emerald-200/60 bg-white/96 p-4 shadow-xl backdrop-blur-xl">
          {navLinks.map((link) => (
            (() => {
              const isActive = isActivePath(link.href);

              return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-xl px-4 py-3 text-center text-sm font-bold tracking-wide transition-colors ${
                isActive
                  ? "text-emerald-700"
                  : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-700"
              }`}
            >
              {link.label}
            </Link>
              );
            })()
          ))}
        </div>
      </div>
    </header>
  );
}
