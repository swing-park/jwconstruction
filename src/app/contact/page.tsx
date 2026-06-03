import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "상담 문의",
  description: `${site.name}에 인테리어 상담을 문의하세요. ${site.phone}`,
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
