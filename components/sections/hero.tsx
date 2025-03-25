import Image from "next/image";
import { PrimaryButton } from "../primary-button";

export const Hero = () => {
  return (
    <section className="section mt-5 lg:mt-20">
      <div className="wrapper max-yl:gap-16">
        <div className="flex w-full flex-col items-center">
          <h1 className="font-semibold text-4xl lg:text-5xl text-center xl:text-[3.2rem] text-silverTree-50">
            Bem vindo à{" "}
            <span className="text-catarineBlue-400 inline-block">
              {" "}
              <Image
                src={"/logoGreen.svg"}
                width={43}
                height={43}
                className="mb-2 mr-1 h-8 w-8 lg:w-11 lg:h-11 text-catarineBlue-400 inline-block"
                alt="Logo GTBRASIL"
              />
              BRASIL{" "}
            </span>
            - aqui prezamos pelo seu <span className="">resultado</span>
          </h1>

          <p className="text-shark-200 font-medium text-lg lg:text-xl text-center max-w-5xl mt-11">
            Soluções contábeis inteligentes para o crescimento do seu negócio.
            Simplificamos a gestão fiscal, tributária e financeira com expertise
            e tecnologia, garantindo segurança e conformidade para sua empresa
            prosperar.
          </p>

          <div className="text-shark-200 flex gap-5 items-center mt-12">
            <Image
              src={"/checkIcon.svg"}
              width={32}
              height={32}
              alt="CheckIcon"
            />{" "}
            <p>
              {" "}
              Conhecimento prático e técnico nas áreas de desenvolvimento de
              sefotware, gestão e contabilidade
            </p>
          </div>

          <div className="flex gap-8 lg:gap-10 text-sm flex-col yl:flex-row yl:w-auto w-full xl:text-base font-medium text-gray-200 mb-11 mt-8 lg:mt-9 md:mb-16">
            <div className="flex items-center gap-4 ">
              <Image
                src={"/checkIcon.svg"}
                width={32}
                height={32}
                alt="CheckIcon"
              />{" "}
              <p>30 anos no mercado</p>
            </div>
            <div className="flex items-center gap-4 ">
              <Image
                src={"/checkIcon.svg"}
                width={32}
                height={32}
                alt="CheckIcon"
              />{" "}
              <p>Atendimento personalizado</p>
            </div>
          </div>

          <div className="flex items-center w-full gap-14 lg:gap-16 yl:w-auto">
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
        {/* <div className="flex yl:flex-row flex-col justify-between items-start yl:items-end gap-4 yl:gap-7 h-auto font-semibold text-center text-silverTree-50 xl:gap-9">
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
        </div> */}
      </div>
    </section>
  );
};
