/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 외부 이미지 도메인은 실제 사용 시 추가
    formats: ["image/avif", "image/webp"],
  },
  // 정적 생성(SSG) 기본
  output: undefined,
};

export default nextConfig;
