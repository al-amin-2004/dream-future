import { DiamondIcon, KingIcon } from "@/components/icons/icons";
import { Box3D } from "@/components/ui/Box";
import Image from "next/image";

function LeaderboardStage({ reorderedTopThree }) {
  return (
    <section>
      <div className="container mx-auto">
        {/* Leaderboard Header for Pc  */}
        <div className="hidden md:flex justify-center gap-[7rem] mt-[10rem] h-[35rem]">
          {reorderedTopThree.map((data) => (
            <Box3D
              key={data.position}
              position={data.position}
              name={data.name}
              img={data.img}
            />
          ))}
        </div>

        {/* Leaderboard Header for Mobile  */}
        <div className={"pt-30 block md:hidden"}>
          <div className="h-[11rem] grid grid-cols-3 grid-rows-6">
            {reorderedTopThree.map((data) => (
              <div
                key={data.position}
                className={`row-end-7 rounded-t-2xl ${
                  data.position === 1
                    ? "bg-orange-400 dark:bg-gray-900/90"
                    : data.position === 2
                    ? "bg-orange-400/80 dark:bg-gray-800/50"
                    : "bg-orange-400/60 dark:bg-gray-600/50"
                } p-1`}
                style={{ "gridRowStart": `${data.position}` }}
              >
                <div
                  className={`dark:text-white flex flex-col items-center -translate-y-2/6 ${
                    data.position === 3 ? "gap-1" : "gap-2 "
                  }`}
                >
                  <div className="size-8/12 relative">
                    <KingIcon
                      className={`size-12 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 ${
                        data.position === 1 ? "block" : "hidden"
                      }`}
                    />

                    <div
                      className={`rounded-full overflow-hidden border-2
                        ${
                          data.position === 1
                            ? "border-orange-400"
                            : data.position === 2
                            ? "border-sky-500"
                            : "border-green-500"
                        } 
                        ${
                          data.position === 2
                            ? "scale-90"
                            : data.position === 3 && "scale-75"
                        }`}
                    >
                      <Image
                        src={
                          data.img
                            ? `https://drive.google.com/uc?export=view&id=${data.img}`
                            : "/logos/dream-future-logo-white.png"
                        }
                        width={500}
                        height={500}
                        alt="leaderboard Image"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <h3 className="text-xs text-center font-medium">
                    {data.name}
                  </h3>
                  <span
                    className={`flex gap-1 items-center font-medium text-white bg-white/30 px-2 rounded-full
                      ${
                        data.position === 1
                          ? "dark:text-orange-400"
                          : data.position === 2
                          ? "dark:text-sky-400"
                          : "dark:text-green-400"
                      }`}
                  >
                    <DiamondIcon className="size-3.5" />
                    {data.totalCoin}
                  </span>
                  <h2
                    className={`font-medium italic ${
                      data.position === 1
                        ? "text-7xl"
                        : data.position === 2
                        ? "text-5xl"
                        : "text-4xl"
                    }`}
                  >
                    {data.position}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeaderboardStage;
