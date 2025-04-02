import { ReactElement } from "react";
import { User } from "lucide-react";

type avaliationsList = {
  icon: ReactElement;
  title: string;
  description: string;
};

const avaliationsList: avaliationsList[] = [
  {
    icon: (
      <User className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2 text-silverTree-700" />
    ),
    title: "Sandro CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus justo, eu pharetra.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: (
      <User className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2 text-silverTree-700" />
    ),
    title: "Mateus CEO",
    description:
      "Nosso compromisso com a agilidade nos permite atender às demandas dos nossos clientes de forma rápida e eficiente, sem comprometer a qualidade dos serviços prestados.",
  },
  {
    icon: (
      <User className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2 text-silverTree-700" />
    ),
    title: "João CEO",
    description:
      "Utilizamos tecnologia de ponta para otimizar nossos processos contábeis, garantindo maior eficiência e segurança na gestão das informações financeiras dos nossos clientes.",
  },
];

export const Avaliations = () => {
  return (
    <section className="section pb-28">
      <div className="rounded-3xl p-8 mx-auto">
        <div className="max-w-3xl mx-auto">
          <p className="label text-center">Customers</p>
          <h2 className="headline text-center mt-1">
            O que nossos clientes dizem
          </h2>
        </div>
        <div
          className="flex max-md:flex-col md:flex-row gap-12 md:gap-12 xl:gap-20 mt-16
         justify-between"
        >
          {avaliationsList.map(({ description, title, icon }) => (
            <div key={title} className="flex-1">
              <div className="bg-shark-100 h-[4rem] w-[4rem] md:h-[4.5rem] md:w-[4.5rem] rounded-xl relative shadow-xl drop-shadow-sm">
                {icon}
              </div>
              <p className="title mt-6">{title}</p>
              <p className="body mt-3">{description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
