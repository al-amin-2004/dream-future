import { twMerge } from "tailwind-merge";

export const BgEffect = ({className}) => {
  return (
    <div
      className={twMerge('size-[25rem] md:size-[75rem] rounded-full absolute top-0 inset-0 opacity-10 bg-radial from-[#FFBF00] via-transparent to-transparent -z-50', className)}
    ></div>
  );
};
