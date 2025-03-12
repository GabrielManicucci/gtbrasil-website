import { Goals } from "@/components/sections/goals";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="w-full z-10 px-6 lg:px-8 absolute top-0 left-0 bg-none">
      <div className="max-w-[85.375rem] mx-auto">
        <Hero />
        <Goals />
      </div>
    </main>
  );
}
