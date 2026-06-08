import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description: "주거·상업 인테리어 및 시설물 유지관리 전문. 서울·경기·인천 전 지역 시공 가능. 기초부터 마감까지 책임과 정성을 다합니다.",
  keywords: ["인테리어", "리모델링", "주거인테리어", "공간디자인", "공간설계", "노원구 인테리어", "서울 인테리어", "경기 인테리어", "인천 인테리어", "상업인테리어", "아파트인테리어", "시설물유지관리", "진우건설", "JW CONSTRUCTION"],
  verification: {
    other: {
      "naver-site-verification": "5b3ab84ca6a525e3951c26830124bdd56c69eb2c",
    },
  },
  openGraph: {
    siteName: site.name,
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/hero/ogImg.png", width: 1200, height: 630, alt: "진우건설" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.siteUrl}/#organization`,
  name: site.name,
  alternateName: site.nameEn,
  description: "주거·상업 인테리어 및 시설물 유지관리 전문 업체. 서울·경기·인천 전 지역 시공.",
  url: site.siteUrl,
  telephone: site.phone,
  email: site.email,
  image: `${site.siteUrl}/images/hero/ogImg.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "덕릉로 791, 101호",
    addressLocality: "노원구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "서울특별시" },
    { "@type": "AdministrativeArea", name: "경기도" },
    { "@type": "AdministrativeArea", name: "인천광역시" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: [site.social.blog].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
