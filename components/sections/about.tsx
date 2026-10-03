import { skillGroups } from "@/data/skills";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-border py-16 md:py-20"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-medium text-muted-foreground">About me</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Building with code, data, and curiosity.
          </h2>
        </div>

        <div className="space-y-6 text-muted-foreground">
          <p>
            I&apos;m a Computer Science student focused on software engineering,
            backend systems, databases, machine learning and data science.
          </p>

          <p>
            I enjoy building practical applications and understanding how the
            systems behind them work, from database design and APIs to data
            analysis and interactive interfaces.
          </p>

          <p>
            Currently, I&apos;m expanding my skills across full-stack
            development, backend engineering, PostgreSQL, machine learning and
            data science while building projects that put those skills into
            practice.
          </p>
        </div>
      </div>
      <div className="mt-16 border-t border-border pt-12 md:mt-20">
        <p className="text-sm font-medium text-muted-foreground">Skills</p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-medium">{group.title}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-muted px-2.5 py-1.5 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
