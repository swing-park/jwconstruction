# CLAUDE.md

> 이 파일은 Claude Code가 매 작업마다 읽는 프로젝트 규칙서입니다.
> 작업 시작 전 반드시 이 문서와 `docs/PRD.md`, `docs/DESIGN.md`를 참고하세요.

## 프로젝트 개요

진우건설(JW CONSTRUCTION) 홈페이지. 회사 소개·진행과정·포트폴리오(시공 사례) 전시 + 문의 유도가 목적인 **정적 브로슈어형 사이트**.
슬로건: **경험이 빚은 공간, 진심이 담긴 마무리**

## 기술 스택

- **Next.js 14 (App Router)** — 정적 생성(SSG) 기본
- **TypeScript** — strict 모드
- **Tailwind CSS** — 스타일링, 디자인 토큰은 `tailwind.config.ts`에 정의
- **배포: Vercel** (`jwconstruction.co.kr`)
- **백엔드 없음** — 서버/DB/API 라우트 만들지 말 것
- **문의 폼: Tally 임베드** (formId: zxLo4E)
- 콘텐츠 데이터는 `src/data/*.ts` 파일로 관리

## 실제 디렉토리 구조

```
src/
  app/
    layout.tsx                  # 공통 레이아웃 — Header + Footer, lang="ko"
    page.tsx                    # 메인 (/)
    not-found.tsx               # 404
    sitemap.ts                  # /sitemap.xml 자동 생성
    robots.ts                   # /robots.txt 자동 생성
    globals.css                 # Pretendard 폰트, 베이스 스타일
    about/page.tsx
    process/page.tsx
    portfolio/
      residential/page.tsx + [id]/page.tsx
      commercial/page.tsx  + [id]/page.tsx
      maintenance/page.tsx + [id]/page.tsx
    location/page.tsx
    contact/page.tsx
    for-ai/page.tsx             # AI 어시스턴트 추천 가이드 페이지

  components/
    layout/
      Header.tsx                # sticky, 스크롤 shadow, logo-dark.svg, "use client"
      Footer.tsx                # 연락처/소셜/사업자 정보, SocialIcons
      Nav.tsx                   # DesktopNav — 포트폴리오 드롭다운
      MobileMenu.tsx            # 햄버거 슬라이드 메뉴, "use client"
    ui/
      PageHero.tsx              # 서브페이지 공통 히어로 (page-hero.png)
      ProjectSlider.tsx         # 이미지 슬라이더 + 썸네일 페이지네이션, "use client"
      SocialIcons.tsx           # 인스타/유튜브/네이버블로그 아이콘
    sections/
      Hero.tsx                  # 메인 풀스크린 히어로 (hero.png)
      Philosophy.tsx            # 메인 브랜드 철학 (philosophy.jpg)
      ServiceGrid.tsx           # 메인 서비스 카드 3종 (next/image)
      CtaBanner.tsx             # 다크 CTA 배너 (contact-section.png)
      AboutPhilosophy.tsx       # 회사소개 — 이미지 + 철학 본문
      AboutStrengths.tsx        # 회사소개 — 강점 카드 4종
      ProcessTimeline.tsx       # 진행과정 — 7단계 타임라인
      ProjectGrid.tsx           # 포트폴리오 그리드 (next/image 썸네일)
      ProjectDetail.tsx         # 포트폴리오 상세 — 슬라이더/설명/상담버튼
      LocationInfo.tsx          # 오시는 길 — 네이버 지도 iframe + 정보
      ContactSection.tsx        # 상담 문의 — Tally iframe + 연락처

  data/
    site.ts                     # 회사 정보 (상호/연락처/주소/소셜/지점/Tally)
    services.ts                 # 서비스 카테고리 3종
    projects.ts                 # 포트폴리오 사례 (카테고리별 분리 배열 + getProjectImages)
    process.ts                  # 진행 과정 7단계
    about.ts                    # 회사소개 강점 4종 + 철학 본문

public/
  llms.txt                      # AI 크롤러용 구조화 정보 (llms.txt 표준)
  images/
    hero/
      hero.png                  # 메인 히어로 배경
      ogImg.png                 # SNS 공유용 OG 이미지 (1200×630)
    about/
      philosophy.jpg            # 브랜드 철학·회사소개 이미지
    placeholder/
      page-hero.png             # 서브페이지 PageHero 배경
      contact-section.png       # CtaBanner 배경
      service-residential.png   # 서비스 카드 썸네일
      service-commercial.png
      service-maintenance.png
    portfolio/
      residential/{id}/1.jpg ~ N.jpg
      commercial/{id}/1.jpg  ~ N.jpg
      maintenance/{id}/1.jpg ~ N.jpg
    logos/
      logo-dark.svg             # 헤더·푸터 로고
      logo-white.svg
      logo.svg
      favicon.ico
```

