import { AboutUs } from "@/components/sections/aboutUs";
import { Avaliations } from "@/components/sections/avaliations";
import { Customers } from "@/components/sections/customers";
import { Differentials } from "@/components/sections/differentials";
import Faq from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Goals } from "@/components/sections/goals";
import { Hero } from "@/components/sections/hero";
import { Informations } from "@/components/sections/informations";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <main className="w-full z-10 px-6 lg:px-8 absolute top-0 left-0 bg-none overflow-hidden">
      <div className="max-w-[85.375rem] mx-auto">
        <Hero />
        <Goals />
        <Customers />
        <Services />
        <Differentials />
        <Avaliations />
        <AboutUs />
        <Informations />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
