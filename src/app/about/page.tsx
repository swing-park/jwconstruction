import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy";
import { AboutStrengths } from "@/components/sections/AboutStrengths";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "회사소개",
  description: "진우건설의 브랜드 철학과 강점. 서울·경기·인천 주거·상업 인테리어 및 시설물 유지관리 전문 업체입니다.",
  openGraph: {
    images: [{ url: "/images/about/philosophy.jpg", alt: "진우건설 브랜드 철학" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        titleEn="About"
        titleKo="회사소개"
        description="공간을 통해 삶을 바꾸는 인테리어 전문 기업"
      />
      <AboutPhilosophy />
      <AboutStrengths />
      <CtaBanner />
    </>
  );
}
