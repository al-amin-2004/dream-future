
export const CardTransparent = ({icon, head, desc, bgdeep, onClick}) => {
  return (
    <div className={`max-w-[25rem] p-5 md:p-10 rounded-2xl flex flex-col items-start gap-2 md:gap-4 border border-black dark:border-white cursor-pointer hover:rotate-2 hover:scale-105 transition-all duration-300 ${bgdeep ? 'bg-black/25 dark:bg-white/15':'bg-black/10 dark:bg-white/5'}`} onClick={onClick}>
        <span className="p-2 md:p-2.5 rounded-xl bg-primary">
            {icon}
        </span>
        <h4 className="text-2xl md:text-3xl font-bold font-heading text-text dark:text-dark-text">{head}</h4>
        <p className="text-sm md:text-lg font-medium leading-4 md:leading-6 font-body text-text-secondary dark:text-dark-text-secondary">{desc}</p>
    </div>
  )
}
