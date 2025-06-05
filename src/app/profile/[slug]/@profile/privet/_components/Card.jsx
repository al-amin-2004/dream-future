import { BloodIcon, DiamondIcon } from "@/components/icons/icons";
import { Button } from "@/components/ui/Button";
import { CopyBox } from "@/components/ui/Copybox";
import Image from "next/image";
import Link from "next/link";

export const Card = ({ user }) => {
  return (
    <li className="w-full md:w-72 group hover:row-span-2 hover:h-full bg-white rounded-md cursor-pointer transition-all duration-500">
      <div className="p-2 md:p-5 rounded-2xl flex flex-col items-center gap-2">
        <div className="size-24 bg-slate-500/20 border rounded-md -mt-8 overflow-hidden ">
          <Image
            src={
              user.image
                ? `https://drive.google.com/uc?export=view&id=${user.image}`
                : "/logos/dream-future-logo-white.png"
            }
            width={500}
            height={500}
            alt="profile Image"
            className="size-full"
          />
        </div>

        <h2 className="text-xl font-medium text-text text-center">
          {user.name}
        </h2>

        <div className="flex flex-col gap-2 w-full h-0 group-hover:h-auto overflow-hidden">
          <div className="flex justify-between">
            <div className="col-start-7 place-self-end self-center text-end flex justify-end items-center gap-1 bg-slate-400/40 px-1 md:px-2.5 rounded-full">
              <DiamondIcon className="size-4" />
              <p>
                {user.totalStone < 10 ? `0${user.totalStone}` : user.totalStone}
              </p>
            </div>

            <CopyBox content={user.uid} />
          </div>

          <p>{user.email}</p>

          <div className="flex items-center justify-between">
            <a href={`tel:${user.mobile}`}>{user.mobile}</a>

            {user.blood && (
              <div div className="flex items-center gap-1">
                <BloodIcon className="size-4" />
                <p>{user.blood}</p>
              </div>
            )}
          </div>

          <div className="flex justify-between border-t px-1 mt-2">
            <div className="text-center">
              <h4 className="font-medium">Balance</h4>
              <p>{user.totalDeposit}</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium">Extra</h4>
              <p>{user.totalExtra}</p>
            </div>
            <div className="text-center">
              <h4 className="font-medium">Total Balance</h4>
              <p>{user.totalMoney}</p>
            </div>
          </div>

          <div>
            <Link href={`/profile/${user.uid}`}>
              <Button className="w-full hover:translate-0 rounded-sm mb-2">{user.name}'s Profile</Button>
            </Link>

            <Link href={`/profile/${user.uid}/history`}>
              <Button className="w-full hover:translate-0 rounded-sm">Payment History</Button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};
