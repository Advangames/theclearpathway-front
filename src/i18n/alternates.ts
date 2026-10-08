import { routing } from "./routing";

/**
 * Builds the `alternates.languages` map (hreflang) and canonical path for a
 * given locale-less pathname (e.g. "" for the homepage, "/about" for About).
 */
export function localeAlternates(path: string) {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    languages[locale] = `/${locale}${path}`;
  }

  languages["x-default"] = languages[routing.defaultLocale];

  return languages;
}
