import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/layout/footer";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <div id="top" />

      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Projects />
        <About />
        <Skills />
      </main>

      <Footer />
    </>
  );
}
