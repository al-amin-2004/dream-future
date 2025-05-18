import { DiamondIcon } from "@/components/icons/icons";
import { ThemeToggleBtn } from "@/components/ui/ThemeToggleBtn";
import { members } from "@/lib/db";

export const Header = async ({ slug }) => {
  const member = await members();

  const user = member.find((m) => m.uid === slug);
  if (!user) {
    return (
      <div className="text-red-500 text-center mt-10">User Not Found!</div>
    );
  }
  return (
    <header className="px-8 py-2 flex justify-between border-b border-dark-border">
      <div>
        <h1 className="text-4xl text-text dark:text-dark-text font-medium">
          Dream Future
        </h1>
        <p className="text-dark-primary">A believable Comitti limited</p>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2 text-text dark:text-dark-text bg-gray-300/20 px-3 py-1 rounded-full">
          <DiamondIcon className="size-5"/>
          <span>{user.totalStone}</span>
        </div>
        <ThemeToggleBtn />
        <h2 className="text-text dark:text-dark-text">{user.name}</h2>
      </div>
    </header>
  );
};
