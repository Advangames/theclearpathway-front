import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/i18n/alternates";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPolicy.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: localeAlternates("/privacy-policy"),
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacyPolicy");

  return (
    <div className="bg-paper">
      <section>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 leading-7 text-ink/80">{t("paragraph1")}</p>
          <p className="mt-4 leading-7 text-ink/80">{t("paragraph2")}</p>
        </div>
      </section>
    </div>
  );
}
