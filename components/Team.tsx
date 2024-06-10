import { layanan, team } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section id="tim" className={`${styles.flexCenter} w-full pb-48`}>
      <div
        className={`${styles.paddingY} relative w-full justify-center lg:flex`}
      >
        <div className="relative w-full">
          <div className="absolute bottom-1/2 mr-14 w-full translate-y-1/2 px-4 md:px-14 lg:left-1/2 lg:-translate-x-1/2 xl:max-w-[1280px]">
            <h3 className="text-base font-semibold tracking-widest text-green-500 lg:text-xl">
              Mitra Terpercaya Kami
            </h3>
            <h3 className={`${styles.heading1} text-white`}>
              Kami Memiliki Tim Ahli <br /> yang Siap Membantu
            </h3>
          </div>
          <Image
            src={"/team.png"}
            width={1920}
            height={1080}
            alt="tim dokter tani"
            className="h-[400px] w-full object-cover lg:h-[600px]"
          />
        </div>
        {/* card */}
        <div
          className={` ${styles.paddingX} mt-5 w-full md:absolute md:-bottom-[150px] md:left-1/2 md:mt-0 md:-translate-x-1/2 lg:-bottom-[50px] xl:max-w-[1280px]`}
        >
          <div className="w-full justify-between space-y-5 md:flex md:space-x-4 md:space-y-0">
            {team.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center rounded-md bg-white px-3 py-3 shadow-xl transition-all hover:shadow-2xl lg:w-[350px] lg:space-y-2"
              >
                <Image
                  src={item.image}
                  height={200}
                  width={200}
                  alt={item.name}
                  className="mt-4 aspect-square rounded-full object-cover ring-2 ring-green-400 ring-offset-8"
                />
                <h3 className="pt-4 text-2xl font-bold">{item.name}</h3>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
