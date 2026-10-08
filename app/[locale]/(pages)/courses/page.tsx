import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui";
import { courses } from "@/data/courses";
import { localeAlternates } from "@/i18n/alternates";
import { Link } from "@/i18n/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type GuideItem = { title: string; description: string };
type RecommendationItem = { need: string; recommendation: string };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "courses.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/courses`,
      languages: localeAlternates("/courses"),
    },
  };
}

function CourseIcon({ tone }: { tone: string }) {
  const color = tone === "coral" ? "bg-coral" : tone === "gold" ? "bg-gold" : "bg-navy";

  return (
    <span
      className={`${color} grid size-14 place-items-center rounded-full border-4 border-white text-white shadow-lg`}
    >
      <svg aria-hidden="true" className="size-7" fill="none" viewBox="0 0 32 32">
        <path
          d="M8 23V8h11a5 5 0 0 1 5 5v10H13a5 5 0 0 0-5 5Zm0 0h16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}

export default async function CoursesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("courses");
  const tItems = await getTranslations("courses.items");
  const guides = t.raw("guides.items") as GuideItem[];
  const recommendations = t.raw("recommendations.items") as RecommendationItem[];

  return (
    <div>
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 leading-7 text-ink/80">{t("hero.description")}</p>
        </div>
      </section>

      <section className="bg-cream" id="courses">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={course.slug}
              >
                <CourseIcon tone={course.tone} />
                <p
                  className={`mt-5 text-xs font-bold uppercase tracking-[0.25em] ${
                    course.tone === "coral" ? "text-coral" : "text-gold-dark"
                  }`}
                >
                  {tItems(`${course.messageKey}.eyebrow`)}
                </p>
                <h2 className="mt-3 text-2xl leading-8 text-navy">
                  {tItems(`${course.messageKey}.title`)}
                </h2>
                <p className="mt-3 text-sm leading-6 text-ink/80">
                  {tItems(`${course.messageKey}.corePromise`)}
                </p>
                <Link
                  className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-gold-dark transition hover:text-navy"
                  href={`/courses/${course.slug}`}
                >
                  {t("learnMore")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper" id="guides">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("guidesSection.eyebrow")}</p>
          <h2 className="mt-5 text-3xl text-navy sm:text-4xl">
            {t("guidesSection.title")}
          </h2>
          <p className="mt-5 leading-7 text-ink/80">{t("guidesSection.description")}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {guides.map((guide) => (
              <div className="rounded-md bg-cream p-6" key={guide.title}>
                <p className="text-sm font-bold text-navy">{guide.title}</p>
                <p className="mt-2 text-sm leading-6 text-ink/80">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            {t("complementary.eyebrow")}
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl">{t("complementary.title")}</h2>
          <p className="mt-5 leading-7 text-white/80">{t("complementary.description")}</p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("recommendations.eyebrow")}</p>
          <h2 className="mt-5 text-3xl text-navy sm:text-4xl">{t("recommendations.title")}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {recommendations.map((item) => (
              <div
                className="rounded-md border border-navy/10 bg-paper p-6 shadow-lg shadow-navy/5"
                key={item.recommendation}
              >
                <p className="text-sm leading-6 text-ink/80">{item.need}</p>
                <p className="mt-3 text-xl text-navy">{item.recommendation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-16 sm:px-6" id="resources">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-navy sm:text-4xl">{t("closing.title")}</h2>
          <p className="mt-5 leading-7 text-ink/80">{t("closing.description")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#courses" variant="primary">
              {t("closing.ctaPrimary")}
            </Button>
            <Button href="/#resources" variant="outline">
              {t("closing.ctaSecondary")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
