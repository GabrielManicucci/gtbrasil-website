"use client";
import { Calculator, Handshake, MoveDown, NotebookPen } from "lucide-react";
import Image from "next/image";
import { JSX, useEffect, useState } from "react";

type goalType = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const goals: goalType[] = [
  {
    title: "Serviços contábeis",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing a at enim enimaliquet diam.. Sapien diam ultricies ac semper ut faucibusultrices quis.. Arcu vel donec quisque nunc sit vitae estblandit.. Massa quam arcu ut leo nunc tellus gravida..",
    icon: <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-gray-900" />,
  },
  {
    title: "Consultoria",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing a at enim enimaliquet diam.. Sapien diam ultricies ac semper ut faucibusultrices quis.. Arcu vel donec quisque nunc sit vitae estblandit.. Massa quam arcu ut leo nunc tellus gravida..",
    icon: <Handshake className="h-6 w-6 lg:h-7 lg:w-7 text-gray-900" />,
  },
  {
    title: "Planejamento",
    description:
      "Lorem ipsum dolor sit amet consectetur. Adipiscing a at enim enimaliquet diam.. Sapien diam ultricies ac semper ut faucibusultrices quis.. Arcu vel donec quisque nunc sit vitae estblandit.. Massa quam arcu ut leo nunc tellus gravida..",
    icon: <NotebookPen className="h-6 w-6 lg:h-7 lg:w-7 text-gray-900" />,
  },
];

export const Goals = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const setScreenWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);
  }, [width]);

  const setCardSvg = (width: number) => {
    if (width >= 375 && width < 488) {
      return (
        <Image
          src={"objectives-card-448-375.svg"}
          width={462}
          height={323}
          alt="Goals card"
          className="drop-shadow-goalcard"
        />
      );
    }

    if (width >= 448 && width < 552) {
      return (
        <Image
          src={"objectives-card-552-448.svg"}
          width={488}
          height={238}
          alt="Goals card"
          className="drop-shadow-goalcard"
        />
      );
    }

    if (width >= 552 && width < 755) {
      return (
        <Image
          src={"objectives-card-755-552.svg"}
          width={691}
          height={214}
          alt="Goals card"
          className="drop-shadow-goalcard"
        />
      );
    }

    if (width >= 755 && width < 924) {
      return (
        <Image
          src={"objectives-card-924-755.svg"}
          width={875}
          height={229}
          alt="Goals card"
          className="drop-shadow-goalcard"
        />
      );
    }

    if (width >= 924 && width < 1040) {
      return (
        <Image
          src={"objectives-card-1040-924.svg"}
          width={314}
          height={280}
          alt="Goals card"
          className="drop-shadow-goalcard"
        />
      );
    }

    return (
      <Image
        src={"objectives-card.svg"}
        width={421}
        height={296}
        alt="Goals card"
        className="drop-shadow-goalcard"
      />
    );
  };

  return (
    <section className="w-full pt-40">
      <div className="justify-between items-center wrapper gap-12 yl:gap-6 xl:gap-8">
        {goals.map(({ description, title, icon }) => (
          <div key={title} className="relative">
            {setCardSvg(width)}
            <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 dy:p-6 p-5 yl:p-5 xl:p-7">
              <div className="flex items-center gap-3">
                {" "}
                {icon}
                <div className="flex items-center">
                  <p className="text-base yl:text-base dy:text-lg xl:text-lg font-semibold text-gray-800">
                    {title}
                  </p>
                </div>
              </div>
              <p className="text-sm dy:text-base xl:text-base font-medium text-gray-600 flex-wrap text-wrap yl:text-sm">
                {description}{" "}
              </p>
            </div>
            <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.5rem] xl:w-[3.5rem] md:h-10 md:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12 lg:h-12 lg:w-12 dy:w-11 dy:h-11">
              <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
