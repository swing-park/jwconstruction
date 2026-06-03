import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { commercialProjects } from "@/data/projects";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

export function generateStaticParams() {
  return commercialProjects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = commercialProjects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: project.title,
    description: [project.size, project.location, project.description]
      .filter(Boolean)
      .join(" · "),
  };
}

export default function CommercialDetailPage({ params }: { params: { id: string } }) {
  const project = commercialProjects.find((p) => p.id === params.id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
