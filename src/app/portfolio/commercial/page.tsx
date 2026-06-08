import type { Metadata } from "next";
import { commercialProjects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "상업 인테리어 시공사례",
  description: "카페·사무실·상가 인테리어 시공사례. 서울·경기·인천 상업공간 인테리어 전문 진우건설의 포트폴리오를 확인하세요.",
  openGraph: {
    images: [{ url: "/images/placeholder/service-commercial.png", alt: "진우건설 상업 인테리어" }],
  },
};

export default function CommercialPage() {
  return (
    <>
      <PageHero
        titleEn="Commercial"
        titleKo="상업 인테리어"
        description="카페·사무실·상업 공간 시공 사례"
      />
      <ProjectGrid projects={commercialProjects} />
      <CtaBanner />
    </>
  );
}
