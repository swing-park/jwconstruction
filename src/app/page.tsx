import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.slogan}`,
  description: `${site.name}은 주거·상업 인테리어 및 시설물 유지관리 전문 업체입니다. ${site.subSlogan}`,
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
