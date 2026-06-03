import type { ServiceSlug } from "./services";

export interface Project {
  id: string;
  category: ServiceSlug;
  title: string;
  size?: string;
  location?: string;
  description: string;
  thumbnail: string;
  imageCount: number; // 이미지 수. /images/portfolio/{category}/{id}/1.jpg ~ {imageCount}.jpg
}

export const residentialProjects: Project[] = [
  {
    id: "res-001",
    category: "residential",
    title: "중계동 주공8단지 21평형 리모델링",
    size: "21평",
    location: "서울 노원구",
    description:
      "깔끔하고 모던한 화이트 톤으로 완성된 노원구 중계동 주공8단지 21평형 아파트 인테리어를 소개합니다.\n\n현관과 주방은 패트 재질 화이트로 마감해 심플하고 모던한 무드를 살리고, 욕실은 오픈형 샤워 공간으로 개방감을 더했어요.\n\n33년 된 노후 씽크대를 전체 철거하고 냉장고 상부장 제작과 매립수전 작업으로 수납과 편의성을 높였습니다. 영림샷시 창호로 단열성을 챙기고, 노후 난방 분배기를 교체해 누수와 아랫세대 분쟁까지 미연에 방지했어요. 전체 LED 조명 교체로 분위기와 에너지 효율도 함께 끌어올렸습니다.\n\n이 프로젝트와 비슷한 공간을 고민하고 계신다면, '상담문의' 버튼으로 언제든 편하게 문의주세요.",
    thumbnail: "/images/portfolio/residential/res-001/1.jpg",
    imageCount: 11,
  },
];

export const commercialProjects: Project[] = [
  {
    id: "com-001",
    category: "commercial",
    title: "명륜동 사무실 랩핑 경량칸막이 가벽 공사",
    location: "서울 종로구",
    description:
      "깔끔하고 효율적인 사무공간으로 완성된 서울 종로구 명륜동 공인중개사 인테리어를 소개합니다.\n\n랩핑 경량칸막이로 별도의 도장 작업 없이 깔끔한 마감과 가성비를 동시에 살리고, 화이트 디자인 포인트 문짝으로 주변 분위기와 어울리는 감각을 더했어요.\n\n레이저레벨기로 수직·수평을 정밀하게 맞춰 시공의 기본을 챙기고, 천정받이와 걸레받이를 설치해 완성도를 높였습니다. 에어컨 위치를 고려해 공간을 분리하고, 모든 모서리 실리콘 헤라 마감으로 디테일과 에너지 효율까지 끌어올렸어요.\n\n이 프로젝트와 비슷한 공간을 고민하고 계신다면, '상담문의' 버튼으로 언제든 편하게 문의주세요.",
    thumbnail: "/images/portfolio/commercial/com-001/1.jpg",
    imageCount: 8,
  },
];

export const maintenanceProjects: Project[] = [
  {
    id: "mnt-001",
    category: "maintenance",
    title: "상계동 식당 주방 노후 정화조 철판 덮개 교체 시공",
    location: "서울 노원구",
    description:
      "안전하고 깔끔하게 완성된 노원구 상계동 식당 주방 노후 정화조 철판 덮개 교체 시공을 소개합니다.\n\n스텐 각파이프를 용접해 제작한 덮개 프레임을 단차 없이 고정하고, H모양 보강대로 하중을 견디는 안정감을 더했어요.\n\n노후 철판을 제거한 뒤 시멘트·몰탈 액체방수 2겹으로 지하 층 피해를 미연에 방지하고, 앙카와 화스너 용접으로 프레임을 단단히 고정했습니다. 프레임과 바닥 사이는 우레탄 폼으로 빈틈없이 채우고, 자주 밟는 주방 공간인 만큼 안전을 최우선으로 시공한 뒤 타일까지 깔끔하게 마감했어요.\n\n이 프로젝트와 비슷한 공간을 고민하고 계신다면, '상담문의' 버튼으로 언제든 편하게 문의주세요.",
    thumbnail: "/images/portfolio/maintenance/mnt-001/9.jpg",
    imageCount: 9,
  },
];

/** imageCount로부터 이미지 경로 배열 생성 */
export function getProjectImages(project: Project): string[] {
  return Array.from(
    { length: project.imageCount },
    (_, i) =>
      `/images/portfolio/${project.category}/${project.id}/${i + 1}.jpg`,
  );
}
