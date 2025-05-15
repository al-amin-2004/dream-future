"use client"

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FinotiveFunding = () => {

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });


  const data = [
    {
      id: "1",
      number: "20",
      after: "+",
      desc: "Active Member",
    },
    {
      id: "2",
      number: "150",
      after: "+",
      desc: "Trusted By Company",
    },
    {
      id: "3",
      before:"$",
      number: "7000",
      after: "M+",
      desc: "Our Target",
    },
  ];

  return (
    <div ref={ref} className="md:w-[75%] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 pt-24 pb-16 md:py-10 font-heading">
      {data.map(({ id,before, number, after, desc }) => (
        <div
          key={id}
          className="w-full md:flex text-center items-center justify-center gap-2 border-primary border-2 md:border-0 rounded-lg px-5 py-1 md:p-0"
        >
          <h2 className="text-3xl md:text-5xl font-semibold md:font-bold text-text dark:text-dark-text">
            {inView && <CountUp end={number} duration={3} prefix={before} suffix={after}/>}
          </h2>
          <p className="font-medium text-xl md:text-2xl text-primary">{desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FinotiveFunding;
