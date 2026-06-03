import Image from "next/image";
import { site } from "@/data/site";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-offwhite border-t border-brand-border">
      <div className="container-content py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 브랜드 */}
          <div>
            <Image
              src="/images/logos/logo-dark.svg"
              alt="진우건설 로고"
              width={120}
              height={36}
              className="h-6 w-auto mb-3 -translate-y-[5px]"
            />
            <p className="text-xs text-brand-muted leading-relaxed">
              {site.subSlogan}
            </p>
          </div>

          {/* 지점 정보 */}
          <div>
            <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-3">
              찾아오시는 길
            </p>
            {site.branches.map((branch) => (
              <address key={branch.name} className="not-italic">
                <p className="text-xs text-brand-muted mb-0.5">{branch.name}</p>
                <p className="text-xs text-brand-body">{branch.address}</p>
              </address>
            ))}
          </div>

          {/* 연락처 */}
          <div>
            <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-3">
              연락처
            </p>
            <ul className="space-y-1.5">
              <li className="text-xs text-brand-body">
                <a
                  href={`tel:${site.phone}`}
                  className="hover:text-brand-dark transition-colors"
                >
                  {site.phone} (대표)
                </a>
              </li>
              <li className="text-xs text-brand-body">
                <a
                  href={`tel:${site.mobile}`}
                  className="hover:text-brand-dark transition-colors"
                >
                  {site.mobile}
                </a>
              </li>
              <li className="text-xs text-brand-body">
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-brand-dark transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-xs text-brand-muted">{site.businessHours}</li>
            </ul>

            <SocialIcons suffix="footer" className="mt-4" />
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-10 pt-6 border-t border-brand-border flex flex-col md:flex-row justify-between gap-2">
          <p className="text-xs text-brand-muted">
            © {currentYear} {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            사업자등록번호: {site.businessNumber}
          </p>
        </div>
      </div>
    </footer>
  );
}
