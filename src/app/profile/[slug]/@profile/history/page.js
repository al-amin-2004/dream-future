'use client'

import { members } from "@/lib/db";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const History = () => {
    const { slug } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const all = await members();
            const found = all.find((u) => u.uid === slug);
            setUser(found || null);
        };
        fetchData();
    }, [slug]);

    if (!user) {
        return (
            <div className="p-6 text-gray-400">Loading or no user found for UID: {slug}</div>
        );
    }

    const latestYearData = user.monthly[user.monthly.length - 1];
    const monthOrder = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    const current = new Date();
    const currentMonthIndex = current.getMonth();
    const currentYear = current.getFullYear();

    // Filter and sort the months
    const history = latestYearData.month
        .filter(item => {
            const [monthName] = Object.entries(item)[0];
            const monthIndex = monthOrder.indexOf(monthName.toLowerCase());

            return (
                Number(latestYearData.year) < currentYear ||
                (Number(latestYearData.year) === currentYear && monthIndex <= currentMonthIndex)
            );
        })
        .sort((a, b) => {
  const [monthA] = Object.entries(a)[0];
  const [monthB] = Object.entries(b)[0];
  return monthOrder.indexOf(monthB.toLowerCase()) - monthOrder.indexOf(monthA.toLowerCase());
});

    return (
        <div className="p-6 md:p-10 overflow-y-scroll h-full">
            <h2 className="text-2xl font-bold text-primary mb-6">
                Payment History for <span className="text-white">{user.name}</span>
            </h2>

            <ul className="space-y-4">
                {history.map((item, idx) => {
                    const [monthName, monthData] = Object.entries(item)[0];

                    return (
                        <li key={idx} className="p-4 border rounded-md bg-white/5">
                            <p className="text-lg font-semibold capitalize">{monthName}</p>
                            <p className="text-sm text-gray-300">Date: {monthData.date || 'N/A'}</p>
                            <p className="text-sm text-gray-300">Amount: {monthData.amount || 'N/A'}</p>
                            <p className="text-sm text-gray-300">Extra: {monthData.extra || '0'}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default History;
