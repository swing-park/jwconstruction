import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "인테리어 공사 진행과정",
  description: "상담 문의부터 사후관리까지 7단계 진행과정. 투명하고 체계적인 진우건설의 공사 프로세스를 확인하세요.",
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
