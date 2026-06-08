import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 일반 크롤러 — 전체 허용
      { userAgent: "*", allow: "/" },
      // 네이버 검색봇 명시적 허용 (한국 SEO)
      { userAgent: "Yeti", allow: "/" },
      // AI 어시스턴트 크롤러 허용 (AEO — AI 검색 노출)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
    ],
    sitemap: `${site.siteUrl}/sitemap.xml`,
  };
}
