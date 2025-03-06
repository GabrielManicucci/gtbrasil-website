import { MoveDown } from "lucide-react";
import Image from "next/image";

export const Goals = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center py-48  flex-col lg:flex-row gap-8">
        <div className="relative lg:max-w-[23rem] xl:max-w-[25.5rem]">
          <Image
            src={"/goals-card.svg"}
            width={412}
            height={438}
            alt="Goals card"
            className="drop-shadow-goalcard"
          />
          <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.2rem] xl:w-[3.2rem] lg:h-10 lg:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
          </div>
        </div>
        <div className="relative lg:max-w-[23rem] xl:max-w-[25.5rem]">
          <Image
            src={"/goals-card.svg"}
            width={412}
            height={438}
            alt="Goals card"
            className="drop-shadow-goalcard"
          />
          <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.2rem] xl:w-[3.2rem] lg:h-10 lg:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
          </div>
        </div>{" "}
        <div className="relative lg:max-w-[23rem] xl:max-w-[25.5rem]">
          <Image
            src={"/goals-card.svg"}
            width={412}
            height={438}
            alt="Goals card"
            className="drop-shadow-goalcard"
          />
          <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.2rem] xl:w-[3.2rem] lg:h-10 lg:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
