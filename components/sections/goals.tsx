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
            className="drop-shadow-2xl"
          />
          <div className="max-sm:h-[2.4rem] max-sm:w-10 xl:h-[2.9rem] xl:w-12 lg:h-[2.45rem] w-10 bg-silverTree-400 rounded-3xl absolute right-0 top-0 sm:h-[2.9rem] sm:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 max-sm:h-5 max-sm:w-5" />
          </div>
        </div>
        <div className="relative lg:max-w-[23rem] xl:max-w-[25.5rem]">
          <Image
            src={"/goals-card.svg"}
            width={412}
            height={438}
            alt="Goals card"
            className="drop-shadow-2xl"
          />
          <div className="max-sm:h-[2.4rem] max-sm:w-10 xl:h-[2.9rem] xl:w-12 lg:h-[2.45rem] w-10 bg-silverTree-400 rounded-3xl absolute right-0 top-0 sm:h-[2.9rem] sm:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 max-sm:h-5 max-sm:w-5" />
          </div>
        </div>
        <div className="relative lg:max-w-[23rem] xl:max-w-[25.5rem]">
          <Image
            src={"/goals-card.svg"}
            width={412}
            height={438}
            alt="Goals card"
            className="drop-shadow-2xl"
          />
          <div className="max-sm:h-[2.4rem] max-sm:w-10 xl:h-[2.9rem] xl:w-12 lg:h-[2.45rem] w-10 bg-silverTree-400 rounded-3xl absolute right-0 top-0 sm:h-[2.9rem] sm:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 max-sm:h-5 max-sm:w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};
