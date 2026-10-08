import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui";
import { courses } from "@/data/courses";
import { localeAlternates } from "@/i18n/alternates";
import { Link } from "@/i18n/navigation";

type CoursePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: `courses.items.${course.messageKey}` });

  return {
    title: t("title"),
    description: t("corePromise"),
    alternates: {
      canonical: `/${locale}/courses/${course.slug}`,
      languages: localeAlternates(`/courses/${course.slug}`),
    },
  };
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { locale, slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations(`courses.items.${course.messageKey}`);
  const tDetail = await getTranslations("courseDetail");
  const goldenRule = t.has("goldenRule") ? t("goldenRule") : null;
  const largeClassActivities = t.has("largeClassActivities")
    ? t("largeClassActivities")
    : null;

  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            className="text-sm font-bold text-gold-dark transition hover:text-navy"
            href="/courses"
          >
            {tDetail("backLink")}
          </Link>

          <p
            className={`mt-6 text-xs font-bold uppercase tracking-[0.25em] ${
              course.tone === "coral" ? "text-coral" : "text-gold-dark"
            }`}
          >
            {t("eyebrow")} — {t("title")}
          </p>
          <h1 className="mt-4 text-4xl leading-[1.05] text-navy sm:text-5xl">
            {t("corePromise")}
          </h1>
          <p className="mt-5 leading-7 text-ink/80">{t("summary")}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy">
                {tDetail("includes")}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{t("includes")}</p>
            </div>
            {t.has("byTheEnd") && (
              <div className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy">
                  {tDetail("byTheEnd")}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{t("byTheEnd")}</p>
              </div>
            )}
          </div>

          {goldenRule && (
            <div className="mt-8 rounded-md border border-gold/40 bg-gold/10 p-6">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold-dark">
                {tDetail("goldenRule")}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink/80">{goldenRule}</p>
            </div>
          )}

          {largeClassActivities && (
            <p className="mt-5 text-sm leading-6 text-ink/70">{largeClassActivities}</p>
          )}
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm leading-6 text-ink/80">
            <span className="font-bold text-navy">{tDetail("idealFor")}</span>
            {t("idealFor")}
          </p>

          <Button className="mt-8" href="/courses#resources">
            {t("ctaLabel")}
          </Button>
        </div>
      </section>
    </div>
  );
}
