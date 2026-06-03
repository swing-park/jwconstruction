import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export function Philosophy() {
  return (
    <section className="bg-brand-offwhite section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 텍스트 */}
          <div>
            <p className="text-xs tracking-[0.25em] text-brand-teal uppercase mb-4">
              Brand Philosophy
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-dark leading-tight mb-6">
              27년의 경험,
              <br />
              변하지 않는 진심
            </h2>
            <p className="text-brand-body leading-loose mb-4">
              모든 공사를 내 집처럼 생각합니다. 고객의 공간에 들어서는 순간부터
              마지막 마감재를 붙이고 떠나는 순간까지, 책임과 정성을 다하는 것은
              27년 동안 한 번도 바뀐 적 없는 {site.name}의 원칙입니다.
            </p>
            <p className="text-brand-body leading-loose mb-10">
              기초부터 마감까지 꼼꼼하게. 눈에 보이지 않는 곳일수록 더 정직하게
              시공합니다. 그것이 오래가는 공간을 만드는 방법이라고 믿습니다.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-brand-teal border-b border-brand-teal pb-0.5 hover:text-brand-muted hover:border-brand-muted transition-colors duration-200"
            >
              소개 더보기
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* 이미지 */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="/images/about/philosophy.jpg"
              alt="진우건설 브랜드 이미지"
              fill
              className="object-cover [filter:grayscale(18%)_contrast(1.08)_brightness(0.88)_saturate(0.75)]"
            />
            {/* 차분한 웜 톤 오버레이 */}
            <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
