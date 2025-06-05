import { members } from "@/lib/db";
import "@/styles/scrollbar.css"
import { Card } from "./_components/Card";
import Image from "next/image";
import { BloodIcon, DiamondIcon } from "@/components/icons/icons";
import { CopyBox } from "@/components/ui/Copybox";
import Link from "next/link";
import { Button } from "@/components/ui/Button";


const Privet = async () => {
  const member = await members();


  return (
    <section className="h-full">
      <div className="container mx-auto h-full md:overflow-y-scroll">
        <ul className="grid md:grid-cols-4 justify-items-center gap-10 pt-6 md:pt-4">
          {member.map((user, idx) => (
            <Card user={user} idx={idx} key={idx} />
          ))}
        </ul>
      </div>
    </section >
  )
}

export default Privet;
