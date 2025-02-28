import Link from "next/link";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

export const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="bg-silverTree-400 font-semibold text-xl flex items-center justify-center px-8 py-4 rounded-2xl hover:cursor-pointer hover:brightness-75 transition-all">
      <Link href="/contact">{children}</Link>
    </button>
  );
};
