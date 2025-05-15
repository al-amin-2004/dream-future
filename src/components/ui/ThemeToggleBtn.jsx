'use client'

import { DarkIcon, SunIcon } from "../icons/icons";
import useTheme from "@/app/lib/theme";

export const ThemeToggleBtn = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <button title="Light Mode" onClick={toggleTheme} className="p-1.5 rounded-full cursor-pointer transition-colors hover:bg-black/15 dark:hover:bg-white/15">
      {theme === "dark" ? <SunIcon /> : <DarkIcon />}
    </button>
  );
};
