import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { LocationInfo } from "@/components/sections/LocationInfo";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "오시는 길",
  description: `${site.name} 위치 및 교통 안내. ${site.branches[0]?.address ?? ""}`,
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        titleEn="Location"
        titleKo="오시는 길"
        description="언제든지 편하게 방문해 주세요"
      />
      <LocationInfo />
      <CtaBanner />
    </>
  );
}
