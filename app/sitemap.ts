import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";
import { localeAlternates } from "@/i18n/alternates";
import { routing } from "@/i18n/routing";

// Required for compatibility with `output: "export"` (static export builds,
// e.g. the temporary GitHub Pages deployment).
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theclearpathway.com";

const staticPaths: Array<{ path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/challenge", changeFrequency: "monthly", priority: 0.8 },
  { path: "/courses", changeFrequency: "monthly", priority: 0.9 },
  { path: "/language-programs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
];

function absoluteAlternates(path: string) {
  const relative = localeAlternates(path);
  const absolute: Record<string, string> = {};

  for (const [locale, relativePath] of Object.entries(relative)) {
    absolute[locale] = `${SITE_URL}${relativePath}`;
  }

  return absolute;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const { path, changeFrequency, priority } of staticPaths) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency,
        priority,
        alternates: {
          languages: absoluteAlternates(path),
        },
      });
    }
  }

  for (const course of courses) {
    const path = `/courses/${course.slug}`;

    for (const locale of routing.locales) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: absoluteAlternates(path),
        },
      });
    }
  }

  return entries;
}
