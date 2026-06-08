import type { Metadata } from "next";
import { residentialProjects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "주거 인테리어 시공사례",
  description: "아파트·빌라·단독주택 리모델링 시공사례. 서울·경기·인천 주거 인테리어 전문 진우건설의 포트폴리오를 확인하세요.",
  openGraph: {
    images: [{ url: "/images/placeholder/service-residential.png", alt: "진우건설 주거 인테리어" }],
  },
};

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        titleEn="Residential"
        titleKo="주거 인테리어"
        description="아파트·빌라·단독주택 리모델링 시공 사례"
      />
      <ProjectGrid projects={residentialProjects} />
      <CtaBanner />
    </>
  );
}
