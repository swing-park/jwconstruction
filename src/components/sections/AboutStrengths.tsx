import { strengths } from "@/data/about";

const icons: Record<string, JSX.Element> = {
  expertise: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 3l2.8 5.6 6.2.9-4.5 4.4 1.1 6.1L14 17l-5.6 3 1.1-6.1L5 9.5l6.2-.9L14 3z" />
    </svg>
  ),
  estimate: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="20" height="20" rx="2" />
      <path d="M9 14h10M9 9h10M9 19h6" />
    </svg>
  ),
  design: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 24l6-6M10 18l10-10a2.83 2.83 0 00-4-4L6 14" />
      <path d="M18 4l6 6" />
      <circle cx="7" cy="21" r="3" />
    </svg>
  ),
  aftercare: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4C9 4 5 8 5 13c0 4 2.5 7.5 6 9l3 2 3-2c3.5-1.5 6-5 6-9 0-5-4-9-9-9z" />
      <path d="M10 13l2.5 2.5L18 10" />
    </svg>
  ),
};

export function AboutStrengths() {
  return (
    <section className="section-padding bg-brand-offwhite">
      <div className="container-content">
        <div className="mb-12 lg:mb-16">
          <p className="text-xs tracking-[0.25em] text-brand-teal uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-dark">
            선택해야 하는 이유
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {strengths.map((item, i) => (
            <div key={item.id} className="flex gap-6">
              {/* 아이콘 */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center border border-brand-teal/40 text-brand-teal">
                  {icons[item.id]}
                </div>
              </div>

              {/* 텍스트 */}
              <div className="pt-1">
                <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-1">
                  0{i + 1}
                </p>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-body leading-loose">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
