export type ServiceSlug = "residential" | "commercial" | "maintenance";

export interface Service {
  slug: ServiceSlug;
  title: string;
  titleEn: string;
  description: string;
  thumbnail: string;
}

export const services: Service[] = [
  {
    slug: "residential",
    title: "주거 인테리어",
    titleEn: "RESIDENTIAL",
    description:
      "아파트·빌라·단독주택 전체 리모델링부터 부분 인테리어까지. 27년 경험으로 기초부터 마감까지 꼼꼼하게 완성합니다.",
    thumbnail: "/images/placeholder/service-residential.png",
  },
  {
    slug: "commercial",
    title: "상업 인테리어",
    titleEn: "COMMERCIAL",
    description:
      "카페·사무실·식당·상가 등 상업 공간 시공. 브랜드의 개성을 담아 오래 쓸 수 있는 공간으로 만들어 드립니다.",
    thumbnail: "/images/placeholder/service-commercial.png",
  },
  {
    slug: "maintenance",
    title: "시설물 유지관리",
    titleEn: "MAINTENANCE",
    description:
      "누수·바닥 꺼짐·노후 시설물 교체 등 크고 작은 하자를 신속하게 처리합니다. 완공 후에도 책임지는 사후관리.",
    thumbnail: "/images/placeholder/service-maintenance.png",
  },
];
