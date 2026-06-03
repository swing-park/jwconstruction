import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="container-content text-center py-20">
        <p className="text-7xl md:text-9xl font-semibold text-brand-border mb-6 leading-none">
          404
        </p>
        <h1 className="text-xl md:text-2xl font-semibold text-brand-dark mb-3">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-brand-muted mb-10 text-sm leading-loose">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
          <br />
          주소를 다시 확인하거나 홈으로 돌아가 주세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3 text-sm rounded-md bg-brand-dark text-white hover:bg-brand-point transition-colors duration-200"
          >
            홈으로 돌아가기
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 text-sm rounded-md border border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-200"
          >
            상담 문의
          </Link>
        </div>
      </div>
    </div>
  );
}
