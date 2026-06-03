import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-[#111111] overflow-hidden -mt-16 lg:-mt-20">
      {/* 배경 이미지 */}
      <Image
        src="/images/hero/hero.png"
        alt="진우건설 히어로 이미지"
        fill
        className="object-cover"
        priority
      />

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* 콘텐츠 */}
      <div className="relative z-10 container-content text-center text-white">
        <p className="text-xs tracking-[0.3em] text-white/60 uppercase mb-6">
          {site.nameEn}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-balance text-white">
          {site.slogan}
        </h1>
        <p className="text-base md:text-lg text-white/70 mb-10 max-w-lg mx-auto leading-loose">
          {site.subSlogan}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide rounded-md bg-white text-brand-dark hover:bg-brand-offwhite transition-colors duration-200"
          >
            상담 문의
          </Link>
          <Link
            href="/portfolio/residential"
            className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide rounded-md border border-white/50 text-white hover:bg-white/10 transition-colors duration-200"
          >
            시공 사례 보기
          </Link>
        </div>
      </div>

      {/* 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-white/60"
            style={{ animation: "scrollDown 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
