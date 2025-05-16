'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HistoryIcon, LeaderboardIcon, ProfileIcon, SettingIcon } from "@/components/icons/icons";


export const Sidebar = ({ slug }) => {
    const [active, setactive] = useState(0)


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
        }
    ]
    return (
        <aside className="w-[25rem] h-full border-r border-dark-border">

            <div className="flex items-center justify-center h-[23%]">
                <Image src="/logos/dream-future-logo-white.png" alt="Sidebar Logo" width={500} height={500} className="w-[50%]" />
            </div>

            <ul className="px-5 text-text dark:text-dark-text text-lg">
                {navs.map(({ label, link, icon }, idx) => (
                    <Link href={`/profile/${slug}/${link}`} key={idx}>
                        <li className={`px-5 py-2 mb-1 flex items-center gap-3 font-medium rounded-md hover:bg-primary dark:hover:bg-gray-400/10 hover:ps-6 transition-all ${active === idx && 'bg-primary dark:bg-gray-400/10 ps-6'}`} onClick={() => setactive(idx)}>{icon} {label}</li></Link>
                ))}
            </ul>
        </aside>
    )
}