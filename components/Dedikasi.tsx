import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";
import { ButtonKonsultasi } from "./ButtonKonsultasi";
import { doktanKotakPutih } from "@/public/logo";

const Dedikasi = () => {
  return (
    <section className={`${styles.flexCenter} `}>
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} ${styles.paddingY} lg:flex lg:justify-between`}
      >
        <div className="lg:flex lg:w-1/2 lg:justify-center">
          <div className="relative w-full">
            <Image
              src={"/mbaklaras.JPG"}
              width={500}
              height={500}
              alt="dedikasi besar"
              className="h-[400px] w-full rounded-xl object-cover lg:absolute lg:left-1/2 lg:right-10 lg:w-[350px] lg:-translate-x-1/2"
            />
            <Image
              src={"/pakmardiyat.JPG"}
              width={500}
              height={500}
              alt="dedikasi kecil"
              className="absolute -bottom-32 right-0 h-[250px] w-[250px] rounded-xl border-[12px] border-slate-100 object-cover lg:bottom-20 lg:right-0"
            />
            <Image
              src={"/sayur.svg"}
              width={100}
              height={100}
              alt="vegetable"
              className="absolute -top-10 bottom-3/4 right-0 h-20 lg:right-16 lg:translate-y-1/2"
            />
            <Image
              src={doktanKotakPutih}
              width={120}
              height={120}
              alt="dokter tani"
              className="absolute bottom-8 right-48 translate-y-1/2 shadow-lg lg:bottom-1/2 lg:left-14"
            />
          </div>
        </div>
        <div className="mt-36 space-y-5 lg:mt-0 lg:w-1/2 lg:pl-10">
          <h1 className={`${styles.heading1}`}>
            Dedikasi dalam Mendukung Pertanian yang Sehat dan Berkelanjutan
          </h1>
          <p className={`${styles.paragraph}`}>
            Dengan layanan konsultasi, diagnosis, dan resep obat dari para ahli,
            kami berkomitmen untuk memastikan tanaman Anda tumbuh dengan optimal
            dan bebas dari penyakit. Kami hadir untuk membantu petani mencapai
            hasil yang maksimal dan menjaga kelestarian lingkungan.
          </p>
          <ul className="space-y-3">
            <div>
              <li className={`${styles.list}`}>
                Pendekatan Terpadu dan Berkelanjutan
              </li>
              <p className={`${styles.paragraph} ml-5`}>
                Kami menerapkan metode pertanian yang ramah lingkungan dan
                berkelanjutan untuk memastikan kelangsungan pertanian di masa
                depan.
              </p>
            </div>
            <div>
              <li className={`${styles.list}`}>Edukasi dan Pelatihan Petani</li>
              <p className={`${styles.paragraph} ml-5`}>
                Kami menyediakan pelatihan dan edukasi bagi petani untuk
                meningkatkan pengetahuan dan keterampilan mereka dalam mengelola
                pertanian secara efektif.
              </p>
            </div>
          </ul>
          <div className="transition-all hover:-translate-y-1">
            <ButtonKonsultasi />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dedikasi;
