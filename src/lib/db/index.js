const months = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth(); // in number
const currentMonthStr = months[currentDate.getMonth()]; // in String


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


  // ==== Ekhane Duita Json Merge kora hoise ==== //
  const allUsers = depositData.map(depositUser => {
    const profileUser = profileData.find(p => p.no === depositUser.no);



    // ==== Ekhane Monthly Deposit er jonno new object create kora hoise ==== //
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

    // Ensure current month exists with default values if missing

    if (!monthly[currentYear.toString()]) {
      monthly[currentYear.toString()] = {};
    }

    if (!monthly[currentYear.toString()][currentMonthStr]) {
      monthly[currentYear.toString()][currentMonthStr] = {
        date: 0,
        extra: 0,
        amount: 0
      };
    }





    // ==== Ekhane Uniue ID Create kora hoise ==== //
    let uid;

    const birthIDNumber = profileUser?.birthID?.toString() || "";
    const birth = profileUser?.birth || "";
    const birthYear = birth.includes("-") ? birth.split("-")[0] : null;

    if (birthIDNumber.length === 17) {
      const year = birthIDNumber.slice(0, 4);
      const last4 = birthIDNumber.slice(-4);
      uid = (parseInt(year) * parseInt(last4))
        .toString()
        .slice(-6)
        .padStart(6, "0");
    } else if (birthIDNumber.length === 10 && birthYear) {
      const year = birthYear.toString();
      const last4 = birthIDNumber.slice(-4);
      uid = (parseInt(year) * parseInt(last4))
        .toString()
        .slice(-6)
        .padStart(6, "0");
    } else {
      uid = undefined;
    }




    // Ekhane Total Stone Calculate kora hoise
    let totalStone = 0;
    const currentMonthIndex = currentMonth;

    Object.entries(monthly).forEach(([yearStr, monthsObj]) => {
      const year = Number(yearStr);

      Object.entries(monthsObj).forEach(([monthStr, monthData]) => {
        const monthIndex = months.indexOf(monthStr); // months = ["jan", "feb", ...];

        // Only count if the month is past or current
        if (year < currentYear || (year === currentYear && monthIndex <= currentMonthIndex)) {
          const { date, extra } = monthData;

          if (!isNaN(date) && date > 0 && date <= 31) {
            totalStone += 30 - date;
          }

          if (!isNaN(extra) && extra > 0) {
            totalStone += (extra * 10) / 100;
          }
        }
      });
    });



    // == ekhane money calculate kora hoise == //
    let totalDeposit = 0;
    let totalExtra = 0;

    Object.values(monthly).forEach((yearData) => {
      Object.values(yearData).forEach((monthData) => {
        totalDeposit += Number(monthData.amount || 0);
        totalExtra += Number(monthData.extra || 0);
      });
    });


    return {
      no: profileUser?.no,
      name: profileUser?.name,
      image: profileUser?.img,
      birthID: Number(profileUser?.birthID),
      birth: profileUser?.birth,
      mobile: profileUser?.mobile && `0${profileUser.mobile}`,
      email: profileUser?.email,
      blood: profileUser?.blood,
      owner: profileUser?.owner,
      totalStone: Math.round(totalStone),
      totalDeposit,
      totalExtra,
      totalMoney: totalDeposit + totalExtra,
      monthly,
      uid,
    };
  });


  return allUsers;

}

