import type { Metadata, Viewport } from "next";
import type React from "react";
import "../../src/styles/globals.css";
import { Footer, Header } from "@/components/layout";
import { AppProviders } from "@/providers/AppProviders";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The CLEAR Pathway",
    template: "%s | The CLEAR Pathway",
  },
  description:
    "A practical, research-informed pathway for ESL teacher development and communicative classroom results.",
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
    locale: "en_US",
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
    description:
      "A practical, research-informed pathway for ESL teacher development.",
    images: ["/assets/Ana_Photo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-cream">
        <script
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd(organizationJsonLd),
          }}
          id="organization-json-ld"
          type="application/ld+json"
        />
        <AppProviders>
          <Header />
          <main className="min-h-0 flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
