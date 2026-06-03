"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "./Nav";

export function MobileMenuToggle({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      aria-expanded={isOpen}
      className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5"
    >
      <span
        className={`block w-6 h-px bg-brand-dark transition-all duration-200 ${
          isOpen ? "rotate-45 translate-y-[5px]" : ""
        }`}
      />
      <span
        className={`block w-6 h-px bg-brand-dark transition-all duration-200 ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block w-6 h-px bg-brand-dark transition-all duration-200 ${
          isOpen ? "-rotate-45 -translate-y-[5px]" : ""
        }`}
      />
    </button>
  );
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
    setPortfolioOpen(false);
  };

  return (
    <>
      <MobileMenuToggle isOpen={isOpen} onToggle={() => setIsOpen((v) => !v)} />

      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* 슬라이드 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* 헤더 영역 */}
        <div className="flex justify-end p-5 border-b border-brand-border">
          <button
            onClick={close}
            aria-label="메뉴 닫기"
            className="w-11 h-11 flex items-center justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M1 1l16 16M17 1L1 17"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="p-6">
          <ul className="space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <li key={item.label}>
                  <button
                    onClick={() => setPortfolioOpen((v) => !v)}
                    className="flex items-center justify-between w-full py-3 text-base text-brand-body hover:text-brand-dark transition-colors"
                  >
                    {item.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className={`transition-transform duration-200 ${portfolioOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M2 5l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {/* 아코디언 */}
                  {portfolioOpen && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block py-2.5 text-sm text-brand-muted hover:text-brand-dark transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="block py-3 text-base text-brand-body hover:text-brand-dark transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-8 pt-6 border-t border-brand-border">
            <Link
              href="/contact"
              onClick={close}
              className="block w-full py-3 text-center text-sm rounded-md bg-brand-teal text-white hover:opacity-90 transition-opacity"
            >
              상담 문의
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
