import Link from "next/link";

const technologies = [
  "Python",
  "SQL",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Next.js",
];

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center py-16 md:py-24">
      <div className="w-full">
        <p className="mb-5 text-sm font-medium text-muted-foreground">
          Computer Science · Data Science
        </p>

        <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Building software, data systems, and useful things.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:mt-8 md:text-xl">
          I&apos;m Parth Singh, a Computer Science student focused on software
          engineering, data science, and backend systems.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#work"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            View my work
          </Link>

          <Link
            href="https://github.com/parthsingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border px-6 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            GitHub ↗
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 md:mt-16">
          {technologies.map((technology) => (
            <span key={technology} className="text-sm text-muted-foreground">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
