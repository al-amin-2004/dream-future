import { DiamondIcon } from "@/components/icons/icons";
import { members } from "@/lib/db";
import Image from "next/image";

const Privet = async () => {
  const member = await members()
  return (
    <section className="h-full">
      <div className="container mx-auto h-full overflow-y-scroll">
        <ul className="grid grid-cols-4 justify-items-center gap-10 pt-4">
          {member.map((user, idx) => (
            <li key={idx} className="w-72 group hover:row-span-2 hover:h-full bg-primary/20 rounded-md cursor-pointer transition-all duration-500">
              <div className="p-5 rounded-2xl flex flex-col items-center gap-2">
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

                <div className="">
                  asdafd
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
