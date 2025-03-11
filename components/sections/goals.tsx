import { Calculator, MoveDown } from "lucide-react";
import Image from "next/image";

export const Goals = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center py-40  flex-col md:flex-row  lg:gap-6 xl:gap-8">
        <div className="relative">
          <Image
            src={"/objectives-card.svg"}
            width={421}
            height={296}
            alt="Goals card"
            className="drop-shadow-xl "
          />
          <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 p-5 xl:p-7">
            <div className="flex items-center gap-3">
              {" "}
              <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-gray-900" />{" "}
              <p className="text-base xl:text-lg font-semibold text-gray-800">
                Serviços Contábeis
              </p>
            </div>
            <p className="text-sm xl:text-base font-medium text-gray-600 flex-wrap text-wrap">
              Lorem ipsum dolor sit amet consectetur. Adipiscing a at enim enim
              aliquet diam.. Sapien diam ultricies ac semper ut faucibus
              ultrices quis.. Arcu vel donec quisque nunc sit vitae est
              blandit.. Massa quam arcu ut leo nunc tellus gravida..{" "}
            </p>
          </div>
          <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.5rem] xl:w-[3.5rem] md:h-10 md:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12 lg:h-12 lg:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/objectives-card.svg"}
            width={421}
            height={296}
            alt="Goals card"
            className="drop-shadow-xl "
          />
          <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 p-5 xl:p-7">
            <div className="flex items-center gap-3">
              {" "}
              <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-gray-900" />{" "}
              <p className="text-base xl:text-lg font-semibold text-gray-800">
                Serviços Contábeis
              </p>
            </div>
            <p className="text-sm xl:text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Adipiscing a at enim enim
              aliquet diam.. Sapien diam ultricies ac semper ut faucibus
              ultrices quis.. Arcu vel donec quisque nunc sit vitae est
              blandit.. Massa quam arcu ut leo nunc tellus gravida..{" "}
            </p>
          </div>
          <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.5rem] xl:w-[3.5rem] md:h-10 md:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12 lg:h-12 lg:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
          </div>
        </div>
        <div className="relative">
          <Image
            src={"/objectives-card.svg"}
            width={421}
            height={296}
            alt="Goals card"
            className="drop-shadow-xl"
          />
          <div className="flex flex-col justify-between w-full h-full absolute top-0 left-0 p-5 xl:p-7">
            <div className="flex items-center gap-3">
              {" "}
              <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-gray-900" />{" "}
              <p className="text-base xl:text-lg font-semibold text-gray-800">
                Serviços Contábeis
              </p>
            </div>
            <p className="text-sm xl:text-base font-medium text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Adipiscing a at enim enim
              aliquet diam.. Sapien diam ultricies ac semper ut faucibus
              ultrices quis.. Arcu vel donec quisque nunc sit vitae est
              blandit.. Massa quam arcu ut leo nunc tellus gravida..{" "}
            </p>
          </div>
          <div className="max-sm:h-11 max-sm:w-11 xl:h-[3.5rem] xl:w-[3.5rem] md:h-10 md:w-10 bg-silverTree-400 rounded-xl xl:rounded-2xl absolute right-0 top-0 sm:h-12 sm:w-12 lg:h-12 lg:w-12">
            <MoveDown className="fill-silverTree-950 relative left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:w-5 lg:h-5 xl:h-6 xl:w-6 h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};
