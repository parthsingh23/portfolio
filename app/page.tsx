import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-6">
        <section>
          <p className="mb-4 text-sm font-medium text-muted-foreground">
            Computer Science · Data Science
          </p>

          <h1 className="max-w-3xl font-heading text-5xl font-semibold tracking-tight md:text-7xl">
            Building software, data systems, and useful things.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            I&apos;m Parth Singh, a Computer Science student focused on
            software engineering, data science, and backend systems.
          </p>
        </section>
      </main>
    </>
  );
}