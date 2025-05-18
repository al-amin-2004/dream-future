
const months = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];

// Coin calculation logic
export function calculateCoins(data) {
  const currentMonthIndex = new Date().getMonth(); // 0-based (Jan = 0)

  return data.map((item) => {
    let totalCoin = 0;

    months.forEach((month, index) => {
      if (index > currentMonthIndex) return;

      const dateField = `${month}-date`;
      const extraField = `${month}-extra`;

      const date = Number(item[dateField]);
      const extra = Number(item[extraField]);

      if (!isNaN(date) && date > 0 && date <= 31) {
        const coin = 30 - date;
        totalCoin += coin;
      }

      if (!isNaN(extra) && extra > 0) {
        const extraCoin = (extra * 10) / 100;
        totalCoin += extraCoin;
      }
    });

    return {
      uid: item.uid,
      img: item.img,
      name: item.name,
      totalCoin: Math.round(totalCoin),
    };
  });
}

// Fetching and processing leaderboard data
export const getLeaderboardData = async () => {

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://dream-future.vercel.app");

  const res = await fetch(
    `${BASE_URL}/api/member-deposit`,
    { cache: "no-store" }
  );

  const rawData = await res.json();
  const calculatedData = calculateCoins(rawData);

  // Sort descending by totalCoin
  return calculatedData.sort((a, b) => b.totalCoin - a.totalCoin);
}






export const members = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL
    : (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://dream-future.vercel.app");


  const [depositRes, profileRes] = await Promise.all([
    fetch(`${BASE_URL}/api/member-deposit`, { cache: "no-cache" }),
    fetch(`${BASE_URL}/api/member-info`, { cache: "no-cache" }),
  ]);

  if (!depositRes.ok || !profileRes.ok) {
    throw new Error("Failed to fetch one or both APIs");
  }

  const depositData = await depositRes.json();
  const profileData = await profileRes.json();


  const finalData = depositData.map(depositUser => {
    const profileUser = profileData.find(p => p.no === depositUser.no);


    const monthly = {};

    Object.keys(depositUser).forEach((key) => {
      const match = key.match(/^([a-z]{3})-(\d{4})-(date|extra|amount)$/);
      if (!match) return;

      const [_, monthStr, yearStr, type] = match;
      const year = yearStr;
      const month = monthStr.toLowerCase();

      if (!monthly[year]) {
        monthly[year] = {};
      }

      if (!monthly[year][month]) {
        monthly[year][month] = { date: null, extra: null, amount: null };
      }

      const val = Number(depositUser[key]);
      monthly[year][month][type] = isNaN(val) ? null : val;
    });

    return {
      monthly,
      no: profileUser?.no,
      name: profileUser?.name,
      birthID: Number(profileUser?.birthID),
      birth: profileUser?.birth,
      mobile: `0${profileUser?.mobile}`,
      email: profileUser?.email,
      blood: profileUser?.blood,
    };
  });

  return finalData;
}

