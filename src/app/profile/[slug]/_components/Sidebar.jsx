"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  HistoryIcon,
  LeaderboardIcon,
  LeftArrowIcon,
  ProfileIcon,
  SettingIcon,
} from "@/components/icons/icons";

export const Sidebar = ({ slug }) => {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  

  const navs = [
    {
      label: "Profile",
      link: "/",
      icon: <ProfileIcon />,
    },
    {
      label: "Leaderboard",
      link: "leaderboard",
      icon: <LeaderboardIcon />,
    },
    {
      label: "History",
      link: "history",
      icon: <HistoryIcon />,
    },
    {
      label: "Setting",
      link: "setting",
      icon: <SettingIcon />,
    },
  ];
  return (
    <aside
      className={`md:w-[25rem] w-[80%] h-full border-r border-dark-border fixed md:static z-50 bg-current transition-all ${
        open ? "left-0" : "-left-full"
      }`}
    >
      <LeftArrowIcon className={`absolute md:hidden top-0 translate-2/5 transition-all ${open ? "right-0 size-9 rotate-0" : "-right-[5.7rem] size-8 rotate-180"}`} onClick={() => setOpen(!open)}/>

      <div className="flex items-center justify-center h-[23%]">
        <Image
          src="/logos/dream-future-logo-white.png"
          alt="Sidebar Logo"
          width={500}
          height={500}
          className="w-[50%]"
        />
      </div>

      <ul className="px-5 text-text dark:text-dark-text text-lg">
        {navs.map(({ label, link, icon }, idx) => (
          <Link href={`/profile/${slug}/${link}`} key={idx}>
            <li
              className={`px-5 py-2 mb-1 flex items-center gap-3 font-medium rounded-md hover:bg-primary dark:hover:bg-gray-400/10 hover:ps-6 transition-all ${
                active === idx && "bg-primary dark:bg-gray-400/10 ps-6"
              }`}
              onClick={() => setActive(idx)}
            >
              {icon} {label}
            </li>
          </Link>
        ))}
      </ul>
    </aside>
  );
};
