import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "진행과정",
  description: `${site.name}의 상담 문의부터 사후관리까지 7단계 진행과정을 안내합니다.`,
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        titleEn="Process"
        titleKo="진행과정"
        description="상담 문의부터 사후관리까지, 7단계로 함께합니다"
      />
      <ProcessTimeline />
      <CtaBanner />
    </>
  );
}
