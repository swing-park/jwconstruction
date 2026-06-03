import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { maintenanceProjects } from "@/data/projects";
import { ProjectDetail } from "@/components/sections/ProjectDetail";

export function generateStaticParams() {
  return maintenanceProjects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const project = maintenanceProjects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: project.title,
    description: [project.size, project.location, project.description]
      .filter(Boolean)
      .join(" · "),
  };
}

export default function MaintenanceDetailPage({ params }: { params: { id: string } }) {
  const project = maintenanceProjects.find((p) => p.id === params.id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
