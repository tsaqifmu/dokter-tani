import React from "react";

import { styles } from "@/constant/style";

// Component for the paragraph content of the Mitra section
const MitraContent = () => {
  return (
    <div className="md:w-1/2">
      <h3 className="text-base font-semibold text-green-500 lg:text-xl">
        Mitra Kami
      </h3>
      <h1 className="text-3xl font-bold lg:text-5xl">
        Kolaborasi untuk <br /> Pertanian Lebih Baik
      </h1>
      <p className={`${styles.paragraph} mt-2 lg:mt-5 lg:max-w-96`}>
        Dokter Tani bekerja sama dengan Centra Biotech Indonesia, sebuah
        perusahaan terkemuka, untuk memberikan solusi pertanian terbaik dan
        inovatif bagi Anda, memastikan tanaman Anda tumbuh sehat dan produktif.
      </p>
    </div>
  );
};

const Mitra = () => {
  return (
    <section id="mitra" className={`${styles.flexCenter} `}>
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} ${styles.paddingY} h-full md:flex md:space-x-10`}
      >
        <MitraContent />
      </div>
    </section>
  );
};

export default Mitra;
