import { ReactElement } from "react";
import { PrimaryButton } from "../primary-button";
import { BookCheck, Clock9, Headset } from "lucide-react";

type DifferentialsList = {
  icon: ReactElement;
  title: string;
  description: string;
};

const differencialsList: DifferentialsList[] = [
  {
    icon: (
      <Clock9 className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2 text-silverTree-700" />
    ),
    title: "Há 30 anos no mercado",
    description:
      "Três décadas impulsionando empresas com soluções contábeis, gestão eficiente e inovação. Evoluímos para garantir segurança fiscal e crescimento sustentável.",
  },
  {
    icon: (
      <BookCheck className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2 text-silverTree-700" />
    ),
    title: "Conhecimento e prática",
    description:
      "Expertise aliada à prática para oferecer soluções estratégicas, otimizando a gestão contábil e garantindo decisões assertivas para o crescimento empresarial.",
  },
  {
    icon: (
      <Headset className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2 text-silverTree-700" />
    ),
    title: "Atendimento personalizado",
    description:
      "Suporte sob medida, alinhado às necessidades de cada cliente, garantindo soluções contábeis eficazes e uma gestão mais segura e eficiente.",
  },
];

export const Differentials = () => {
  return (
    <section className="section pb-28">
      <div className="bg-shark-950 rounded-3xl p-8 mx-auto lg:p-20 drop-shadow-lg shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="sub-headline-dark text-center">Nossos diferenciais</h2>
          <p className="mb-7 mt-5 yl:mt-8 yl:mb-9 body-dark text-center">
            Nossos diferenciais transformaram empresas, garantindo gestão
            eficiente e segurança fiscal. Com inovação e tecnologia, seguimos
            otimizando processos, oferecendo suporte estratégico e impulsionando
            negócios para um futuro sólido.
          </p>
          <div className="flex flex-col md:flex-row gap-5 yl:gap-7 justify-center">
            <button className="border-2 bg-transparent border-silverTree-400 font-semibold text-base md:text-lg yl:text-xl flex items-center justify-center px-8 py-4 rounded-2xl hover:cursor-pointer hover:brightness-75 transition-all max-h-16 text-silverTree-400">
              Saiba mais
            </button>
            <PrimaryButton>Entre em contato</PrimaryButton>
          </div>
        </div>
        <div
          className="flex max-md:flex-col md:flex-row gap-12 md:gap-10 mt-20
         justify-between"
        >
          {differencialsList.map(({ description, title, icon }) => (
            <div key={title} className="flex-1">
              <div className="bg-shark-100 h-[4rem] w-[4rem] md:h-[4.5rem] md:w-[4.5rem] rounded-xl relative">
                {icon}
              </div>
              <p className="title-dark mt-5">{title}</p>
              <p className="body-dark mt-3">{description} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
