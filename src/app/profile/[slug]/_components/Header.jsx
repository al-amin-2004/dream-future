import { DiamondIcon } from "@/components/icons/icons";
import { ThemeToggleBtn } from "@/components/ui/ThemeToggleBtn";
import { members } from "@/lib/db";
import { groupMembersWithOwners } from "@/lib/uitils/groupMembersWithOwners";
import Image from "next/image";
import Link from "next/link";

export const Header = async ({ slug }) => {
  const member = await members();

  const grouped = groupMembersWithOwners(member);

  let user = grouped.find((m) => slug === m.uid);

  if (!user) {
    for (const parent of grouped) {
      const foundSub = parent.another.find((sub) => sub.uid === slug);
      if (foundSub) {
        user = foundSub;
        break;
      }
    }
  }

  if (!user) {
    return (
      <div className="text-red-500 text-center mt-10">User Not Found!</div>
    );
  }
  return (
    <header className="row-span-1 px-3 md:px-8 py-1.5 md:py-2 flex justify-between border-b border-dark-border">
      <div className="md:hidden fill-text dark:fill-dark-text">
        <Link href="/">
          <Image
            src="/logos/dream-future-logo-white.png"
            width={500}
            height={500}
            alt="Logo"
            className="size-11 ms-9"
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <h1 className="text-4xl text-text dark:text-dark-text font-medium">
          Dream Future
        </h1>
        <p className="text-dark-primary">A believable Comitti limited</p>
      </div>

      <div className="flex gap-1.5 md:gap-3 items-center">
        <div
          className={`text-primary flex gap-1 md:gap-3 md:me-3 ${
            !user.another?.length > 0 && "hidden"
          }`}
        >
          {user.another?.map((u, idx) => (
            <Link key={idx} href={`/profile/${slug}-${idx + 1}`}>
              <p
                className="bg-primary/15 py-0.5 px-2 md:p-1 md:px-2.5 rounded-full"
                title={u.name}
              >
                {idx + 1}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1 md:gap-2 text-text dark:text-dark-text bg-gray-300/20 px-2 md:px-3 py-0.5 md:py-1 rounded-full">
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
