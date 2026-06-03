import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface Props {
  projects: Project[];
}

export function ProjectGrid({ projects }: Props) {
  return (
    <section className="section-padding bg-brand-white">
      <div className="container-content">
        {projects.length === 0 ? (
          <p className="text-brand-muted text-center py-24">
            시공 사례를 준비 중입니다.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.category}/${project.id}`}
                className="group block"
              >
                {/* 이미지 영역 */}
                <div className="relative aspect-[4/3] bg-brand-offwhite overflow-hidden mb-4">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-brand-teal/0 group-hover:bg-brand-teal/25 transition-colors duration-300" />
                </div>

                {/* 메타 정보 */}
                {(project.size ?? project.location) && (
                  <p className="text-[11px] text-brand-muted tracking-wide mb-1">
                    {[project.size, project.location].filter(Boolean).join(" · ")}
                  </p>
                )}
                <h3 className="text-base font-semibold text-brand-dark group-hover:text-brand-muted transition-colors duration-200">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
