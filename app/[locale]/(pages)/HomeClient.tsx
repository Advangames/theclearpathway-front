import { useTranslations } from "next-intl";
import Image from "next/image";
import anaPhoto from "@/assets/images/Ana_Photo.png";
import anaPhoto2 from "@/assets/images/Ana_Photo_2.png";
import { Button } from "@/components/ui";
import { courses } from "@/data/courses";
import { Link } from "@/i18n/navigation";

function CapIcon() {
  return (
    <svg aria-hidden="true" className="size-9" fill="none" viewBox="0 0 32 32">
      <path
        d="m3 12 13-6 13 6-13 6L3 12Zm6 4v6c3.7 2.6 10.3 2.6 14 0v-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg aria-hidden="true" className="size-9" fill="none" viewBox="0 0 32 32">
      <path
        d="M11 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 26a7 7 0 0 1 14 0m-4-2a7 7 0 0 1 14 2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg aria-hidden="true" className="size-9" fill="none" viewBox="0 0 32 32">
      <path
        d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13Zm0-26c3.3 3.7 5 8.04 5 13s-1.7 9.3-5 13m0-26c-3.3 3.7-5 8.04-5 13s1.7 9.3 5 13M4 16h24M6.5 9.5h19M6.5 22.5h19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CourseIcon({ tone }: { tone: string }) {
  const color =
    tone === "coral" ? "bg-coral" : tone === "gold" ? "bg-gold" : "bg-navy";

  return (
    <span
      className={`${color} grid size-16 place-items-center rounded-full border-4 border-white text-white shadow-lg`}
    >
      <svg aria-hidden="true" className="size-8" fill="none" viewBox="0 0 32 32">
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

type PillarItem = { title: string; description: string };
type MetricItem = { value: string; label: string; source: string };

export default function HomeClient() {
  const t = useTranslations("home");
  const tCourses = useTranslations("courses.items");
  const pillars = useTranslations("pillars").raw("items") as PillarItem[];
  const metrics = useTranslations("metrics").raw("items") as MetricItem[];

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-paper" id="home">
        <div className="absolute inset-y-0 right-0 hidden w-[54%] bg-cream lg:block">
          <Image
            alt="Ana Cristina Volante, ESL Academic Director"
            className="object-cover object-[72%_0%]"
            fill
            priority
            sizes="54vw"
            src={anaPhoto}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper from-0% via-transparent via-40% to-transparent to-100%" />
        </div>

        <div className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-14">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-5 text-navy">
              <span className="block font-noto text-5xl leading-[0.93] sm:text-6xl lg:text-7xl">
                {t("hero.titleStart")}{" "}
                <span className="text-gold-dark">{t("hero.name")}</span>
                {t("hero.titleEnd")}
              </span>
              <span className="mt-3 block text-lg font-bold leading-6 text-navy/80 sm:text-xl">
                {t("hero.subtitle")}
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-7 text-ink">
              {t("hero.description")}
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="#pathway" variant="primary">
                {t("hero.ctaPrimary")}
              </Button>
              <Button href="/about" variant="outline">
                {t("hero.ctaSecondary")}
              </Button>
            </div>

            <div className="mt-8 grid gap-5 text-navy sm:grid-cols-3">
              {pillars.map((pillar, index) => (
                <div className="flex items-start gap-3" key={pillar.title}>
                  <span className="shrink-0 text-gold-dark">
                    {index === 0 ? <CapIcon /> : index === 1 ? <CommunityIcon /> : <GlobeIcon />}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-5">{pillar.title}</p>
                    <p className="mt-1 hidden text-xs leading-5 text-ink/70 sm:block">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:hidden">
            <div className="relative min-h-[28rem] overflow-hidden rounded-md border border-gold/20 shadow-xl">
              <Image
                alt="Ana Cristina Volante, ESL Academic Director"
                className="object-cover object-[72%_0%]"
                fill
                sizes="100vw"
                src={anaPhoto}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-paper" id="about">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-0">
          <div className="max-w-xl py-4 lg:py-20">
            <p className="eyebrow">{t("about.eyebrow")}</p>
            <h2 className="mt-5 font-noto text-5xl leading-[0.95] text-navy sm:text-6xl">
              {t("about.title")}
            </h2>
            <p className="mt-6 text-base leading-7 text-ink">{t("about.paragraph1")}</p>
            <p className="mt-2 text-base leading-7 text-ink">{t("about.paragraph2")}</p>
            <p className="mt-2 text-base leading-7 text-ink">{t("about.paragraph3")}</p>
            <Button className="mt-8" href="/about">
              {t("about.cta")}
            </Button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-center">
            <div className="relative min-h-[33rem] overflow-hidden rounded-md bg-paper shadow-xl">
              <Image
                alt="Portrait of Ana Cristina Volante"
                className="object-cover object-[57%_31%]"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                src={anaPhoto2}
              />
            </div>
            <blockquote className="relative border-l-2 border-gold pl-6 text-ink">
              <span className="font-noto text-7xl leading-none text-gold/80">
                &quot;
              </span>
              <p className="-mt-6 text-lg italic leading-8">{t("about.quote")}</p>
              <footer className="mt-8">
                <p className="text-3xl text-navy">{t("about.quoteName")}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-navy/70">
                  {t("about.quoteRole")}
                </p>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:px-8 lg:pb-20">
          <div className="rounded-md bg-navy/10 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-navy">
              {t("about.translationTitle")}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/80">{t("about.translationText")}</p>
          </div>
          <div className="rounded-md bg-gold/15 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">
              {t("about.toolTitle")}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/80">{t("about.toolText")}</p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy text-white" id="challenge">
        <div className="absolute inset-0 opacity-20">
          <Image
            alt=""
            className="object-cover object-[5%_50%]"
            fill
            sizes="100vw"
            src={anaPhoto2}
          />
        </div>
        <div className="absolute inset-0 bg-navy/85" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.45fr] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-white before:bg-gold">{t("challenge.eyebrow")}</p>
            <h2 className="mt-5 font-noto text-5xl leading-[0.98] text-white">
              {t("challenge.title")}
            </h2>
            <p className="mt-5 leading-7 text-white/80">{t("challenge.description")}</p>
            <Button className="mt-8" href="/challenge">
              {t("challenge.cta")}
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map((metric) => (
              <div
                className="border-l border-white/25 px-6 py-2"
                key={metric.value}
              >
                <p className="font-noto text-5xl text-gold">{metric.value}</p>
                <p className="mt-3 text-sm leading-5 text-white">
                  {metric.label}
                </p>
                {metric.source && (
                  <p className="mt-1 text-xs text-white/70">({metric.source})</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream" id="pathway">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.65fr_1.6fr] lg:px-8">
          <div id="courses">
            <p className="eyebrow">{t("pathway.eyebrow")}</p>
            <h2 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
              {t("pathway.title")}
            </h2>
            <p className="mt-5 leading-7 text-ink/80">{t("pathway.description")}</p>
            <Button className="mt-8" href="/courses">
              {t("pathway.cta")}
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {courses.map((course) => (
              <article
                className="min-w-0 overflow-hidden rounded-md border border-navy/10 bg-paper shadow-lg shadow-navy/5"
                key={course.slug}
              >
                <div className="relative min-h-40">
                  <Image
                    alt=""
                    className="object-cover"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    src={anaPhoto2}
                    style={{ objectPosition: course.imagePosition }}
                  />
                  <div className="absolute -bottom-8 left-6">
                    <CourseIcon tone={course.tone} />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-12">
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.25em] ${course.tone === "coral" ? "text-coral" : "text-gold-dark"
                      }`}
                  >
                    {tCourses(`${course.messageKey}.eyebrow`)}
                  </p>
                  <h3 className="mt-3 break-words text-2xl leading-8 text-navy">
                    {tCourses(`${course.messageKey}.title`)}
                  </h3>
                  <p className="mt-4 min-h-20 text-sm leading-6 text-ink/80">
                    {tCourses(`${course.messageKey}.corePromise`)}
                  </p>
                  <Link
                    className="mt-5 inline-flex items-center gap-3 text-sm font-bold text-gold-dark transition hover:text-navy"
                    href={`/courses/${course.slug}`}
                  >
                    {t("pathway.learnMore")}
                    <svg
                      aria-hidden="true"
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-6-6 6 6-6 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-4 py-12 sm:px-6" id="resources">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 border-y border-gold/45 py-8 text-center lg:flex-row lg:justify-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-navy">
            {t("resources.tagline")}
          </p>
          <Button href="/courses">{t("resources.cta")}</Button>
        </div>
      </section>
    </div>
  );
}
