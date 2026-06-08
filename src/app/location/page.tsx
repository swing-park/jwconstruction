import type { Metadata } from "next";
import { site } from "@/data/site";
import { PageHero } from "@/components/ui/PageHero";
import { LocationInfo } from "@/components/sections/LocationInfo";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "오시는 길",
  description: `진우건설 위치 안내. ${site.branches[0]?.address ?? "서울특별시 노원구 덕릉로 791, 101호"}. 4호선 불암산역 2번 출구 도보 300m.`,
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
