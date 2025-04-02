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
        <div className="pt-12 yl:py-20 max-w-xl">
          <p className="label">Quem somos</p>
          <h2 className="sub-headline mt-2">Um pouco de nós</h2>
          <p className="body mb-7 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            congue quis quisque massa diam nec in a fermentum. At commodo magna
            ipsum at eget. Placerat sollicitudin egestas fames odio suspendisse
            enim dignissim ultricies. Aenean purus vitae euismod ipsum netus
            odio semper tempus.
          </p>
          <PrimaryButton className="">Fale Conosco</PrimaryButton>
        </div>
      </div>
    </section>
  );
};
