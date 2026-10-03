import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  );
}