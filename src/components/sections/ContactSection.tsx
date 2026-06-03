import { site } from "@/data/site";

export function ContactSection() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          {/* 왼쪽: 폼 영역 */}
          <div>
            <p className="text-xs tracking-[0.25em] text-brand-muted uppercase mb-3">
              Consultation
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-2">
              상담 문의
            </h2>
            <p className="text-brand-body mb-8 leading-loose">
              공간에 대한 고민이 있으시다면 편하게 문의해 주세요.
              <br />
              27년 경험의 전문가가 직접 안내해 드립니다.
            </p>

            {site.tallyFormId ? (
              <iframe
                src={`https://tally.so/embed/${site.tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1`}
                width="100%"
                height="600"
                frameBorder={0}
                title="상담 문의 폼"
                loading="lazy"
              />
            ) : (
              <div className="border border-dashed border-brand-border bg-brand-offwhite p-10 text-center">
                <p className="text-brand-muted text-sm leading-loose">
                  Tally에서 폼을 생성한 뒤,
                  <br />
                  <code className="bg-brand-border px-1.5 py-0.5 text-xs mx-1">
                    src/data/site.ts
                  </code>
                  의 <code className="bg-brand-border px-1.5 py-0.5 text-xs mx-1">tallyFormId</code>에
                  ID를 입력하면 이 자리에 폼이 표시됩니다.
                </p>
              </div>
            )}
          </div>

          {/* 오른쪽: 연락처 정보 */}
          <div className="lg:pt-[4.5rem]">
            <div className="bg-brand-offwhite p-6 md:p-8 space-y-7">
              {/* 전화 */}
              <div>
                <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                  Phone
                </p>
                <div className="space-y-1.5">
                  <div>
                    <p className="text-[10px] text-brand-muted mb-0.5">대표</p>
                    <a
                      href={`tel:${site.phone}`}
                      className="text-base font-semibold text-brand-dark hover:text-brand-muted transition-colors"
                    >
                      {site.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-muted mb-0.5">직통</p>
                    <a
                      href={`tel:${site.mobile}`}
                      className="text-base font-semibold text-brand-dark hover:text-brand-muted transition-colors"
                    >
                      {site.mobile}
                    </a>
                  </div>
                </div>
              </div>

              {/* 이메일 */}
              <div>
                <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-brand-body hover:text-brand-dark transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>

              {/* 영업시간 */}
              <div>
                <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                  Hours
                </p>
                <p className="text-sm text-brand-body leading-relaxed">
                  {site.businessHours}
                </p>
              </div>

              {/* 주소 */}
              {site.branches[0] && (
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                    Address
                  </p>
                  <address className="not-italic text-sm text-brand-body leading-relaxed">
                    {site.branches[0].address}
                  </address>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
