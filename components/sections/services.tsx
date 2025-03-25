import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Building2,
  Briefcase,
  Handshake,
  Truck,
  FileText,
  Factory,
  Server,
} from "lucide-react";
import { ReactElement } from "react";

export type ServicesListType = {
  name: string;
  descripion: string;
  icon: ReactElement;
};

export const servicesList: ServicesListType[] = [
  {
    name: "Consultoria empresarial",
    descripion:
      "Oferecemos consultoria especializada para empresas, auxiliando na gestão estratégica, otimização de processos e tomada de decisões eficientes. Nossa equipe altamente qualificada analisa e propõe soluções personalizadas para impulsionar o crescimento do seu negócio.",
    icon: (
      <Briefcase className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2" />
    ),
  },
  {
    name: "Prestadores de Serviços",
    descripion:
      "Atendemos prestadores de serviços com soluções contábeis que garantem conformidade fiscal, planejamento tributário e gestão financeira. Com suporte especializado, ajudamos a organizar suas finanças para maximizar resultados e reduzir riscos.",
    icon: (
      <Handshake className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-[55%]" />
    ),
  },
  {
    name: "Construtoras",
    descripion:
      "A contabilidade para construtoras exige atenção a normas fiscais específicas. Oferecemos suporte na apuração de impostos, controle de custos e planejamento financeiro, garantindo que sua empresa esteja sempre em conformidade e competitiva no mercado.",
    icon: (
      <Building2 className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2" />
    ),
  },
  {
    name: "Transportadoras",
    descripion:
      "Trabalhamos com transportadoras, garantindo a correta escrituração fiscal, controle de receitas e despesas e atendimento às exigências do setor. Nossa contabilidade especializada ajuda a otimizar custos e melhorar a rentabilidade do seu negócio",
    icon: (
      <Truck className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2" />
    ),
  },
  {
    name: "Imposto de renda",
    descripion:
      "Auxiliamos pessoas físicas e jurídicas na declaração do Imposto de Renda, garantindo precisão, conformidade com a legislação e identificação de oportunidades para redução de carga tributária. Evite problemas com o fisco e maximize seus benefícios.",
    icon: (
      <FileText className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2" />
    ),
  },
  {
    name: " Contabilidade Industrial",
    descripion:
      "A contabilidade industrial envolve custos de produção, tributação específica e controle de ativos. Nossa equipe oferece suporte completo para garantir que sua empresa cumpra todas as obrigações e alcance maior eficiência operacional.",
    icon: (
      <Factory className="w-7 md:h-8 md:w-8 h-7 mx-auto relative -translate-y-1/2 top-1/2" />
    ),
  },
  {
    name: "Soluções SPED",
    descripion:
      "O SPED Fiscal e Contábil exige conhecimento técnico e precisão. Prestamos suporte completo na escrituração digital, garantindo conformidade com o fisco e otimização dos processos contábeis e tributários da sua empresa.",
    icon: (
      <Server className="w-8 h-8 mx-auto relative -translate-y-1/2 top-1/2" />
    ),
  },
];

export const Services = () => {
  return (
    <section className="section pb-28">
      <div className="mb-4">
        <p className="label">Customers</p>
        <h2 className="headline">Clientes atendidos</h2>
      </div>
      <p className="body max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis mi
        arcu accumsan cursus augue. Viverra egestas aliquet sollicitudin
        accumsan velit vel.
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mt-10"
      >
        <div className="w-full flex justify-end gap-2 relative top-3 lg:top-4">
          <CarouselPrevious
            variant={"carousel"}
            className="bg-silverTree-500"
          />
          <CarouselNext variant={"carousel"} className="bg-silverTree-500" />
        </div>

        <CarouselContent>
          {servicesList.map((service, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="lg:p-2">
                <Card className="">
                  <CardContent className="aspect-square p-8 lg:p-10 bg-shark-500/90 flex flex-col justify-between rounded-3xl">
                    <div className="flex flex-col gap-8 md:gap-9 mb-7">
                      <div className="p-3 bg-silverTree-50 h-14 md:w-16 w-14 md:h-16 rounded-xl">
                        {service.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-silverTree-50">
                        {service.name}
                      </h4>
                    </div>
                    <p className="text-shark-100 text-base font-medium lg:text-lg">
                      {service.descripion}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};
