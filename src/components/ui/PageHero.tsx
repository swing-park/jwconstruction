import Image from "next/image";

interface PageHeroProps {
  titleEn: string;
  titleKo: string;
  description?: string;
}

export function PageHero({ titleEn, titleKo, description }: PageHeroProps) {
  return (
    <section className="relative flex items-end min-h-[40vh] md:min-h-[50vh] overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/images/placeholder/page-hero.png"
        alt=""
        fill
        className="object-cover"
        priority
      />
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div className="relative z-10 container-content pb-12 md:pb-16 w-full">
        <p className="text-xs tracking-[0.3em] text-white/40 uppercase mb-3">
          {titleEn}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight">
          {titleKo}
        </h1>
        {description && (
          <p className="mt-4 text-sm md:text-base text-white/60 max-w-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
