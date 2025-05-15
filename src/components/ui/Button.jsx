import { twMerge } from "tailwind-merge"

export const Button = ({children, className}) => {
  return (
    <button className={twMerge("px-4 py-1.5 rounded-full text-sm font-semibold font-heading cursor-pointer text-text bg-primary hover:bg-[#E6AC00] hover:translate-x-0.5 transition-all duration-300 ease-in-out",className)}>{children}</button>
  )
}


export const Button2 = ({children, className}) => {
  return (
    <button className={twMerge("px-4 py-1.5 text-sm rounded-full font-semibold font-heading cursor-pointer border-2 md:border-[3px] hover:translate-x-0.5 transition-all duration-300 ease-in-out text-text dark:text-dark-text border-[#E6AC00]",className)}>{children}</button>
  )
}
