import { Goals } from "@/components/sections/goals";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="absolute top-0 w-full px-8 z-10 bg-none">
      <div className=" max-w-[85.375rem] mx-auto">
        <Hero />
        <Goals />
      </div>
    </main>
  );
}
