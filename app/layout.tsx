import type React from "react";

// This root layout is intentionally minimal. The real <html>/<body> markup
// lives in `app/[locale]/(pages)/layout.tsx`. This file only exists so that
// `app/page.tsx` (the locale-less "/" redirect, needed for static export on
// GitHub Pages where the proxy/middleware doesn't run) has a root layout to
// attach to, per next-intl's static export guidance.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
