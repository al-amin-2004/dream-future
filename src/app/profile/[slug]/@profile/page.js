import { getLeaderboardData } from "@/lib/diposit";
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
                <div className="text-black">
                    <h1>{user.name}</h1>
                    <h1>{user.uid}</h1>
                    <h1>{user.totalCoin}</h1>
                </div>
            </div>


            <div className=" w-full flex flex-col h-full gap-10">
                <div className="bg-amber-600 h-full rounded-2xl">2</div>
                <div className="bg-amber-600 h-full rounded-2xl">3</div>
            </div>
        </div>
    )
}

export default Profile