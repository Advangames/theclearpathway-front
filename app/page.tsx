"use client";

import { useEffect } from "react";
import { routing } from "@/i18n/routing";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function detectLocale(): string {
  if (typeof navigator === "undefined") {
    return routing.defaultLocale;
  }

  const preferred = navigator.languages?.[0] ?? navigator.language ?? "";
  const match = routing.locales.find((locale) =>
    preferred.toLowerCase().startsWith(locale)
  );

  return match ?? routing.defaultLocale;
}

// Reached when the proxy/middleware doesn't run (e.g. the static export used
// for the temporary GitHub Pages deploy). On a normal Node deployment the
// proxy already redirects "/" based on the negotiated locale before this
// page is ever rendered. Since there is no server here to detect the
// preferred language or issue a real redirect, this does it client-side.
export default function RootPage() {
  useEffect(() => {
    window.location.replace(`${basePath}/${detectLocale()}`);
  }, []);

  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta
          content={`0;url=${basePath}/${routing.defaultLocale}`}
          httpEquiv="refresh"
        />
      </head>
      <body />
    </html>
  );
}
