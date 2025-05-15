"use client";

import Link from "next/link";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { ThemeToggleBtn } from "../ui/ThemeToggleBtn";
import { BarsIcon, RightArrowIcon, TimesIcon } from "../icons/icons";
import { useState } from "react";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const Navlist = [
    { link: "leaderboard", label: "Leaderboard" },
    { link: "about", label: "About Us" },
    { link: "contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 mt-5 md:mt-10 font-heading z-50">
      <div className="relative w-11/12 md:w-10/12 mx-auto p-0.5 px-2 md:p-3 rounded-md backdrop-blur-md bg-black/15 dark:bg-slate-300/10">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-28">
            <ul
              className={`h-0 md:h-auto p-0 absolute w-full md:w-auto top-full left-0 md:border-none border-white/70 rounded-b-md md:static bg-white/20 md:bg-transparent md:flex items-center gap-x-5 overflow-hidden transition-all duration-300 ${
                navOpen && "h-[6.2rem] p-1 border-t"
              }`}
            >
              {Navlist.map((list) => (
                <li key={list.link} onClick={() => setNavOpen(false)}>
                  <Link
                    href={`/${list.link}`}
                    className="block px-2 py-1 hover:bg-amber-400/60 dark:hover:bg-amber-200/20 rounded-sm text-[15px] dark:text-dark-text transition-all duration-300 cursor-pointer hover:text-dark-text dark:hover:text-primary"
                  >
                    {list.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <ThemeToggleBtn />
              <div
                className="md:hidden fill-primary stroke-primary hover:bg-white/10 rounded-full p-1.5 cursor-pointer"
                onClick={() => setNavOpen(!navOpen)}
              >
                {navOpen ? <TimesIcon /> : <BarsIcon />}
              </div>
              <Button className="hidden md:flex items-center gap-0.5">
                My Profile <RightArrowIcon />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute top-full left-0 w-full"></div>
      </div>
    </header>
  );
};
