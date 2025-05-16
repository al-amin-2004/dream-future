import { SunIcon } from "@/components/icons/icons";
import Image from "next/image";
import Link from "next/link";


const Sidebar = async ({ params }) => {
    const { uid } = await params;
    const navs = [
        {
            label: "Profile",
            link: "/profile",
            icon: <SunIcon />,
        },
        {
            label: "Leaderboard",
            link: "/urhfeu",
            icon: <SunIcon />,
        },
        {
            label: "History",
            link: "/profile",
            icon: <SunIcon />,
        },
        {
            label: "Setting",
            link: "/profile",
            icon: <SunIcon />,
        }
    ]
    return (
        <sidebar className="w-[25rem] h-full border-r border-dark-border">

            <div className="flex items-center justify-center h-[23%]">
                <Image src="/logos/dream-future-logo-white.png" alt="Sidebar Logo" width={500} height={500} className="w-[50%]" />
            </div>

            <ul className="px-5 text-dark-text text-lg">
                {navs.map(({ label, link, icon }, idx) => (
                    <Link href={`${link}/${uid}`} key={idx}>
                        <li className="px-5 py-2 rounded-md hover:bg-gray-400/10 flex items-center gap-2">{icon} {label}</li></Link>
                ))}
            </ul>
        </sidebar>
    )
}

export default Sidebar;