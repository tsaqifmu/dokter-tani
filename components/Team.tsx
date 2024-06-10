import { layanan, team } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section
      className={`${styles.flexCenter} w-full bg-slate-100 pb-48 text-slate-800`}
    >
      <div
        className={`${styles.paddingY} relative w-full justify-center lg:flex`}
      >
        <div className="relative h-full">
          <div className="absolute bottom-1/2 mr-14 translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2">
            <div className="px-4 text-white md:px-14 lg:ml-12 lg:-translate-x-full">
              <h3 className="text-base font-semibold tracking-widest text-green-300 lg:text-xl">
                Mitra Terpercaya Kami
              </h3>
              <h3 className="text-3xl font-bold lg:text-4xl">
                Kami Memiliki Tim Ahli <br /> yang Siap Membantu
              </h3>
            </div>
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
                className="flex flex-col items-center justify-center rounded-md bg-white px-3 py-3 shadow-2xl lg:w-[350px] lg:space-y-2"
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
