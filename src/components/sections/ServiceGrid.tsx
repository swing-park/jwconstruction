import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";

export function ServiceGrid() {
  return (
    <section className="bg-brand-white section-padding">
      <div className="container-content">
        {/* 섹션 헤더 */}
        <div className="mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.25em] text-brand-teal uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-dark">
            서비스 안내
          </h2>
        </div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/portfolio/${service.slug}`}
              className="group block"
            >
              {/* 이미지 */}
              <div className="relative aspect-[4/3] bg-brand-offwhite overflow-hidden mb-5">
                <Image
                  src={service.thumbnail}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-brand-teal/0 group-hover:bg-brand-teal/15 transition-colors duration-300" />
              </div>

              {/* 텍스트 */}
              <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-1.5">
                {service.titleEn}
              </p>
              <h3 className="text-lg font-semibold text-brand-dark mb-2 group-hover:text-brand-muted transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {service.description}
              </p>

              {/* 더보기 */}
              <span className="inline-flex items-center gap-1.5 mt-4 text-xs text-brand-teal border-b border-brand-teal pb-px group-hover:text-brand-muted group-hover:border-brand-muted transition-colors duration-200">
                사례 보기
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6.5 2.5l3.5 3.5-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
