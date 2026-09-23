import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://theclearpathway.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/challenge`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/courses`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...courses.map((course) => ({
      url: `${SITE_URL}/courses/${course.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/faq`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
