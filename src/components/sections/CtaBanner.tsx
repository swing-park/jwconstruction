import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="relative bg-brand-dark section-padding overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/images/placeholder/contact-section.png"
        alt=""
        fill
        className="object-cover"
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

      <div className="relative z-10 container-content text-center text-white">
        <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
          Contact Us
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 text-balance">
          27년 경험으로 함께하겠습니다
        </h2>
        <p className="text-white/60 mb-10 max-w-lg mx-auto leading-loose">
          공간에 대한 고민이 있으시다면 편하게 문의해 주세요.
          <br className="hidden md:block" />
          기초부터 마감까지 내 집처럼 책임지겠습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide rounded-md bg-white text-brand-dark hover:bg-brand-offwhite transition-colors duration-200"
          >
            온라인 상담 문의
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm tracking-wide rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors duration-200"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path
                d="M3.5 1C3.5 1 2 1 2 3.5C2 9.5 5.5 13 11.5 13C14 13 14 11.5 14 11.5V9.5C14 9.5 14 8.5 12.5 8.5C11 8.5 10.5 9.5 10.5 9.5C10.5 9.5 9.5 10.5 7.5 8.5C5.5 6.5 6.5 5.5 6.5 5.5C6.5 5.5 7.5 5 7.5 3.5C7.5 2 6.5 2 6.5 2L3.5 1Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {site.phone}
          </a>
        </div>
        <p className="mt-8 text-xs text-white/30">{site.businessHours}</p>
      </div>
    </section>
  );
}
