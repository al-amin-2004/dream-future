import { DiamondIcon } from "@/components/icons/icons";
import { ThemeToggleBtn } from "@/components/ui/ThemeToggleBtn";
import { members } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export const Header = async ({ slug }) => {
  const member = await members();


   // ekhane Multiple account thale ta ta main account e marge kora hocche
    const finalData = [];
    const uidMap = {};

    member.forEach((member) => {
        const { uid } = member;

        if (!uid) {
            finalData.push(member);
            return;
        }

        if (!uidMap[uid]) {

            uidMap[uid] = { ...member, other: [] };
            finalData.push(uidMap[uid]);
        } else {
            uidMap[uid].other.push(member);
        }
    });

console.log(finalData);

  

  const user = finalData.find((m) => m.uid === slug);
  if (!user) {
    return (
      <div className="text-red-500 text-center mt-10">User Not Found!</div>
    );
  }
  return (
    <header className="row-span-1 px-3 md:px-8 py-1.5 md:py-2 flex justify-between border-b border-dark-border">
      <div className="md:hidden fill-text dark:fill-dark-text">
        <Link href="/"><Image
          src="/logos/dream-future-logo-white.png"
          width={500}
          height={500}
          alt="Logo"
          className="size-11 ms-9"
        /></Link>
      </div>

      <div className="hidden md:block">
        <h1 className="text-4xl text-text dark:text-dark-text font-medium">
          Dream Future
        </h1>
        <p className="text-dark-primary">A believable Comitti limited</p>
      </div>

      <div className="flex gap-3 items-center">
        <div className={`text-primary ${!user.other.length > 0 && "hidden"}`}>1 2 3</div>

        <div className="flex items-center gap-1.5 md:gap-2 text-text dark:text-dark-text bg-gray-300/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
          <DiamondIcon className="size-4 md:size-5" />
          <span className="text-sm md:text-base">{user.totalStone}</span>
        </div>

        <ThemeToggleBtn />
        <h2 className="text-text dark:text-dark-text hidden md:block">
          {user.name}
        </h2>
      </div>
    </header>
  );
};
