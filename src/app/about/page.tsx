import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { AboutPhilosophy } from "@/components/sections/AboutPhilosophy";
import { AboutStrengths } from "@/components/sections/AboutStrengths";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "회사소개",
  description: `${site.name}의 브랜드 철학과 강점을 소개합니다.`,
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
