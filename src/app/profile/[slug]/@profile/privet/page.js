import { BloodIcon, DiamondIcon } from "@/components/icons/icons";
import { members } from "@/lib/db";
import Image from "next/image";
import "@/styles/scrollbar.css"
import { CopyBox } from "@/components/ui/Copybox";

const Privet = async () => {
  const member = await members();


  return (
    <section className="h-full">
      <div className="container mx-auto h-full md:overflow-y-scroll">
        <ul className="grid md:grid-cols-4 justify-items-center gap-10 pt-6 md:pt-4">
          {member.map((user, idx) => (
            <li key={idx} className="w-full md:w-72 group hover:row-span-2 hover:h-full bg-white rounded-md cursor-pointer transition-all duration-500">
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

                <h2 className="text-xl font-medium text-text text-center">{user.name}</h2>

                <div className="flex flex-col gap-2 w-full h-0 group-hover:h-auto overflow-hidden">

                  <div className="flex justify-between">
                    <div className="col-start-7 place-self-end self-center text-end flex justify-end items-center gap-1 bg-slate-400/40 px-1 md:px-2.5 rounded-full">
                      <DiamondIcon className="size-4" />
                      <p>
                        {user.totalStone < 10
                          ? `0${user.totalStone}`
                          : user.totalStone}
                      </p>
                    </div>

                    <CopyBox content={user.uid} />
                  </div>

                  <p>{user.email}</p>


                  <div className="flex items-center justify-between">
                    <a href={`tel:${user.mobile}`}>{user.mobile}</a>

                    {
                      user.blood &&
                      <div div className="flex items-center gap-1">
                        <BloodIcon className="size-4" />
                        <p>{user.blood}</p>
                      </div>}



                  </div>


                  <div className="flex justify-between border-t px-1 mt-5">
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
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section >
  )
}

export default Privet;
