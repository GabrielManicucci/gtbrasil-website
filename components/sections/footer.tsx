import Image from "next/image";
import { PrimaryButton } from "../primary-button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <section className="section">
      <div className="pt-14 pb-10 px-10 lg:px-24 bg-shark-950 rounded-t-3xl shadow-lg drop-shadow-md">
        <div className="flex justify-between gap-7 flex-wrap">
          <Image
            src={"/logoMarca.svg"}
            width={316}
            height={64}
            alt="logo marca GTBRASIL"
            className="w-64"
          />
          <PrimaryButton>Fale Conosco</PrimaryButton>
        </div>
        <div className="max-w-full h-[0.10rem] bg-shark-400 my-14"></div>
        <div className="flex justify-between flex-col yl:flex-row gap-10">
          <ul className="flex flex-col dy:items-center gap-10 dy:flex-row justify-between">
            <li className="flex gap-5 items-center flex-wrap">
              <div className="bg-shark-100 rounded-xl shadow-lg drop-shadow-md h-12 w-12">
                <Mail className="text-catarineBlue-800 h-6 w-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
              <p className="body-dark">info@gmail.com</p>
            </li>
            <li className="flex gap-5 items-center flex-wrap">
              <div className="bg-shark-100 rounded-xl shadow-lg drop-shadow-md h-12 w-12">
                <Phone className="text-catarineBlue-800 h-6 w-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
              <p className="body-dark">info@gmail.com</p>
            </li>
            <li className="flex gap-5 items-center flex-wrap">
              <div className="bg-shark-100 rounded-xl shadow-lg drop-shadow-md h-12 w-12">
                <MapPin className="text-catarineBlue-800 h-6 w-6 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
              </div>
              <p className="body-dark">info@gmail.com</p>
            </li>
          </ul>
          <div className="flex gap-6">
            <Image
              className="h-9 w-9"
              width={24}
              height={24}
              alt="icon"
              src={"/whatsapp.svg"}
            />{" "}
            <Image
              className="h-9 w-9"
              width={24}
              height={24}
              alt="icon"
              src={"/instagram.svg"}
            />{" "}
            <Image
              className="h-9 w-9"
              width={24}
              height={24}
              alt="icon"
              src={"/linkedin.svg"}
            />{" "}
            <Image
              className="h-9 w-9"
              width={24}
              height={24}
              alt="icon"
              src={"/facebook-f.svg"}
            />{" "}
          </div>
        </div>
        <div className="text-sm text-shark-300 gap-6 font-semibold flex-wrap flex justify-between mt-10">
          <Link href={"http://instagram.com/gabriel_manicucci"}>
            Desenvolvido por Gabriel Manicucci
          </Link>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </section>
  );
};
