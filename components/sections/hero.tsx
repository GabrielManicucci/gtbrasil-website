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
    <section className="w-full pt-48 md:pt-60 my-0">
      <div className="mx-auto my-0">
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

        <div>
          <PrimaryButton>Junte-se a nós</PrimaryButton>
        </div>
      </div>
      <div></div>
    </section>
  );
};
