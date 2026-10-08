import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui";
import { localeAlternates } from "@/i18n/alternates";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type FactorItem = { number: string; title: string; description: string };
type FeatureItem = { title: string; description: string };
type MetricItem = { value: string; label: string; source: string };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "challenge.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/challenge`,
      languages: localeAlternates("/challenge"),
    },
  };
}

export default async function ChallengePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("challenge");
  const tMetrics = await getTranslations("metrics");
  const metrics = tMetrics.raw("items") as MetricItem[];
  const factors = t.raw("factors.items") as FactorItem[];
  const features = t.raw("solution.features") as FeatureItem[];
  const strands = t.raw("strands.items") as FeatureItem[];

  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("intro.eyebrow")}</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            {t("intro.title")}
          </h1>
          <p className="mt-5 leading-7 text-ink/80">{t("intro.paragraph1")}</p>
          <p className="mt-5 leading-7 text-ink/80">
            {t("intro.paragraph2")}{" "}
            <sup>
              <a className="text-gold-dark" href="#sources">
                [1]
              </a>
            </sup>
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                className="rounded-md border border-navy/10 bg-paper px-6 py-6 shadow-lg shadow-navy/5"
                key={metric.value}
              >
                <p className="font-noto text-5xl text-gold-dark">{metric.value}</p>
                <p className="mt-3 text-sm leading-5 text-navy">{metric.label}</p>
                {metric.source && (
                  <p className="mt-1 text-xs text-ink/60">({metric.source})</p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-5 text-ink/60">
            {t("metricsNote")}{" "}
            <sup>
              <a className="text-gold-dark" href="#sources">
                [3]
              </a>
            </sup>
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("gap.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("gap.title")}
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-ink/80">{t("gap.paragraph1")}</p>
          <p className="mt-3 max-w-3xl leading-7 text-ink/80">
            {t("gap.paragraph2")}{" "}
            <sup>
              <a className="text-gold-dark" href="#sources">
                [2]
              </a>
            </sup>
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {factors.map((factor) => (
              <div className="rounded-md border border-navy/10 bg-cream p-6" key={factor.title}>
                <p className="text-3xl text-gold-dark">{factor.number}</p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-navy">
                  {factor.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            {t("lesson.eyebrow")}
          </p>
          <p className="mt-6 leading-7 text-white/80">{t("lesson.paragraph")}</p>
          <blockquote className="mt-8 rounded-md border border-gold/30 bg-white/5 p-6 text-lg italic leading-8 text-white">
            {t("lesson.quote")}
          </blockquote>
        </div>
      </section>

      <section className="bg-cream" id="solution">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("solution.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("solution.title")}
          </h2>
          <p className="mt-5 max-w-3xl leading-7 text-ink/80">{t("solution.description")}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={feature.title}
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
                  {feature.title}
                </p>
                <p className="mt-3 text-sm leading-6 text-ink/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("strands.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("strands.title")}
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {strands.map((strand) => (
              <div className="rounded-md border border-navy/10 bg-cream p-6" key={strand.title}>
                <p className="text-2xl text-navy">{strand.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{strand.description}</p>
              </div>
            ))}
          </div>

          <Button className="mt-12" href="/courses">
            {t("strands.cta")}
          </Button>
        </div>
      </section>

      <section className="bg-cream px-4 py-10 sm:px-6" id="sources">
        <div className="mx-auto max-w-4xl text-xs leading-6 text-ink/60">
          <p className="font-bold uppercase tracking-[0.2em] text-navy">{t("sources.title")}</p>
          <p className="mt-3">
            {t("sources.item1")}{" "}
            <a
              className="text-gold-dark underline"
              href="https://www.ef.com/assetscdn/WIBIwq6RdJvcD9bc8RMd/cefcom-epi-site/reports/2025/ef-epi-2025-english.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              ef.com
            </a>
          </p>
          <p className="mt-2">
            {t("sources.item2")}{" "}
            <a
              className="text-gold-dark underline"
              href="https://thedialogue.org/analysis/work-in-progress-english-teaching-and-teachers-in-latin-america"
              rel="noopener noreferrer"
              target="_blank"
            >
              thedialogue.org
            </a>
          </p>
          <p className="mt-2">
            {t("sources.item3")}{" "}
            <a
              className="text-gold-dark underline"
              href="https://www.ef.edu/epi/about-epi/"
              rel="noopener noreferrer"
              target="_blank"
            >
              ef.edu
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
