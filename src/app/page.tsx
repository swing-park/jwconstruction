import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.slogan}`,
  description: "주거·상업 인테리어 및 시설물 유지관리 전문. 서울·경기·인천 전 지역 시공 가능. 기초부터 마감까지 책임과 정성을 다합니다.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServiceGrid />
      <CtaBanner />
    </>
  );
}
