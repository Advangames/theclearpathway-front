import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Set STATIC_EXPORT=true only when building the temporary static export for
// GitHub Pages (see .github/workflows/deploy-gh-pages.yml). The normal
// production build keeps using the Node.js "standalone" output.
const isGithubPages = process.env.STATIC_EXPORT === "true";
const repoName = "theclearpathway-front";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages ? `/${repoName}` : undefined,
  trailingSlash: isGithubPages,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: isGithubPages,
  },
  env: {
    // Exposed to the client so the "/" fallback redirect (used when the
    // proxy/middleware can't run, e.g. the static GitHub Pages export) can
    // build a correct URL even when basePath is set.
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : "",
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
