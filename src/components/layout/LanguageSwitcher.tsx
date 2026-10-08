"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      aria-label={t("language")}
      className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.1em] text-white/70"
      role="group"
    >
      {routing.locales.map((loc, index) => (
        <span className="flex items-center gap-1" key={loc}>
          {index > 0 && <span className="text-white/30">/</span>}
          <button
            aria-current={loc === locale}
            className={`rounded px-1.5 py-1 transition hover:text-gold ${
              loc === locale ? "text-gold" : "text-white/70"
            }`}
            onClick={() => router.replace(pathname, { locale: loc })}
            type="button"
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