## 콘텐츠 수정 가이드

| 파일                        | 수정 항목                                                      |
| --------------------------- | -------------------------------------------------------------- |
| `src/data/site.ts`          | 회사명·전화·이메일·주소·영업시간·사업자번호·소셜링크·Tally폼ID |
| `src/data/services.ts`      | 서비스 카드 설명·썸네일 경로                                   |
| `src/data/projects.ts`      | 포트폴리오 사례 추가/수정 (카테고리별 배열)                    |
| `src/data/process.ts`       | 진행 과정 단계 문구                                            |
| `src/data/about.ts`         | 회사 철학 본문·강점 카드 내용                                  |
| `src/app/layout.tsx`        | 전역 metadata (title·description·keywords·og:image·JSON-LD)   |
| `public/llms.txt`           | AI 크롤러용 회사 정보 (서비스·지역·연락처·링크)                |
| `src/app/for-ai/page.tsx`   | AI 추천 가이드 페이지 내용                                     |

## 포트폴리오 이미지 규칙

```ts
// projects.ts에서
{
  id: "res-002",
  category: "residential",
  thumbnail: "/images/portfolio/residential/res-002/1.jpg",
  imageCount: 5,  // → 1.jpg ~ 5.jpg 자동 생성
}
```

이미지 파일 위치: `public/images/portfolio/{category}/{id}/1.jpg`, `2.jpg` ...

## 코딩 규칙

- 컴포넌트: 함수형 + named export. PascalCase
- 기본은 **서버 컴포넌트**. 인터랙션 필요한 곳만 `"use client"`
- 스타일은 Tailwind 유틸리티 우선
- 이미지는 반드시 `next/image` 사용
- UI 텍스트·주석은 한국어
- 콘텐츠는 `src/data/`에서 import. `any` 금지

## 반응형 규칙

mobile-first. 기본=모바일, `md:`=태블릿, `lg:`=PC
모든 그리드: 1열 → 2열 → 3열. 터치 타겟 최소 44px

## 하지 말 것

- 임의로 라이브러리 추가 금지 — 먼저 사용자에게 물어볼 것
- 백엔드 코드(API 라우트, DB 연결) 작성 금지
- 자체 폼 제출/이메일 발송 로직 작성 금지 (Tally가 처리)
- `.env`, 배포 설정 임의 수정 금지

## 명령어

- 개발: `npm run dev`
- 빌드: `npm run build`
- 린트: `npm run lint`
- 타입체크: `npx tsc --noEmit`

## 현재 진행 상태 (배포 완료)

