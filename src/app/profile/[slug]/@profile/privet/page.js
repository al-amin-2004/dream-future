import { members } from "@/lib/db";
import "@/styles/scrollbar.css"
import { Card } from "./_components/Card";


const Privet = async () => {
  const member = await members();

  // Pre-calculate totals
  let totalDeposit = 0;
  let totalExtra = 0;
  let totalMoney = 0;

  member.forEach((curr) => {
    const monthly = curr.monthly?.[2025] || {};
    Object.values(monthly).forEach((m) => {
      totalDeposit += m?.amount || 0;
      totalExtra += m?.extra || 0;
      totalMoney += (m?.amount || 0) + (m?.extra || 0);
    });
  });


  return (
    <section className="h-full">
      <div className="container mx-auto h-full md:overflow-y-scroll">

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 py-6 md:px-2 border-b dark:border-border border-dark-border">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-2 lg:p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Deposit</h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">
              ৳ {totalDeposit.toLocaleString()}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-2 lg:p-6 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Extra</h3>
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
              ৳ {totalExtra.toLocaleString()}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl p-2 lg:p-6 flex flex-col items-center justify-center col-start-1 col-end-3 lg:col-auto">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Total Amount</h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-2">
              ৳ {totalMoney.toLocaleString()}
            </p>
          </div>
        </div>


        <ul className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-10 pt-10">
          {member.map((user, idx) => (
            <Card user={user} idx={idx} key={idx} />
          ))}
        </ul>
      </div>
    </section >
  )
}

export default Privet;
