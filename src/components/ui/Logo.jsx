import useTheme from "@/lib/theme";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link href="/">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image
          key={theme}
          src={
            theme === "dark"
              ? "/logos/dream-future-logo-white.png"
              : "/logos/dream-future-logo-black.png"
          }
          width={500}
          height={500}
          alt="Site Logo"
          className="w-12 md:w-14"
        />

        <h1 className="hidden md:block text-2xl font-extrabold dark:text-dark-text">
          Dream <span className="text-red-500">Future</span>
        </h1>
      </div>
    </Link>
  );
};
