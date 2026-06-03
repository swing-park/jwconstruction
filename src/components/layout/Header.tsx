"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DesktopNav } from "./Nav";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_0_#E5E3DF]" : ""
      }`}
    >
      <div className="container-content flex items-center justify-between h-16 lg:h-20">
        {/* 로고 */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logos/logo-dark.svg"
            alt="진우건설 로고"
            width={110}
            height={32}
            className="h-6 lg:h-7 w-auto -translate-y-[5px]"
            priority
          />
        </Link>

        {/* 데스크톱 네비 */}
        <DesktopNav />

        {/* 모바일 햄버거 */}
        <MobileMenu />
      </div>
    </header>
  );
}
