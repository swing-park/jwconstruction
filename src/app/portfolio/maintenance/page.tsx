import type { Metadata } from "next";
import { maintenanceProjects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "시설물 유지관리·보수 시공사례",
  description: "누수·도배·타일·창호 등 시설물 유지관리 전문. 서울·경기·인천 전 지역 빠르고 정확하게 처리합니다.",
  openGraph: {
    images: [{ url: "/images/placeholder/service-maintenance.png", alt: "진우건설 시설물 유지관리" }],
  },
};

export default function MaintenancePage() {
  return (
    <>
      <PageHero
        titleEn="Maintenance"
        titleKo="시설물 유지관리"
        description="누수·바닥 보수·노후 시설물 교체, 크고 작은 하자를 책임집니다"
      />
      <ProjectGrid projects={maintenanceProjects} />
      <CtaBanner />
    </>
  );
}
