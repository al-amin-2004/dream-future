import LeaderboardList from "@/components/layout/leaderboard/LeaderboardList"
import LeaderboardStage from "@/components/layout/leaderboard/LeaderboardStage";
import { getLeaderboardData } from "@/app/lib/diposit";

const leaderboard = async () => {
  const datas = await getLeaderboardData();
  

  const topThree = datas
    .slice(0, 3)
    .map((user, index) => ({ ...user, position: index + 1 }));
  // Top 1 order change of between
  const reorderedTopThree = [topThree[1], topThree[0], topThree[2]];

  return (
    <main className="px-2.5 md:px-0">
      <LeaderboardStage reorderedTopThree={reorderedTopThree}/>
      <LeaderboardList sortedData={datas}/>
    </main>
  )
}
export default leaderboard