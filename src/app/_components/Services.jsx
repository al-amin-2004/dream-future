"use client";

import { InfoIcon, LockIcon, PrivacyIcon } from "@/components/icons/icons";
import { CardTransparent } from "@/components/ui/CardTransparent";

import { useState } from "react";

export const Services = () => {
  const [selectedCard, setSelectedCard] = useState(1);

  const cardData = [
    {
      id: 1,
      icon: <PrivacyIcon />,
      head: "Keeping Security",
      desc: "We always maintain user confidentialy to keep it safe and confortable",
    },
    {
      id: 2,
      icon: <InfoIcon />,
      head: "Free Transaction",
      desc: "Free transactions without additional admin fees like other bank in general",
    },
    {
      id: 3,
      icon: <LockIcon />,
      head: "Security First",
      desc: "We always prioritize security so user don't have to warry about their savings",
    },
  ];

  return (
    <section className="relative">
      <div className="container mx-auto py-4 md:py-32 px-4">
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-2xl md:text-5xl text-text dark:text-dark-text font-bold mb-3 md:mb-8 font-heading">
            We provide the best service for you
          </h2>
          <p className="text-text-secondary dark:text-dark-text-secondary font-body md:text-xl leading-5 md:leading-6 px-3">
            We provide the best service for you. making for transactions and{" "}
            <br className="hidden md:block" /> managing your money
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center">
          {cardData.map(({ id, icon, head, desc }) => (
            <CardTransparent
              key={id}
              icon={icon}
              head={head}
              desc={desc}
              bgdeep={selectedCard === id}
              onClick={() => setSelectedCard(id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
