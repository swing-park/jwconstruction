export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "상담 문의",
    description:
      "전화·온라인 폼으로 편하게 문의하세요. 공간 유형·예산·일정 등 기본 정보를 파악합니다.",
  },
  {
    step: 2,
    title: "대면 미팅",
    description:
      "고객님의 요청 사항과 현장의 전반적인 상황을 상세히 논의하고 인테리어의 방향성을 잡습니다.",
  },
  {
    step: 3,
    title: "현장 방문",
    description:
      "현장을 방문하여 정밀하게 실측하고, 현장의 현황 및 특이사항을 파악 후 시공 계획을 구체화합니다.",
  },
  {
    step: 4,
    title: "세부 미팅",
    description:
      "자재·색상·가구 등 세부 사항을 최종 확정합니다. 고객의 취향을 최대한 반영합니다.",
  },
  {
    step: 5,
    title: "계약 진행",
    description:
      "미팅 후 제공해 드리는 견적서, 시방서, 일정표를 기준으로 최종 계약을 체결합니다. 모든 내용을 명확하게 안내드립니다.",
  },
  {
    step: 6,
    title: "공사 진행",
    description:
      "검증된 시공팀이 일정에 맞춰 시공합니다. 진행 상황을 주기적으로 공유합니다.",
  },
  {
    step: 7,
    title: "사후 관리",
    description:
      "공사 완료 후 1년간 무상 보수 서비스를 제공하며, 하자 발생 시 신속하게 대응합니다. 완공 후 품질 유지를 약속드립니다.",
  },
];
