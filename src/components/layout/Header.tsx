"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/home";
import { Button } from "@/components/ui";
import { BrandMark } from "./BrandMark";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 text-white shadow-sm backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <BrandMark />

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-bold text-white/90 transition hover:text-gold"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/courses" size="sm">
            Get Started
          </Button>
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          className="grid size-11 place-items-center rounded-md border border-white/20 text-white lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" className="relative block h-5 w-6">
            <span className={`nav-line top-0 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`nav-line top-2 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`nav-line top-4 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-navy lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6"
          >
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-3 text-base font-bold text-white/90 transition hover:bg-white/10 hover:text-gold"
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="mt-4 w-full" href="/courses" size="md">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
