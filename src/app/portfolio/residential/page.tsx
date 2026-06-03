import type { Metadata } from "next";
import { site } from "@/data/site";
import { residentialProjects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "주거 인테리어",
  description: `${site.name}의 아파트·빌라·단독주택 인테리어 시공 사례를 확인하세요.`,
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
