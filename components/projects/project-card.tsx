import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:bg-muted/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">{project.category}</p>

          <h3 className="mt-2 text-2xl font-semibold tracking-tight">
            {project.title}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center gap-4 pt-8">
        {project.github_frontend && (
          <Link
            href={project.github_frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            Frontend
          </Link>
        )}

        {project.github_backend && (
          <Link
            href={project.github_backend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            Backend
          </Link>
        )}

        {project.live && (
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
          >
            Live
            <ArrowUpRight className="size-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
