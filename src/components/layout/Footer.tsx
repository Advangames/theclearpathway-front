import Link from "next/link";
import { navItems } from "@/data/home";
import { BrandMark } from "./BrandMark";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: LinkedInIcon,
  },
];

const supportLinks = [{ label: "Frequently Asked Questions", href: "/faq" }];

const legalLinks = [{ label: "Privacy Policy", href: "/privacy-policy" }];

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <rect
        height="20"
        rx="5"
        ry="5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="20"
        x="2"
        y="2"
      />
      <path
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        x1="17.5"
        x2="17.51"
        y1="6.5"
        y2="6.5"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <rect
        height="12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        width="4"
        x="2"
        y="9"
      />
      <circle
        cx="4"
        cy="4"
        r="2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8 lg:py-20">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
            A clear, practical and research-informed pathway for stronger ESL
            education.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
                href={href}
                key={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Explore</p>
          <nav aria-label="Explore" className="mt-5 flex flex-col gap-3 text-sm font-bold text-white/75">
            {navItems.map((item) => (
              <Link className="transition hover:text-gold" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Support</p>
          <nav aria-label="Support" className="mt-5 flex flex-col gap-3 text-sm font-bold text-white/75">
            {supportLinks.map((item) => (
              <Link className="transition hover:text-gold" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Legal</p>
          <nav aria-label="Legal" className="mt-5 flex flex-col gap-3 text-sm font-bold text-white/75">
            {legalLinks.map((item) => (
              <Link className="transition hover:text-gold" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-xs text-white/50">
          © {new Date().getFullYear()} The CLEAR Pathway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
