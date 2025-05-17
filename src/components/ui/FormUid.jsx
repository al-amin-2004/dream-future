"use client";

import { twMerge } from "tailwind-merge";
import { Button } from "./Button";
import { useState } from "react";
import Link from "next/link";

export const FormUid = ({ className }) => {
  const [iptValue, setIptValue] = useState("");
  return (
    <div
      id="formanimate"
      className={twMerge(
        "w-full p-4 md:p-5 bg-black/30 dark:bg-white/10 backdrop-blur-sm rounded-lg md:w-[45%] md:mt-36 border border-primary",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl dark:text-dark-primary text-center font-semibold font-heading mb-5 md:mb-12">
        Your UID
      </h2>
      <form className="space-y-4 md:space-y-6">
        <div className="relative">
          <input
            id="uid"
            type="text"
            value={iptValue}
            onChange={(e) => setIptValue(e.target.value)}
            placeholder=" "
            required
            className="peer w-full border-b-2 border-primary bg-transparent text-base pt-6 pb-1 px-1.5 text-text dark:text-dark-text focus:outline-none"
          />
          <label
            htmlFor="uid"
            className="absolute left-1.5 animate-pulse transition-all duration-200 dark:text-dark-text peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-sm peer-focus:animate-none peer-focus:text-primary"
          >
            Your Uid
          </label>
        </div>

        <Link href={`/profile/${iptValue}`}>
          <Button className="w-full rounded-sm hover:translate-0">
            See Profile
          </Button>
        </Link>
      </form>
    </div>
  );
};
