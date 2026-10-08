import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/i18n/alternates";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type AudienceItem = { number: string; title: string; description: string };
type FormatItem = { title: string; description: string };
type OutcomeItem = { title: string; description: string };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "languagePrograms.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/language-programs`,
      languages: localeAlternates("/language-programs"),
    },
  };
}

export default async function LanguageProgramsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("languagePrograms");
  const audienceGroups = t.raw("audience.groups") as AudienceItem[];
  const formatOptions = t.raw("format.options") as FormatItem[];
  const outcomeFeatures = t.raw("outcomes.features") as OutcomeItem[];

  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center">{t("hero.eyebrow")}</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 leading-7 text-ink/80">{t("hero.description")}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold-dark">
            {t("hero.formats")}
          </p>
          <p className="mt-8 font-noto text-2xl leading-8 text-navy">{t("hero.tagline")}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("audience.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("audience.title")}
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-ink/80">{t("audience.description")}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {audienceGroups.map((audience) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={audience.title}
              >
                <p className="text-3xl text-gold-dark">{audience.number}</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-navy">
                  {audience.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/80">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("format.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("format.title")}
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-ink/80">{t("format.description")}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {formatOptions.map((option) => (
              <div
                className="rounded-md border border-navy/10 bg-cream p-6"
                key={option.title}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
                  {option.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/80">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            {t("outcomes.eyebrow")}
          </p>
          <h2 className="mt-5 font-noto text-4xl leading-[1.05] sm:text-5xl">
            {t("outcomes.title")}
          </h2>
          <p className="mt-6 leading-7 text-white/80">{t("outcomes.description")}</p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 md:grid-cols-3 lg:px-8">
          {outcomeFeatures.map((feature) => (
            <div
              className="rounded-md border border-gold/30 bg-white/5 p-6"
              key={feature.title}
            >
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                {feature.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center">{t("closing.eyebrow")}</p>
          <h2 className="mt-5 font-noto text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("closing.title")}
          </h2>
          <p className="mt-6 leading-7 text-ink/80">{t("closing.description")}</p>
        </div>
      </section>
    </div>
  );
}
