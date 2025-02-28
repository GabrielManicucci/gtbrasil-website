"use client";
import Link from "next/link";
import { PrimaryButton } from "../primary-button";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="absolute z-50 w-full py-3 px-8">
      <div className="mx-auto flex justify-between items-center max-w-[85.375rem]">
        <div>
          <Image
            src={"/logoGreen.svg"}
            width={52}
            height={52}
            className="fill-silverTree-400 text-silverTree-400"
            alt="Logo GTBRASIL"
          />
        </div>
        <div className="flex items-center justify-center gap-6 px-8 py-4 text-base font-medium text-silverTree-50 bg-shark-400/60 backdrop-blur-lg rounded-2xl">
          <Link
            href={"/"}
            className={`${pathname === "/" && "text-catarineBlue-400"}`}
          >
            Início
          </Link>
          <Link
            href={"/services"}
            className={`${pathname === "/services" && "text-catarineBlue-400"}`}
          >
            Serviços
          </Link>
        </div>
        <PrimaryButton>Fale Conosco</PrimaryButton>
      </div>
    </nav>
  );
};
