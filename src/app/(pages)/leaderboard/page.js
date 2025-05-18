
import { members } from "@/lib/db";
import { LeaderboardList, LeaderboardStage } from "./_components";


const leaderboard = async () => {
  const member = await members()

  // ==== Ekhane Leaderboard er jonno list sorting kora hoise ==== //
  const sortedDatas = member.sort((a, b) => b.totalStone - a.totalStone);


  // ==== Ekhane TopThree er jonno list sorting kora hoise ==== //
  const topThree = sortedDatas.slice(0, 3).map((user, idx) => ({ ...user, position: idx + 1 }));
  const reorderedTopThree = [topThree[1], topThree[0], topThree[2]];

  return (
    <main className="px-2.5 md:px-0">
      <LeaderboardStage reorderedTopThree={reorderedTopThree} />
      <LeaderboardList sortedDatas={sortedDatas} />
    </main>
  )
}
export default leaderboard