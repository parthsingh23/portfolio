import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Contact</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s build something useful.
          </h2>
        </div>

        <div>
          <p className="text-muted-foreground">
            I&apos;m interested in software engineering, backend systems,
            databases, data science, machine learning and practical projects.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <Link
              href="mailto:parthsingh1866@gmail.com"
              className="text-sm font-medium hover:opacity-70"
            >
              Mail ↗
            </Link>

            <Link
              href="https://github.com/parthsingh23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:opacity-70"
            >
              GitHub ↗
            </Link>

            <Link
              href="https://www.linkedin.com/in/parthsingh23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:opacity-70"
            >
              LinkedIn ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
