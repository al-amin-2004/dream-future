import { DiamondIcon } from '@/components/icons/icons';
import Image from 'next/image';


export const LeaderboardList =({sortedData}) => {
  return (
    <section>
        <div className='container mx-auto'>
        <ul className="w-full text-text dark:text-dark-text bg-primary/20 dark:bg-gray-900/50 p-2 md:p-5 rounded-b-lg   font-body font-medium dark:font-normal">
            <li className="grid grid-cols-3 md:grid-cols-7 items-center py-2 md:py-4 px-2 md:px-7">
              <p>Place</p>
              <p>Name</p>
              <p className="col-start-7 text-end">Stone</p>
            </li>

            {sortedData.map((data, idx) => (
              <li
                key={idx}
                className="dark:even:bg-white/20 even:bg-primary/70 rounded-md grid grid-cols-7 items-center py-1.5 md:py-2 px-2 md:px-6 text-sm md:text-base"
              >
                <p>{idx + 1}</p>

                <div className="flex items-center gap-4 col-start-2 col-end-7">
                  <Image
                    src={
                      data.img
                        ? `https://drive.google.com/uc?export=view&id=${data.img}`
                        : "/logos/dream-future-logo-white.png"
                    }
                    width={500}
                    height={500}
                    alt="profile Image"
                    className="size-7 md:size-9 rounded-full overflow-hidden"
                  />
                  <p>{data.name}</p>
                </div>

                <div className="col-start-7 place-self-end self-center text-end flex justify-end items-center gap-1 bg-gray-200/20 px-1 md:px-2 rounded-full">
                  <DiamondIcon className="size-4"/>
                  <p>
                    {data.totalCoin < 10
                      ? `0${data.totalCoin}`
                      : data.totalCoin}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </section>
  )
}
