import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 디자인 토큰 — DESIGN.md 컬러 팔레트
        brand: {
          white: "#FFFFFF",
          offwhite: "#F7F6F4",
          dark: "#1A1A1A",
          body: "#3D3D3D",
          muted: "#8A8A8A",
          border: "#E5E3DF",
          point: "#2A2A2A",
          teal: "#00667F",   // 브랜드 키컬러
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
        display: ["Inter", "Pretendard", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      spacing: {
        // 섹션 패딩 토큰
        section: "5rem", // 80px 모바일
        "section-lg": "7.5rem", // 120px PC
      },
      letterSpacing: {
        widest: "0.25em",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "1.875",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
export default config;
