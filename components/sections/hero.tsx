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
    <section className="w-full pt-60 my-0">
      <div className="mx-auto my-0">
        <h1 className="font-semibold text-4xl xl:text-[2.8rem] text-silverTree-50">
          Prezamos pelo seu trabalho
        </h1>

        <div className="flex flex-col gap-4 text-sm xl:text-base font-medium text-gray-200 mt-10 mb-20 max-w-xl xl:max-w-2xl">
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
