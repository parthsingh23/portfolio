export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 pt-4 pb-6 md:pt-4 md:pb-8"
    >
      <div className="grid gap-5 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="text-sm font-medium text-muted-foreground">About me</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Building with code, data and curiosity.
          </h2>
        </div>

        <div className="mt-1 space-y-3 text-muted-foreground">
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
            Currently, I&apos;m expanding my skills across full-stack development,
            backend engineering, PostgreSQL, machine learning and data science.
          </p>
        </div>
      </div>
    </section>
  );
}
