import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="container-content">
        <div className="mb-14 lg:mb-20">
          <p className="text-xs tracking-[0.25em] text-brand-teal uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-dark">
            진행 과정
          </h2>
        </div>

        {/* 타임라인 */}
        <div className="max-w-3xl mx-auto">
          {processSteps.map((item, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <div key={item.step} className="flex gap-8 md:gap-12">
                {/* 왼쪽: 번호 + 연결선 */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-teal flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-brand-teal tabular-nums">
                      {String(item.step).padStart(2, "0")}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-brand-border my-2 min-h-[3rem]" />
                  )}
                </div>

                {/* 오른쪽: 콘텐츠 */}
                <div className="pb-10 md:pb-14">
                  <h3 className="text-lg md:text-xl font-semibold text-brand-dark mb-2 mt-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-brand-body leading-loose">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
