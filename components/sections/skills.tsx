import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 pt-4 pb-6 md:pt-4 md:pb-8"
    >
      <div>
        <p className="text-sm font-medium text-muted-foreground">Skills</p>
      </div>

      <div className="mt-3 grid gap-10 md:grid-cols-2">
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
    </section>
  );
}
