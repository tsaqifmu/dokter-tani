import { layanan, team } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section
      className={`${styles.flexCenter} w-full bg-slate-100 pb-48 text-slate-800`}
    >
      <div className={`${styles.paddingY} relative flex w-full justify-center`}>
        <div className="absolute bottom-1/2 left-1/2 mr-14 -translate-x-1/2 translate-y-1/2">
          <div className="ml-12 -translate-x-full text-white">
            <h3 className="text-xl font-semibold tracking-widest text-green-300">
              Mitra Terpercaya Kami
            </h3>
            <h3 className="text-4xl font-bold">
              Kami Memiliki Tim Ahli <br /> yang Siap Membantu
            </h3>
          </div>
        </div>
        <Image
          src={"/team.png"}
          width={1920}
          height={1080}
          alt="tim dokter tani"
          className="h-[600px] w-full object-cover"
        />
        {/* card */}
        <div
          className={` ${styles.paddingX} absolute -bottom-[50px] left-1/2 w-full -translate-x-1/2 xl:max-w-[1280px]`}
        >
          <div className="flex w-full justify-between space-x-4">
            {team.map((item) => (
              <div
                key={item.id}
                className="flex w-[350px] flex-col items-center justify-center space-y-2 rounded-md bg-white px-3 py-3 shadow-2xl"
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
