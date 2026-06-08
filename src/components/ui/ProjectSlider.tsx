"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export function ProjectSlider({ images, title }: Props) {
  const [current, setCurrent] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() =>
    setCurrent((i) => (i - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((i) => (i + 1) % images.length), [images.length]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  // 활성 썸네일 자동 스크롤
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const activeThumb = container.children[current] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [current]);

  if (images.length === 0) return null;

  return (
    <div>
      {/* 메인 이미지 */}
      <div className="relative aspect-[4/3] md:aspect-[16/9] bg-brand-offwhite overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-300 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`${title} 시공사례 ${i + 1}번째 이미지`}
              fill
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}

        {/* 이전 / 다음 버튼 */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="이전 이미지"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors rounded-md"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="다음 이미지"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/50 text-white transition-colors rounded-md"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}

        {/* 카운터 */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 z-20 px-2.5 py-1 bg-black/40 text-white text-xs tabular-nums rounded">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* 썸네일 */}
      {images.length > 1 && (
        <div
          ref={thumbsRef}
          className="flex gap-2 mt-2 overflow-x-auto pb-1 scrollbar-hide"
        >
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}번째 이미지`}
              className={`relative flex-shrink-0 w-20 md:w-24 aspect-[4/3] overflow-hidden transition-all duration-200 ${
                i === current
                  ? "ring-2 ring-brand-teal ring-offset-1 opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
