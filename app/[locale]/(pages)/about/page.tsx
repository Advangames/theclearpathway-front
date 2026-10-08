import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import anaPhoto from "@/assets/images/Ana_Photo.png";
import anaPhoto2 from "@/assets/images/Ana_Photo_2.png";
import { Button } from "@/components/ui";
import { localeAlternates } from "@/i18n/alternates";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: localeAlternates("/about"),
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-paper">
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

        <div className="mx-auto grid min-h-[32rem] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="relative z-10 max-w-xl">
            <p className="eyebrow">{t("hero.eyebrow")}</p>
            <h1 className="mt-6 font-noto text-5xl leading-[0.95] text-navy sm:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-7 text-lg leading-7 text-ink">{t("hero.description")}</p>
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

      <section className="overflow-hidden bg-paper" id="journey">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="max-w-xl py-4">
            <p className="eyebrow">{t("journey.eyebrow")}</p>
            <h2 className="mt-5 font-noto text-5xl leading-[0.95] text-navy sm:text-6xl">
              {t("journey.title")}
            </h2>
            <p className="mt-6 text-base leading-7 text-ink">{t("journey.paragraph1")}</p>
            <p className="mt-2 text-base leading-7 text-ink">{t("journey.paragraph2")}</p>
            <p className="mt-2 text-base leading-7 text-ink">{t("journey.paragraph3")}</p>
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
              <p className="-mt-6 text-lg italic leading-8">{t("journey.quote")}</p>
              <footer className="mt-8">
                <p className="text-3xl text-navy">{t("journey.quoteName")}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-navy/70">
                  {t("journey.quoteRole")}
                </p>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:px-8">
          <div className="rounded-md bg-navy/10 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-navy">
              {t("journey.translationTitle")}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/80">{t("journey.translationText")}</p>
          </div>
          <div className="rounded-md bg-gold/15 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-coral">
              {t("journey.toolTitle")}
            </p>
            <p className="mt-3 text-sm leading-6 text-ink/80">{t("journey.toolText")}</p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="eyebrow justify-center text-white before:bg-gold">
            {t("closing.eyebrow")}
          </p>
          <p className="mt-6 text-lg leading-8 text-white/85">{t("closing.description")}</p>
          <Button className="mt-8" href="/challenge">
            {t("closing.cta")}
          </Button>
        </div>
      </section>
    </div>
  );
}
