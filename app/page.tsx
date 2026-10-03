import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />
      </main>
    </>
  );
}
