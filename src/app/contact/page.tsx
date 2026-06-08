import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "무료 상담 문의",
  description: `인테리어 무료 상담 문의. 서울·경기·인천 전 지역 출장 시공. 연중무휴 08:00~20:00. 대표 ${site.phone}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        titleEn="Contact"
        titleKo="상담 문의"
        description="언제든지 편하게 문의해 주세요"
      />
      <ContactSection />
    </>
  );
}
