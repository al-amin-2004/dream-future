import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/icons";
import { members } from "@/lib/db";

import Image from "next/image"

const Profile = async ({ params }) => {
    const member = await members();

    const { slug } = await params;

    const user = member.find((m) => m.uid === slug);
    if (!user) {
        return <div className="text-red-500 text-center mt-10">User Not Found!</div>
    }

    return (
        <div className="flex flex-col md:flex-row gap-10 md:h-full">
            <div className="bg-white w-full h-full rounded-2xl space-y-2 md:space-y-5 flex-2/3">
                <div className="flex justify-center h-[45%]">
                    <Image src={
                        user.image
                            ? `https://drive.google.com/uc?export=view&id=${user.image}`
                            : "/logos/dream-future-logo-black.png"} width={500} height={500} alt="Profile Picture" className="w-[45%] md:w-[70%] -mt-5 md:-mt-5 rounded-lg" />
                </div>
                <div className="text-black p-3 space-y-6">
                    <h1 className="text-xl md:text-3xl font-heading font-semibold text-center">{user.name}</h1>

                    <div className="border-b border-border flex justify-between md:px-3">
                        <h2 className="font-medium">Number:</h2>
                        <p className="text-sm md:text-base">{user.mobile}</p>
                    </div>
                    <div className="border-b border-border flex justify-between md:px-3">
                        <h2 className="font-medium">Email:</h2>
                        <p className="text-sm md:text-base">{user.email}</p>
                    </div>
                    <div className="border-b border-border flex justify-between md:px-3">
                        <h2 className="font-medium">Unique ID:</h2>
                        <p className="text-sm md:text-base">{user.uid}</p>
                    </div>
                    <div className="flex justify-center gap-8 md:mt-7">
                        <a href=""><FacebookIcon /></a>
                        <a href=""><InstagramIcon /></a>
                        <a href=""><YoutubeIcon /></a>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col h-full gap-10">

                <div className="bg-white h-full rounded-xl p-2 md:p-5">
                    <div>
                        <p className="text-sm md:text-xl">Total Balance</p>
                        <p className="text-xl md:text-3xl font-medium md:font-bold">{user.totalMoney}.00 BDT</p>
                    </div>

                    <div className="flex justify-between md:justify-around text-center bg-slate-400 py-1.5 md:py-3 px-2.5 rounded-2xl mt-3 md:mt-28">
                        <div className="space-y-1.5">
                            <p className="bg-orange-400 size-11 mx-auto p-1.5 rounded-full font-medium md:text-xl">{user.totalDeposit}</p>
                            <p className="text-sm md:text-base">Total Diposit</p>
                        </div>
                        <div className="space-y-1.5">
                            <p className="bg-orange-400 size-11 mx-auto p-1.5 rounded-full font-medium md:text-xl">{user.totalExtra}</p>
                            <p className="text-sm md:text-base">Extra Diposit</p>
                        </div>
                    </div>
                </div>


                <div className="bg-amber-600 h-full rounded-2xl">3</div>
            </div>
        </div>
    )
}

export default Profile;