type companyDifferentialsType = {
  description: string;
};

const companyDifferentials: companyDifferentialsType[] = [
  { description: "30 anos no mercado" },
  {
    description:
      "Conhecimento prático e técnico nas áreas de desenvolvimento de  sefotware, gestão e contabilidade",
  },
  { description: "Atendimento personalizado" },
];

import Image from "next/image";
import { PrimaryButton } from "../primary-button";

export const Hero = () => {
  return (
    <section className="section mt-12">
      <div className="wrapper yl:justify-between  max-yl:gap-16">
        <div className="">
          <h1 className="font-semibold text-4xl xl:text-[2.8rem] text-silverTree-50">
            Prezamos pelo seu{" "}
            <span className="text-catarineBlue-400">resultado</span>
          </h1>

          <div className="flex flex-col gap-4 md:gap-5 text-sm xl:text-base font-medium text-gray-200 mb-16  max-w-xl mt-10 md:mt-12 md:mb-20 xl:max-w-2xl">
            {companyDifferentials.map((diferential, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={"/checkIcon.svg"}
                  width={28}
                  height={28}
                  alt="CheckIcon"
                />{" "}
                <p>{diferential.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-14 lg:gap-20">
            <PrimaryButton>Junte-se a nós</PrimaryButton>
            <Image
              src={"Linked-Path-Group.svg"}
              width={84}
              height={84}
              alt="Logo group"
              className="animate-spin-slow"
            />
          </div>
        </div>
        <div className="flex yl:flex-row flex-col justify-between items-start yl:items-end gap-4 yl:gap-7 h-auto font-semibold text-center text-silverTree-50 xl:gap-9">
          <div className="px-4 w-[50%] yl:w-36 xl:w-40 yl:h-44 yl:bg-[#B2B8B2] bg-[hsl(120,10%,79%)] yl:bg-opacity-65 bg-opacity-70  rounded-2xl flex flex-col justify-between py-8 backdrop-blur-ps max-yl:gap-2 drop-shadow-md">
            <p className="text-3xl">+20</p>
            <p className="font-medium">Especialistas disponíveis</p>
          </div>
          <div className="px-4 w-[75%] yl:w-36 xl:w-40 yl:h-64 yl:bg-[#B2B8B2] bg-[hsl(120,9%,76%)] yl:bg-opacity-65 bg-opacity-70  rounded-2xl flex flex-col justify-between py-8 backdrop-blur-ps max-yl:gap-2 drop-shadow-md">
            <p className="text-3xl">+50</p>
            <p className="font-medium">Clientes</p>
          </div>
          <div className="px-4 w-full yl:w-36 xl:w-40 yl:h-full yl:bg-[#B2B8B2] bg-[hsl(120,7%,70%)] yl:bg-opacity-65 bg-opacity-70  rounded-2xl flex flex-col justify-between py-8 backdrop-blur-ps max-yl:gap-2 drop-shadow-lg">
            <p className="text-3xl">+10M</p>
            <p className="font-medium">Lucro gerado</p>
          </div>
        </div>
      </div>
    </section>
  );
};
