import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";
import { ButtonKonsultasi } from "./ButtonKonsultasi";

const Hero = () => {
  return (
    <section id="beranda" className="relative w-full overflow-hidden bg-[#1b3d2d] pt-[74px]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/Hero.png"
          alt="Selamat datang di dokter tani"
          fill
          className="object-cover object-center opacity-40 md:opacity-100"
          priority
        />
      </div>
      {/* Left-to-transparent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2d] via-[#1b3d2d]/80 to-transparent" />

      {/* Content */}
      <div className={`${styles.paddingX} relative z-10 flex min-h-[600px] items-center lg:min-h-[700px]`}>
        <div className="flex max-w-[580px] flex-col gap-4 text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            Selamat Datang di <br />
            Dokter Tani
          </h1>
          <h3 className="text-base font-normal md:text-lg lg:text-2xl">
            Klinik Pertanian Terpercaya <br /> untuk Kesehatan Tanaman Anda
          </h3>
          <p className="text-sm text-slate-200 md:max-w-sm lg:text-base">
            Klinik pertanian yang menyediakan layanan konsultasi, diagnosis, dan
            resep obat untuk meningkatkan kesehatan dan produktivitas tanaman Anda.
          </p>
          <div className="transition-all hover:-translate-y-1">
            <ButtonKonsultasi />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
