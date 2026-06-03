import Link from "next/link";
import { SocialIcons } from "@/components/ui/SocialIcons";

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navItems: NavItem[] = [
  { label: "회사소개", href: "/about" },
  { label: "진행과정", href: "/process" },
  {
    label: "포트폴리오",
    href: "#",
    children: [
      { label: "주거 인테리어", href: "/portfolio/residential" },
      { label: "상업 인테리어", href: "/portfolio/commercial" },
      { label: "시설물 유지관리", href: "/portfolio/maintenance" },
    ],
  },
  { label: "오시는 길", href: "/location" },
];

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {navItems.map((item) =>
        item.children ? (
          <div key={item.label} className="relative group">
            <button className="flex items-center gap-1 text-sm text-brand-body hover:text-brand-dark transition-colors py-2">
              {item.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform group-hover:rotate-180"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* 드롭다운 */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50">
              <ul className="bg-white border border-brand-border shadow-sm min-w-[160px] py-2">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="block px-5 py-2.5 text-sm text-brand-body hover:text-brand-dark hover:bg-brand-offwhite transition-colors whitespace-nowrap"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-brand-body hover:text-brand-dark transition-colors"
          >
            {item.label}
          </Link>
        )
      )}
      <Link
        href="/contact"
        className="ml-4 px-5 py-2 text-sm rounded-md border border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white transition-colors"
      >
        상담 문의
      </Link>
      <SocialIcons suffix="header" size={16} className="ml-2" />
    </nav>
  );
}
