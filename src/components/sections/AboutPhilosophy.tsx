import Image from "next/image";
import { philosophy } from "@/data/about";
import { site } from "@/data/site";

export function AboutPhilosophy() {
  const lines = philosophy.headline.split("\n");

  return (
    <section className="section-padding bg-brand-white">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* 이미지 */}
          <div className="order-2 lg:order-1 relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/about/philosophy.jpg"
              alt="진우건설 대표 이미지"
              fill
              className="object-cover [filter:grayscale(18%)_contrast(1.08)_brightness(0.88)_saturate(0.75)]"
            />
            {/* 차분한 웜 톤 오버레이 */}
            <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply" />
          </div>

          {/* 텍스트 */}
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.25em] text-brand-teal uppercase mb-6">
              About {site.nameEn}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark leading-tight mb-10 whitespace-pre-line">
              {lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < lines.length - 1 && <br />}
                </span>
              ))}
            </h2>
            <div className="space-y-5">
              {philosophy.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-brand-body leading-loose text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
