import Image from "next/image";
import { PrimaryButton } from "../primary-button";

export const AboutUs = () => {
  return (
    <section className="section pb-28">
      <div className="wrapper yl:gap-14 justify-around items-center">
        <div className="max-w-xl sm:min-w-96">
          <Image
            src={"/officeImage.png"}
            width={1200}
            height={1200}
            alt="Imagem do escritório"
            className="rounded-3xl w-full shadow-xl drop-shadow-md"
          />
        </div>
        <div className="pt-12 yl:py-20 max-w-2xl">
          <p className="label">Quem somos</p>
          <h2 className="sub-headline mt-2">Um pouco de nós</h2>
          <p className="body mb-7 mt-6">
            Há mais de 30 anos, a GTBrasil oferece serviços contábeis,
            consultoria e planejamento tributário para empresas de diversos
            segmentos. Com atendimento personalizado e foco na qualidade,
            ajudamos negócios a crescerem de forma sustentável. Nosso
            compromisso com inovação e tecnologia nos permite continuar
            entregando soluções eficientes para os desafios do mercado.
          </p>
          <PrimaryButton className="">Fale Conosco</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
