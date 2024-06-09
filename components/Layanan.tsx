import { layanan } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Layanan = () => {
  return (
    <section
      className={`${styles.flexCenter} w-full bg-slate-100 text-slate-800`}
    >
      <div className={`w-full pb-72 pt-20`}>
        <div className="relative flex w-full justify-start">
          <div className="relative w-1/2 bg-black">
            <h3 className="absolute right-36 top-16 text-5xl font-bold text-white">
              Layanan Pertanian <br /> Berkualitas dari <br /> Dokter Tani
            </h3>
            <Image
              src={"/layanan.png"}
              alt="layanan dokter tani"
              width={1280}
              height={450}
              className="h-[450px] w-full object-cover"
            />
          </div>
          <div className="w-1/2">
            <p className="ml-28 mt-20 max-w-[400px] text-slate-500">
              Meningkatkan produktivitas dan kesehatan tanaman Anda melalui
              solusi pertanian yang berkelanjutan dan inovatif bersama Dokter
              Tani, mitra terpercaya Anda.
            </p>
          </div>
          {/* card */}
          <div
            className={`${styles.boxWidthNavFoot} ${styles.paddingX} absolute -bottom-64 left-1/2 -translate-x-1/2`}
          >
            <div className="flex w-full justify-between">
              {layanan.map((item) => (
                <div
                  key={item.id}
                  className="w-[350px] space-y-2 rounded-md bg-white px-3 py-3 shadow-2xl"
                >
                  <Image
                    src={item.image}
                    height={200}
                    width={200}
                    alt={item.title}
                    className="h-[200px] w-full rounded-md bg-red-400 object-cover"
                  />
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p>{item.description}</p>
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
