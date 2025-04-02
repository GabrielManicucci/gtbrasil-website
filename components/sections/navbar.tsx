"use client";
import Link from "next/link";
import { PrimaryButton } from "../primary-button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";

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
            href={"/#serviços"}
            className={`${pathname === "/serviços" && "text-catarineBlue-400"}`}
          >
            Serviços
          </Link>
        </div>
        <PrimaryButton className="max-lg:hidden">Fale Conosco</PrimaryButton>
        <Sheet>
          <SheetTrigger className="lg:hidden" aria-label="Expandir menu mobile">
            <AlignRight size={64} className="text-catarineBlue-400" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center gap-10 bg-blue p-0 pt-20 bg-shark-200">
            <div className="absolute left-8 top-7">
              <Image
                src={"/logoGreen.svg"}
                width={44}
                height={44}
                className=""
                alt="Logo GTBRASIL"
              />
            </div>
            <SheetHeader className="m-0 mt-10 w-full space-y-0">
              <SheetTitle className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Link
                    href={"/"}
                    className={`h-full w-[85%] mx-auto rounded-2xl py-5 text-center font-semibold transition-all hover:bg-silverTree-600 hover:text-shark-100 border-2 text-silverTree-700 border-silverTree-600 ${
                      pathname === "/" ? "bg-transparent" : ""
                    }`}
                  >
                    Início
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href={"/#serviços"}
                    className={`h-full w-[85%] mx-auto rounded-2xl py-5 text-center font-semibold transition-all hover:bg-silverTree-600 hover:text-shark-100 border-2 text-silverTree-700 border-silverTree-600 ${
                      pathname === "/" ? "bg-transparent" : ""
                    }`}
                  >
                    Serviços
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <button
                    aria-label="Fale conosco no menu mobile"
                    onClick={() => {
                      window.location.href = "https://wa.me/";
                    }}
                    className="h-full w-[85%] mx-auto rounded-2xl py-5 text-center font-semibold transition-all hover:bg-silverTree-500 border-2 text-silverTree-100 bg-silverTree-600 border-silverTree-600 hover:border-silverTree-500"
                  >
                    Fale Conosco
                  </button>
                </SheetClose>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
