import { mitra } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";

const Mitra = () => {
  return (
    <section id="mitra" className={`${styles.flexCenter} `}>
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} ${styles.paddingY} h-full md:flex md:space-x-10`}
      >
        {/* PARAGRAPH */}
        <div className="md:w-1/2">
          <h3 className="text-base font-semibold text-green-500 lg:text-xl">
            Mitra Kami
          </h3>
          <h1 className="text-3xl font-bold lg:text-5xl">
            Kolaborasi untuk <br /> Pertanian Lebih Baik
          </h1>
          <p className={`${styles.paragraph} mt-2 lg:mt-5 lg:max-w-96`}>
            Dokter Tani bekerja sama dengan berbagai organisasi, perusahaan, dan
            institusi terkemuka untuk memberikan solusi pertanian terbaik bagi
            Anda. Berikut adalah beberapa mitra terpercaya kami:
          </p>
        </div>

        {/* LOGO */}
        <div className="flex w-full items-center md:w-1/2 md:justify-end">
          <div className="mt-10 flex max-w-[450px] flex-wrap justify-end gap-4 md:w-full md:max-w-none lg:mt-0">
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
                  className="transition-all hover:grayscale-0 lg:grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mitra;
