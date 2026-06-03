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
              <div className="relative aspect-[16/9] lg:aspect-auto lg:min-h-[400px] bg-brand-offwhite overflow-hidden order-2 lg:order-1">
                {branch.mapEmbedUrl ? (
                  <>
                    <iframe
                      src={branch.mapEmbedUrl}
                      title={`${branch.name} 지도`}
                      width="100%"
                      height="100%"
                      className="absolute inset-0 w-full h-full border-0"
                      loading="lazy"
                      allow="geolocation"
                    />
                    {branch.mapUrl && (
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-white text-brand-dark rounded-md shadow-sm hover:bg-brand-offwhite transition-colors"
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 1C4 1 2.5 2.5 2.5 4.5c0 3 3.5 6.5 3.5 6.5s3.5-3.5 3.5-6.5C9.5 2.5 8 1 6 1z"/>
                          <circle cx="6" cy="4.5" r="1.2"/>
                        </svg>
                        네이버 지도에서 보기
                      </a>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-brand-muted">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 3C12.5 3 8 7.5 8 13c0 8 10 20 10 20s10-12 10-20c0-5.5-4.5-10-10-10z" />
                      <circle cx="18" cy="13" r="3.5" />
                    </svg>
                    <p className="text-sm">지도 영역</p>
                  </div>
                )}
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
