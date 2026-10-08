import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { localeAlternates } from "@/i18n/alternates";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type FaqItem = { question: string; answer: string };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/faq`,
      languages: localeAlternates("/faq"),
    },
  };
}

export default async function FaqPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("faq");
  const faqs = t.raw("items") as FaqItem[];

  return (
    <div className="bg-paper">
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="eyebrow">{t("eyebrow")}</p>
          <h1 className="mt-5 font-noto text-5xl leading-[0.98] text-navy sm:text-6xl">
            {t("title")}
          </h1>

          <div className="mt-10 flex flex-col gap-8">
            {faqs.map((faq) => (
              <div className="border-b border-navy/10 pb-8" key={faq.question}>
                <h2 className="text-lg font-bold text-navy">{faq.question}</h2>
                <p className="mt-3 leading-7 text-ink/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
