# PRD — 인테리어 사업 홈페이지

## 1. 목적

회사를 신뢰감 있게 소개하고, 시공 사례(포트폴리오)를 전시하여, 잠재 고객의 **상담 문의**로 연결하는 정적 브로슈어형 웹사이트.

## 2. 타깃

- 주거 인테리어/리모델링을 고려하는 일반 고객
- 상가·사무실 등 상업 공간 인테리어가 필요한 사업자
- 시설물 유지관리(보수·관리)가 필요한 고객

## 3. 사이트맵

```
/                         메인
/about                    회사소개 · 브랜드스토리
/process                  진행과정
/portfolio/residential    주거 인테리어
/portfolio/commercial     상업 인테리어
/portfolio/maintenance    시설물 유지관리
/location                 오시는 길
/contact                  상담 문의 (Tally 임베드)
```

> "포트폴리오"는 네비게이션 드롭다운으로만 존재하며 자체 페이지(`/portfolio`)는 없음. 클릭 시 하위 3개만 펼쳐짐.

## 4. 네비게이션

데스크톱: 좌측 로고 · 중앙/우측 메뉴 · 우측 끝 [상담 문의] 버튼. 상단 고정(sticky).
모바일: 로고 + 햄버거 → 풀스크린/슬라이드 메뉴. 포트폴리오는 아코디언으로 하위 펼침.

메뉴 순서: 회사소개 / 진행과정 / 포트폴리오▼ / 오시는 길 / [상담 문의]

## 5. 페이지별 구성

### 5.1 메인 (/)
1. **히어로** — 풀스크린 배경 이미지(또는 다중 이미지), 슬로건 + 서브카피, [상담 문의] CTA
2. **브랜드 철학** — 짧은 메시지 + 대표 이미지. "소개 더보기" → /about
3. **서비스/포트폴리오 안내 그리드** — 카드 3~4개(주거 / 상업 / 시설물 유지관리), 각 카드 클릭 시 해당 포트폴리오로 이동
4. **진행과정 요약 또는 CTA 배너** — "상담 문의" 유도
5. 푸터

### 5.2 회사소개 (/about)
1. 헤더 이미지 + "소개" 타이틀
2. 브랜드 슬로건 + 철학 본문(여러 문단)
3. **강점 카드 4종** — 전문성 / 투명한 견적 / 디자인 / A·S 사후관리 (각 이미지 + 제목 + 설명)

### 5.3 진행과정 (/process)
- 1~7단계 세로 타임라인 (레퍼런스와 유사 디자인)
- 각 단계: 번호 + 제목 + 설명
- 단계 예시: 상담문의 → 대면미팅 → 계약진행 → 현장방문 → 세부미팅 → 공사진행 → 사후관리
  (실제 문구는 사용자 데이터로 교체)

### 5.4 포트폴리오 — 주거 (/portfolio/residential)
- 카테고리(예: 평형대별 또는 스타일별) 카드 그리드 → 클릭 시 갤러리
- MVP: 카테고리 구분 없이 시공 사례 이미지 그리드 + 사례별 간단 정보(제목/평형/위치/설명)
- 사례 클릭 시 상세(이미지 여러 장) — 라이트박스 또는 상세 영역

### 5.5 포트폴리오 — 상업 (/portfolio/commercial)
- 주거와 동일 패턴, 데이터만 상업 사례

### 5.6 포트폴리오 — 시설물 유지관리 (/portfolio/maintenance)
- 동일 패턴. 유지관리 서비스 항목 소개 + 사례
- 사례 데이터가 적을 수 있으므로 서비스 설명 섹션 비중을 더 둠

### 5.7 오시는 길 (/location)
- 지점 정보(본점/분점), 주소, 지도(임베드 또는 정적 이미지), 연락처, 영업시간, 대중교통 안내

### 5.8 상담 문의 (/contact)
- 안내 문구 + **Tally 폼 임베드**
- 연락처/영업시간 병기

## 6. 콘텐츠 데이터 모델 (src/data)

```ts
// site.ts
export const site = {
  name: string,
  slogan: string,           // 예: "MAKE SPACE YOURS"
  phone: string,
  email: string,
  businessHours: string,
  branches: { name: string; address: string; mapUrl?: string }[],
  social: { youtube?: string; instagram?: string; blog?: string; ... },
};

// services.ts
export const services = {
  slug: "residential" | "commercial" | "maintenance",
  title: string,
  description: string,
  thumbnail: string,
}[];

// projects.ts
export const projects = {
  id: string,
  category: "residential" | "commercial" | "maintenance",
  title: string,
  size?: string,            // 평형 등
  location?: string,
  description: string,
  thumbnail: string,
  images: string[],
}[];

// process.ts
export const processSteps = {
  step: number,
  title: string,
  description: string,
}[];
```

> 사용자가 실제 데이터를 나중에 가공해 넣을 예정. 우선 더미 데이터로 틀 구성.

## 7. 문의 폼 (Tally)

- Tally에서 폼 생성 후 임베드. 임베드 방식은 공식 `<script>` 또는 iframe.
- 폼 ID/임베드 코드는 사용자가 발급 후 제공 → `src/data/site.ts` 또는 환경값으로 관리
- 자체 제출 처리·이메일 발송 로직은 만들지 않음

## 8. 비기능 요구사항

- **반응형**: PC / 태블릿 / 모바일 완전 지원 (mobile-first)
- **성능**: 이미지 `next/image` 최적화, SSG
- **SEO**: 페이지별 metadata(title/description/og), sitemap, robots
- **접근성**: 시맨틱 마크업, alt 텍스트, 키보드 내비
- 한국어 콘텐츠

## 9. MVP 범위 / 향후

- MVP: 위 8개 페이지 + 더미 데이터 + Tally 폼 + 반응형
- 향후 고려: 포트폴리오 카테고리 세분화(평형대별), 다국어, 블로그/소식
