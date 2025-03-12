import Link from "next/link";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const PrimaryButton = ({ children, className }: PrimaryButtonProps) => {
  return (
    <button
      className={`bg-silverTree-400 font-semibold text-base md:text-lg yl:text-xl flex items-center justify-center px-8 py-4 rounded-2xl hover:cursor-pointer hover:brightness-75 transition-all max-h-16 ${
        className && className
      }`}
    >
      <Link href="/contact">{children}</Link>
    </button>
  );
};
