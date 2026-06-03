import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;

  const routes = [
    { url: base, priority: 1.0, changeFrequency: "monthly" as const },
    { url: `${base}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/process`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/portfolio/residential`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/portfolio/commercial`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/portfolio/maintenance`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${base}/location`, priority: 0.6, changeFrequency: "yearly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}
