import Image from "next/image";

export const WppWidget = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 w-14 h-14 md:right-6 z-50 md:w-16 md:h-16 bg-silverTree-400 rounded-full animate-bounce-slow shadow-lg drop-shadow-sm hover:cursor-pointer transition-all">
      <a
        href="https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <Image
          className="md:h-10 md:w-10 h-8 w-8 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
          width={24}
          height={24}
          alt="icon"
          src={"/whatsapp.svg"}
        />{" "}
      </a>
    </div>
  );
};
