import type { Metadata } from "next";
import { site } from "@/data/site";
import { maintenanceProjects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "시설물 유지관리",
  description: `${site.name}의 시설물 유지관리 서비스와 시공 사례를 확인하세요.`,
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
