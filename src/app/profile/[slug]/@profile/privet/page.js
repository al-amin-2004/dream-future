import { DiamondIcon } from "@/components/icons/icons";
import { members } from "@/lib/db";
import Image from "next/image";
import "@/styles/admin.css"
import { CopyBox } from "@/components/ui/Copybox";

const Privet = async () => {
  const member = await members();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full overflow-y-scroll">
        <ul className="grid md:grid-cols-4 justify-items-center gap-10 pt-6 md:pt-4">
          {member.map((user, idx) => (
            <li key={idx} className="w-full md:w-72 group hover:row-span-2 hover:h-full bg-slate-400/15 rounded-md cursor-pointer transition-all duration-500">
              <div className="p-2 md:p-5 rounded-2xl flex flex-col items-center gap-2">
                <div className="size-24 group-hover:size-[6.2rem] bg-white rounded-md -mt-8 overflow-hidden ">
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

                <h2 className="text-xl font-medium text-text dark:text-dark-text text-center">{user.name}</h2>

                <div className="flex flex-col w-full">

                  <div className="flex justify-between">
                    <div className="col-start-7 place-self-end self-center text-end flex justify-end items-center gap-1 bg-gray-200/20 px-1 md:px-2 rounded-full">
                      <DiamondIcon className="size-4" />
                      <p>
                        {user.totalStone < 10
                          ? `0${user.totalStone}`
                          : user.totalStone}
                      </p>
                    </div>

                    <CopyBox content={user.uid} />
                  </div>

                  <a href={`mailto:${user.email}`}>{user.email}</a>
                  <a href={`tel:${user.mobile}`}>{user.mobile}</a>
                  <p>{user.blood}</p>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Privet;
