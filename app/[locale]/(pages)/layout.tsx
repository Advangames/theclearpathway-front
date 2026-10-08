import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type React from "react";
import "../../../src/styles/globals.css";
import { Footer, Header } from "@/components/layout";
import { routing } from "@/i18n/routing";
import { AppProviders } from "@/providers/AppProviders";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theclearpathway.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ana Cristina Volante ESL Methodology",
  url: siteUrl,
};

function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const ogLocales: Record<string, string> = {
  en: "en_US",
  es: "es_ES",
};

type GenerateMetadataProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "The CLEAR Pathway",
      template: "%s | The CLEAR Pathway",
    },
    description: t("description"),
    applicationName: "The CLEAR Pathway",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      siteName: "The CLEAR Pathway",
      url: siteUrl,
      locale: ogLocales[locale] ?? "en_US",
      type: "website",
      images: [
        {
          url: "/assets/Ana_Photo.png",
          width: 1600,
          height: 2290,
          alt: "The CLEAR Pathway homepage preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "The CLEAR Pathway",
      description: t("description"),
      images: ["/assets/Ana_Photo.png"],
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enables static rendering for this locale.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-cream">
        <script
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationJsonLd),
          }}
          id="organization-json-ld"
          type="application/ld+json"
        />
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            <Header />
            <main className="min-h-0 flex-1">{children}</main>
            <Footer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
