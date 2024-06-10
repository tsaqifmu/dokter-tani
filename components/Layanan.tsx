import { layanan } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Layanan = () => {
  return (
    <section id="layanan" className={`${styles.flexCenter} w-full`}>
      <div className={`w-full pt-20 lg:pb-72`}>
        <div className="relative w-full lg:flex">
          <div className="relative lg:w-1/2">
            <div className="absolute top-16 space-y-4 px-4 md:px-14 lg:right-20">
              <h1 className={`${styles.heading1} text-white`}>
                Layanan Pertanian <br /> Berkualitas dari <br /> Dokter Tani
              </h1>
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
            <p
              className={` ${styles.paragraph} ml-24 mt-20 hidden max-w-[300px] lg:block lg:max-w-[400px]`}
            >
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
                  <h2 className={`${styles.heading2}`}>{item.title}</h2>
                  <p className={`${styles.paragraph}`}>{item.description}</p>
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
