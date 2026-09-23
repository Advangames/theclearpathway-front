import type { MetadataRoute } from "next";

// Required for compatibility with `output: "export"` (static export builds,
// e.g. the temporary GitHub Pages deployment).
export const dynamic = "force-static";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theclearpathway.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
