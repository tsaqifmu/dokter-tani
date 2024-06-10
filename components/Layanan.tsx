import { layanan } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Layanan = () => {
  return (
    <section
      className={`${styles.flexCenter} w-full bg-slate-100 text-slate-800`}
    >
      <div className={`w-full pt-20 lg:pb-72`}>
        <div className="relative w-full lg:flex">
          <div className="relative lg:w-1/2">
            <div className="absolute top-16 space-y-4 px-4 md:px-14 lg:right-20">
              <h3 className="text-3xl font-bold text-white md:text-4xl xl:text-5xl">
                Layanan Pertanian <br /> Berkualitas dari <br /> Dokter Tani
              </h3>
              <p className="max-w-[400px] text-white lg:hidden">
                Meningkatkan produktivitas dan kesehatan tanaman Anda melalui
                solusi pertanian yang berkelanjutan dan inovatif bersama Dokter
                Tani, mitra terpercaya Anda.
              </p>
            </div>
            <Image
              src={"/layanan.png"}
              alt="layanan dokter tani"
              width={1280}
              height={450}
              className="h-[450px] w-full object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="ml-24 mt-20 hidden max-w-[300px] text-slate-500 lg:block lg:max-w-[400px]">
              Meningkatkan produktivitas dan kesehatan tanaman Anda melalui
              solusi pertanian yang berkelanjutan dan inovatif bersama Dokter
              Tani, mitra terpercaya Anda.
            </p>
          </div>
          {/* card */}
          <div
            className={`${styles.boxWidthNavFoot} ${styles.paddingX} mt-5 lg:absolute lg:-bottom-64 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2`}
          >
            <div className="w-full justify-between space-y-5 sm:flex sm:space-x-3 sm:space-y-0">
              {layanan.map((item) => (
                <div
                  key={item.id}
                  className="w-full space-y-2 rounded-md bg-white px-3 py-3 shadow-lg transition-all hover:shadow-2xl lg:w-[350px]"
                >
                  <Image
                    src={item.image}
                    height={200}
                    width={200}
                    alt={item.title}
                    className="h-[200px] w-full rounded-md bg-red-400 object-cover"
                  />
                  <h3 className="text-xl font-bold lg:text-3xl">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
