import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="mb-12">
        <p className="text-sm font-medium text-muted-foreground">
          Selected work
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          A selection of software, backend, and data projects I&apos;ve built
          while learning and experimenting with different technologies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
