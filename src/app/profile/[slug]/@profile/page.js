import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons/icons";
import { getLeaderboardData } from "@/lib/db";
import Image from "next/image"

const Profile = async ({ params }) => {
    const datas = await getLeaderboardData();
    const { slug } = await params;

    const user = datas.find((item) => item.uid === slug);
    if (!user) {
        return <div className="text-red-500 text-center mt-10">User Not Found!</div>
    }

    return (
        <div className="flex gap-10 h-full">
            <div className="bg-white w-full h-full rounded-2xl space-y-5 flex-2/3">
                <div className="flex justify-center h-[45%]">
                    <Image src={
                        user.img
                            ? `https://drive.google.com/uc?export=view&id=${user.img}`
                            : "/logos/dream-future-logo-black.png"} width={500} height={500} alt="Profile Picture" className="w-[70%] -mt-5 rounded-lg" />
                </div>
                <div className="text-black p-3 space-y-6">
                    <h1 className="text-3xl font-heading font-semibold text-center">{user.name}</h1>

                    <div className="border-b border-border flex justify-between px-3">
                        <h2 className="font-medium">Number:</h2>
                        <p>+278742 723 23</p>
                    </div>
                    <div className="border-b border-border flex justify-between px-3">
                        <h2 className="font-medium">Email:</h2>
                        <p>example@gmail.com</p>
                    </div>
                    <div className="border-b border-border flex justify-between px-3">
                        <h2 className="font-medium">Unique ID:</h2>
                        <p>{user.uid}</p>
                    </div>
                    <div className="flex justify-center gap-8 mt-7">
                        <a href=""><FacebookIcon /></a>
                        <a href=""><InstagramIcon /></a>
                        <a href=""><YoutubeIcon /></a>
                    </div>
                </div>
            </div>


            <div className=" w-full flex flex-col h-full gap-10">
                <div className="bg-amber-600 h-full rounded-2xl">2</div>
                <div className="bg-amber-600 h-full rounded-2xl">3</div>
            </div>
        </div>
    )
}

export default Profile;