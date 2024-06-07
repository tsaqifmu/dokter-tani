import { mitra } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Mitra = () => {
  return (
    <section className={`${styles.flexCenter} bg-slate-100 text-slate-800`}>
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} ${styles.paddingY} flex h-full flex-row-reverse`}
      >
        <div className="flex w-1/2 items-center">
          <div className="flex w-full flex-wrap justify-end gap-4">
            {mitra.map((item) => (
              <div
                key={item.id}
                className="w-1/3 flex-auto rounded-lg bg-white px-4 py-2 transition-all hover:cursor-pointer hover:shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={`Logo ${item.id}`}
                  width={300}
                  height={300}
                  className="grayscale transition-all hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-xl font-semibold text-green-500">Mitra Kami</h3>
          <h1 className="text-5xl font-bold">
            Kolaborasi untuk <br /> Pertanian Lebih Baik
          </h1>
          <p className={`${styles.paragraph} mt-5 max-w-96`}>
            Dokter Tani bekerja sama dengan berbagai organisasi, perusahaan, dan
            institusi terkemuka untuk memberikan solusi pertanian terbaik bagi
            Anda. Berikut adalah beberapa mitra terpercaya kami:
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mitra;
