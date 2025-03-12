"use client";
import Link from "next/link";
import { PrimaryButton } from "../primary-button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AlignLeft } from "lucide-react";

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
        <div className="max-lg:hidden items-center justify-center gap-6 px-8 py-4 text-base font-medium text-silverTree-50 bg-shark-400/60 backdrop-blur-ps rounded-2xl lg:flex">
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
        <PrimaryButton className="max-lg:hidden">Fale Conosco</PrimaryButton>
        <AlignLeft className="text-catarineBlue-400 h-14 w-14 lg:hidden" />
      </div>
    </nav>
  );
};
