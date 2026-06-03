import type { Metadata } from "next";
import { site } from "@/data/site";
import { commercialProjects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "상업 인테리어",
  description: `${site.name}의 카페·사무실·상가 인테리어 시공 사례를 확인하세요.`,
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
