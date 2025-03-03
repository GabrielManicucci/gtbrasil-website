import Image from "next/image";

export const BgLines = () => {
  return (
    <div className="absolute top-0 w-full overflow-hidden flex justify-center z-10">
      <Image
        width={1960}
        height={914}
        src={"/bg-lines.svg"}
        alt="background lines"
        className="max-w-[91.25rem] mx-auto my-0"
      />
    </div>
  );
};
