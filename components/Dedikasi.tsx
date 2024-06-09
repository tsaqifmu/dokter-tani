import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";
import { ButtonKonsultasi } from "./ButtonKonsultasi";

const Dedikasi = () => {
  return (
    <section className={`${styles.flexCenter} bg-slate-100 text-slate-800`}>
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} ${styles.paddingY} flex justify-between`}
      >
        <div className="flex w-1/2 justify-center">
          <div className="relative w-full">
            <Image
              src={"/mbaklaras.JPG"}
              width={500}
              height={500}
              alt="dedikasi besar"
              className="absolute left-1/2 right-10 h-[400px] w-[350px] -translate-x-1/2 rounded-xl object-cover"
            />
            <Image
              src={"/pakmardiyat.JPG"}
              width={500}
              height={500}
              alt="dedikasi kecil"
              className="absolute bottom-5 right-0 h-[200px] w-[250px] rounded-xl border-[12px] border-slate-100 object-cover"
            />
            <Image
              src={"/sayur.svg"}
              width={100}
              height={100}
              alt="vegetable"
              className="absolute bottom-3/4 right-16 h-20 translate-y-1/2"
            />
            <Image
              src={"/doktertanikotak.png"}
              width={120}
              height={120}
              alt="dokter tani"
              className="absolute bottom-1/2 left-14 translate-y-1/2 shadow-lg"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-5 pl-10">
          <h1 className="text-4xl font-bold">
            Dedikasi dalam Mendukung Pertanian yang Sehat dan Berkelanjutan
          </h1>
          <p className="text-base text-slate-500">
            Dengan layanan konsultasi, diagnosis, dan resep obat dari para ahli,
            kami berkomitmen untuk memastikan tanaman Anda tumbuh dengan optimal
            dan bebas dari penyakit. Kami hadir untuk membantu petani mencapai
            hasil yang maksimal dan menjaga kelestarian lingkungan.
          </p>
          <ul className="space-y-3">
            <div>
              <li className="list-inside list-disc font-semibold">
                Pendekatan Terpadu dan Berkelanjutan
              </li>
              <p className="ml-5 text-slate-500">
                Kami menerapkan metode pertanian yang ramah lingkungan dan
                berkelanjutan untuk memastikan kelangsungan pertanian di masa
                depan.
              </p>
            </div>
            <div>
              <li className="list-inside list-disc font-semibold">
                Edukasi dan Pelatihan Petani
              </li>
              <p className="ml-5 text-slate-500">
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
