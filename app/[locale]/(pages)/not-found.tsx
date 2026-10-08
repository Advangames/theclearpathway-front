import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("notFound.meta");

  return {
    title: t("title"),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="flex min-h-[calc(100dvh-5rem)] items-center justify-center bg-cream px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow justify-center">{t("eyebrow")}</p>
        <h1 className="mt-4 font-noto text-5xl text-navy">{t("title")}</h1>
        <p className="mt-4 text-ink/75">{t("description")}</p>
        <Button className="mt-8" href="/">
          {t("cta")}
        </Button>
      </div>
    </div>
  );
}