- [x] 프로젝트 초기 세팅
- [x] 공통 레이아웃 (Header / Nav / MobileMenu / Footer)
- [x] 메인 페이지 (Hero / Philosophy / ServiceGrid / CtaBanner)
- [x] 회사소개 / 진행과정
- [x] 포트폴리오 목록 3종 (카드 그리드 + next/image)
- [x] 포트폴리오 상세 (슬라이더 + 썸네일 페이지네이션)
- [x] 오시는 길 (네이버 지도 iframe 임베드)
- [x] 상담 문의 (Tally 연동)
- [x] SEO (sitemap.xml / robots.txt / 페이지별 metadata)
- [x] 404 페이지
- [x] 브랜드 키컬러 (#00667F) 적용
- [x] 소셜 아이콘 (인스타·유튜브·네이버블로그)
- [x] 로고·파비콘 적용
- [x] 코드 정리 완료 (미사용 파일·코드 제거)
- [x] SEO/AEO 고도화 (JSON-LD, og:image, keywords, 지역 키워드, alt 텍스트)
- [x] /llms.txt — AI 크롤러용 구조화 정보 파일
- [x] /for-ai — AI 어시스턴트 추천 가이드 페이지
- [x] 네이버 서치어드바이저 인증 (메타태그)
- [x] Google Search Console 인증 (DNS TXT 레코드)
- [x] 포트폴리오 사례 추가 (residential 19건, commercial 6건, maintenance 5건)

## 확정된 회사 정보

| 항목          | 값                                   |
| ------------- | ------------------------------------ |
| 업체명        | 진우건설                             |
| 영문명        | JW CONSTRUCTION                      |
| 슬로건        | 경험이 빚은 공간, 진심이 담긴 마무리 |
| 대표번호      | 02-934-0489                          |
| 직통          | 010-9928-8479                        |
| 이메일        | jwconst.official@gmail.com           |
| 주소          | 서울특별시 노원구 덕릉로 791, 101호  |
| 영업시간      | 연중무휴 08:00 - 20:00               |
| 사업자번호    | 205-06-93896                         |
| 사이트 URL    | https://jwconstruction.co.kr         |
| Tally 폼 ID   | zxLo4E                               |
| 네이버 지도   | place/504917846                      |
| 네이버 블로그 | https://blog.naver.com/jw_cons       |

## 배포 체크리스트

### 배포 전 (개발 완료)

- [x] `src/data/site.ts` 실제 정보 입력 완료
- [x] 포트폴리오 이미지 업로드 완료 (residential 19건, commercial 6건, maintenance 5건)
- [x] Tally 폼 연결 완료
- [x] 네이버 지도 임베드 완료
- [x] `src/data/site.ts` — `social.instagram`, `social.youtube` 실제 URL 입력
- [x] 모바일·태블릿·PC 브라우저 최종 점검

### Vercel 배포

- [x] GitHub 저장소 생성 및 코드 push
- [x] Vercel → "Add New Project" → GitHub 연결
- [x] Deploy → 커스텀 도메인 `jwconstruction.co.kr` 연결
- [x] 배포 후 `sitemap.xml`, `robots.txt` 정상 확인

### SEO·AEO 고도화 (완료)

- [x] `layout.tsx` — `metadataBase`, JSON-LD LocalBusiness 스키마 (서울·경기·인천 `areaServed`)
- [x] 전역 `keywords` — 인테리어·리모델링·주거인테리어·공간디자인·공간설계·지역 키워드 포함
- [x] 기본 `og:image` — `/images/hero/ogImg.png` (1200×630)
- [x] 페이지별 `og:image` — 회사소개·포트폴리오 목록 3종·포트폴리오 상세(thumbnail)
- [x] 전 페이지 description — 서울·경기·인천 전 지역 시공 키워드 반영
- [x] 포트폴리오 상세 description — 160자 정리, `\n` 제거
- [x] `ProjectSlider` — 메인 이미지 alt 텍스트 보강
- [x] `sitemap.ts` — 포트폴리오 상세 29개 + `/for-ai` 추가 (총 38개)
- [x] `robots.ts` — 네이버봇(Yeti), AI 크롤러(GPTBot·ClaudeBot·PerplexityBot 등) 명시적 허용
- [x] `/llms.txt` — AI 크롤러용 구조화 정보 파일
- [x] `/for-ai` — AI 어시스턴트 추천 가이드 페이지
- [x] 네이버 서치어드바이저 인증 (layout.tsx 메타태그)
- [x] Google Search Console 인증 (DNS TXT 레코드)

### 추후 과제

- [ ] SEO 성과 모니터링 후 키워드 재검토 (Google Search Console, 네이버 서치어드바이저)
