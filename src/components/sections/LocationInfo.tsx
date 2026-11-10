import { site } from "@/data/site";

export function LocationInfo() {
  return (
    <section className="section-padding bg-brand-white">
      <div className="container-content">
        {site.branches.map((branch) => (
          <div key={branch.name} className="mb-20 last:mb-0">
            {/* 지점명 */}
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-brand-dark">
                {branch.name}
              </h2>
              <span className="text-xs tracking-[0.2em] text-brand-muted uppercase">
                {site.nameEn}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
              {/* 지도 */}
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[400px] overflow-hidden order-2 lg:order-1">
                <a
                  href={branch.mapUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group absolute inset-0 flex flex-col items-center justify-center gap-6 bg-[#EEF0EB]"
                  aria-label="네이버 지도에서 위치 확인"
                >
                  {/* 격자 패턴 배경 */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#888" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>

                  {/* 핀 아이콘 */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#03C75A] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
                        <circle cx="12" cy="9" r="2.5" fill="#03C75A"/>
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-gray-700">{branch.address}</p>
                      <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#03C75A] font-semibold group-hover:underline">
                        네이버 지도에서 보기
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2.5 6h7M6.5 3l3 3-3 3"/>
                        </svg>
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* 정보 패널 */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* 주소 */}
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                    Address
                  </p>
                  <address className="not-italic text-brand-body leading-loose">
                    {branch.address}
                  </address>
                </div>

                {/* 연락처 */}
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                    Contact
                  </p>
                  <div className="space-y-1.5">
                    <p className="text-brand-body">
                      <a
                        href={`tel:${branch.phone ?? site.phone}`}
                        className="hover:text-brand-dark transition-colors"
                      >
                        {branch.phone ?? site.phone}
                      </a>
                    </p>
                    <p className="text-brand-body">
                      <a
                        href={`mailto:${site.email}`}
                        className="hover:text-brand-dark transition-colors"
                      >
                        {site.email}
                      </a>
                    </p>
                    <p className="text-brand-muted text-sm">{site.businessHours}</p>
                  </div>
                </div>

                {/* 교통편 */}
                {branch.transit.length > 0 && (
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                      Transportation
                    </p>
                    <ul className="space-y-2">
                      {branch.transit.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-muted flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 주차 */}
                {branch.parking && (
                  <div>
                    <p className="text-[10px] tracking-[0.2em] text-brand-muted uppercase mb-2">
                      Parking
                    </p>
                    <p className="text-sm text-brand-body">{branch.parking}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
