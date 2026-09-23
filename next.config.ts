import type { NextConfig } from "next";

// Set STATIC_EXPORT=true only when building the temporary static export for
// GitHub Pages (see .github/workflows/deploy-gh-pages.yml). The normal
// production build keeps using the Node.js "standalone" output.
const isGithubPages = process.env.STATIC_EXPORT === "true";
const repoName = "theclearpathway-front";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined,
  trailingSlash: isGithubPages,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: isGithubPages,
  },
};

export default nextConfig;
