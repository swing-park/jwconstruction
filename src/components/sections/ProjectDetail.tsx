import Link from "next/link";
import { type Project, getProjectImages } from "@/data/projects";
import type { ServiceSlug } from "@/data/services";
import { ProjectSlider } from "@/components/ui/ProjectSlider";
import { CtaBanner } from "./CtaBanner";

const categoryMeta: Record<ServiceSlug, { label: string; href: string }> = {
  residential: { label: "주거 인테리어", href: "/portfolio/residential" },
  commercial:  { label: "상업 인테리어",  href: "/portfolio/commercial" },
  maintenance: { label: "시설물 유지관리", href: "/portfolio/maintenance" },
};

interface Props {
  project: Project;
}

export function ProjectDetail({ project }: Props) {
  const meta = categoryMeta[project.category];
  const images = getProjectImages(project);

  return (
    <>
      <section className="bg-brand-white section-padding">
        <div className="container-content max-w-4xl">

          {/* 뒤로가기 */}
          <Link
            href={meta.href}
            className="inline-flex items-center gap-2 text-xs text-brand-muted hover:text-brand-dark transition-colors mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {meta.label}
          </Link>

          {/* 프로젝트 헤더 */}
          <div className="mb-8 pb-8 border-b border-brand-border">
            <h1 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-6">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-brand-teal uppercase mb-1">Category</p>
                <p className="text-sm font-medium text-brand-dark">{meta.label}</p>
              </div>
              {project.size && (
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-brand-teal uppercase mb-1">Size</p>
                  <p className="text-sm font-medium text-brand-dark">{project.size}</p>
                </div>
              )}
              {project.location && (
                <div>
                  <p className="text-[10px] tracking-[0.2em] text-brand-teal uppercase mb-1">Location</p>
                  <p className="text-sm font-medium text-brand-dark">{project.location}</p>
                </div>
              )}
            </div>
          </div>

          {/* 이미지 슬라이더 */}
          <ProjectSlider images={images} title={project.title} />

          {/* 설명 — \n 줄바꿈 지원 */}
          <div className="mt-10 pt-10 border-t border-brand-border">
            <p className="text-[15px] md:text-base text-brand-body leading-loose whitespace-pre-line mb-8">
              {project.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 text-sm rounded-md bg-brand-dark text-white hover:opacity-90 transition-opacity duration-200"
            >
              상담 문의하기
            </Link>
          </div>

          {/* 목록으로 돌아가기 */}
          <div className="mt-14 pt-10 border-t border-brand-border">
            <Link
              href={meta.href}
              className="inline-flex items-center gap-2 text-sm text-brand-teal border-b border-brand-teal pb-0.5 hover:text-brand-muted hover:border-brand-muted transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {meta.label} 목록으로
            </Link>
          </div>

        </div>
      </section>

      <CtaBanner />
    </>
  );
}
