import { members } from "@/lib/db";
import Image from "next/image";
import "@/styles/scrollbar.css"
import { groupMembersWithOwners } from "@/lib/uitils/groupMembersWithOwners";

const monthNames = {
  jan: "January",
  feb: "February",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December"
};

const History = async ({ params }) => {
  const member = await members();
  const { slug } = await params;
  const grouped = groupMembersWithOwners(member);

  //  Find main or sub account based on slug
  let user = grouped.find((m) => m.uid === slug);

  if (!user) {
    for (const parent of grouped) {
      const found = parent.another.find((sub) => sub.uid === slug);
      if (found) {
        user = found;
        break;
      }
    }
  }


  const year = "2025";
  const monthlyData = user.monthly?.[year] || {};
  

  return (
    <div className="max-w-full h-full md:overflow-y-scroll md:p-6 md:bg-gray-900 text-white rounded-xl shadow-md space-y-6">
      <h3 className="text-xl md:text-3xl font-semibold my-3 text-center">Payment History - {year}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between">

        <h2 className="text-2xl font-bold hidden md:block">{user.name}</h2>

        {user.image && (
          <Image src={
            user.image
              ? `https://drive.google.com/uc?export=view&id=${user.image}`
              : "/logos/dream-future-logo-black.png"} width={500} height={500} alt="Profile" className="w-24 h-24 rounded-full object-cover mt-4 sm:mt-0 mx-auto md:mx-0" />
        )}
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        <div className="bg-gray-800 border border-green-400 p-2 md:p-4 rounded-lg shadow">
          <p className="text-lg font-semibold">Total Deposit</p>
          <p className="md:text-2xl font-bold text-green-400">৳ {user.totalDeposit}</p>
        </div>
        <div className="bg-gray-800 border border-yellow-400 p-2 md:p-4 rounded-lg shadow">
          <p className="text-lg font-semibold">Total Extra</p>
          <p className="md:text-2xl font-bold text-yellow-400">৳ {user.totalExtra}</p>
        </div>
        <div className="bg-gray-800 border border-blue-400 p-2 md:p-4 rounded-lg shadow">
          <p className="text-lg font-semibold">Total Money</p>
          <p className="md:text-2xl font-bold text-blue-400">৳ {user.totalMoney}</p>
        </div>
        <div className="bg-gray-800 border border-purple-400 p-2 md:p-4 rounded-lg shadow">
          <p className="text-lg font-semibold">Total Stone</p>
          <p className="md:text-2xl font-bold text-purple-400">{user.totalStone}</p>
        </div>
      </div>

      <div>
        <div className="grid gap-4">
          {Object.entries(monthlyData).reverse().map(([monthKey, value]) => (
            <div key={monthKey} className={`p-2 md:p-4 rounded-sm md:rounded-lg shadow-md border ${value.amount > 0 ? 'bg-green-800/15 border-green-500' : 'bg-red-800/15 border-red-600'}`}>
              <h4 className="font-semibold text-lg md:text-3xl">{monthNames[monthKey]}</h4>
              <div className="flex justify-between mt-1 md:mt-3.5 text-xs md:text-base">
                <div>
                  <p><strong>Amount:</strong> ৳ {value.amount}</p>
                  <p><strong>Date:</strong> {value.date === 0 ? "Not Paid" : `Paid on ${value.date}`}</p>
                </div>
                <div>
                  <p><strong>Extra:</strong> ৳ {value.extra}</p>
                  <p><strong>Earned Stone:</strong> {value.date !== 0 ? (value.extra / 10) ? (value.extra / 10) + (30 - value.date) : (30 - value.date) : 0}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
