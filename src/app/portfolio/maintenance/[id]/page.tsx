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
  const raw = [project.location, project.size, project.description.replace(/\n+/g, " ")].filter(Boolean).join(" · ");
  const description = raw.length > 160 ? raw.slice(0, 157) + "..." : raw;
  return {
    title: project.title,
    description,
    openGraph: { images: [{ url: project.thumbnail, alt: project.title }] },
  };
}

export default function MaintenanceDetailPage({ params }: { params: { id: string } }) {
  const project = maintenanceProjects.find((p) => p.id === params.id);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
