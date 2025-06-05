import { LeaderboardList } from "@/app/(pages)/leaderboard/_components";
import { DiamondIcon } from "@/components/icons/icons";
import { members } from "@/lib/db";
import "@/styles/scrollbar.css"
import Image from "next/image";

const Leaderboard = async ({ params }) => {
  const member = await members()
  const { slug } = await params;

  const user = member.find((m) => m.uid === slug);

  // ==== Ekhane Leaderboard er jonno list sorting kora hoise ==== //
  const sortedDatas = member.sort((a, b) => b.totalStone - a.totalStone);

  // ==== Ekhane My Position ber kora hoise ==== //
  const myIndex = sortedDatas.findIndex((m) => m.uid === slug);
  const myPosition = myIndex + 1; // কারণ index 0 থেকে শুরু হয়

  return (
    <div className="max-w-full h-full md:overflow-y-scroll">


      <ul className="w-full text-text dark:text-dark-text bg-primary/20 dark:bg-gray-900/50 p-2 md:p-5 rounded-lg font-body font-medium dark:font-normal mb-4 md:mb-8">
        <h2 className="mb-3 text-xl md:text-2xl">My Position</h2>

        <li
          className="bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-400 dark:border-yellow-600 rounded-md grid grid-cols-7 items-center py-3 md:py-2 px-2 md:px-6 text-sm md:text-base shadow-sm"
        >
          <p className="font-bold text-yellow-900 dark:text-yellow-200">{myPosition}</p>

          <div className="flex items-center gap-4 col-start-2 col-end-7">
            <Image
              src={
                user.image
                  ? `https://drive.google.com/uc?export=view&id=${user.image}`
                  : "/logos/dream-future-logo-white.png"
              }
              width={500}
              height={500}
              alt="profile Image"
              className="size-7 md:size-9 rounded-full overflow-hidden"
            />
            <p className="font-semibold text-yellow-800 dark:text-yellow-100">{user.name}</p>
          </div>

          <div className="col-start-7 place-self-end self-center text-end flex justify-end items-center gap-1 bg-yellow-300/40 dark:bg-yellow-700/40 px-1 md:px-2 rounded-full">
            <DiamondIcon className="size-4 text-yellow-600 dark:text-yellow-300" />
            <p className="text-yellow-800 dark:text-yellow-100">
              {user.totalStone < 10
                ? `0${user.totalStone}`
                : user.totalStone}
            </p>
          </div>
        </li>

      </ul>

      <LeaderboardList sortedDatas={sortedDatas} />
    </div>
  )
}

export default Leaderboard;