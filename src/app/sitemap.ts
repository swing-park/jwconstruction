import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { residentialProjects, commercialProjects, maintenanceProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                              priority: 1.0, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/about`,                   priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/process`,                 priority: 0.7, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/portfolio/residential`,   priority: 0.9, changeFrequency: "weekly",  lastModified: now },
    { url: `${base}/portfolio/commercial`,    priority: 0.9, changeFrequency: "weekly",  lastModified: now },
    { url: `${base}/portfolio/maintenance`,   priority: 0.8, changeFrequency: "weekly",  lastModified: now },
    { url: `${base}/location`,                priority: 0.6, changeFrequency: "yearly",  lastModified: now },
    { url: `${base}/contact`,                 priority: 0.8, changeFrequency: "monthly", lastModified: now },
    { url: `${base}/for-ai`,                  priority: 0.5, changeFrequency: "monthly", lastModified: now },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = [
    ...residentialProjects.map((p) => ({
      url: `${base}/portfolio/residential/${p.id}`,
      priority: 0.7 as const,
      changeFrequency: "monthly" as const,
      lastModified: now,
    })),
    ...commercialProjects.map((p) => ({
      url: `${base}/portfolio/commercial/${p.id}`,
      priority: 0.7 as const,
      changeFrequency: "monthly" as const,
      lastModified: now,
    })),
    ...maintenanceProjects.map((p) => ({
      url: `${base}/portfolio/maintenance/${p.id}`,
      priority: 0.7 as const,
      changeFrequency: "monthly" as const,
      lastModified: now,
    })),
  ];

  return [...staticRoutes, ...portfolioRoutes];
}
