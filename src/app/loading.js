import Image from "next/image";

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black">
            <div className="relative animate-pulse-slow">
                <Image
                    src="/logos/dream-future-logo-white.png"
                    alt="Dream Future Logo"
                    width={200}
                    height={200}
                    className="drop-shadow-[0_0_20px_#FFD700] animate-glow"
                />
                <div className="absolute inset-0 rounded-full bg-white opacity-10 blur-2xl animate-ping-slow"></div>
            </div>
        </div>
    )
}

export default Loading;