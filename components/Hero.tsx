import { styles } from "@/constant/style";
import Image from "next/image";
import React from "react";
import { ButtonKonsultasi } from "./ButtonKonsultasi";

// Component for the text content of the Hero section
const HeroContent = () => {
  return (
    <div
      className={`${styles.paddingX} absolute top-1/2 z-10 flex w-full -translate-y-1/3 flex-col gap-1 space-y-1 text-white lg:gap-4 lg:space-y-0 xl:max-w-[1280px]`}
    >
      <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
        Selamat Datang di <br />
        Dokter Tani
      </h1>
      <h3 className="text-base font-normal md:text-lg lg:text-2xl">
        Klinik Pertanian Terpercaya <br /> untuk Kesehatan Tanaman Anda
      </h3>
      <p
        className={`w-2/3 text-sm text-slate-200 sm:w-1/2 md:w-96 lg:text-base`}
      >
        Klinik pertanian yang menyediakan layanan konsultasi, diagnosis, dan
        resep obat untuk meningkatkan kesehatan dan produktivitas tanaman Anda.
      </p>
      <div className="transition-all hover:-translate-y-1">
        <ButtonKonsultasi />
      </div>
    </div>
  );
};

// Component for the Hero image
const HeroImage = () => {
  return (
    <Image
      src={"/Hero.png"}
      alt="Selamat datang di dokter tani"
      width={1920}
      height={1080}
      className="h-[600px] object-cover object-right brightness-50 md:brightness-100 lg:h-[700px] lg:w-full"
    />
  );
};

const Hero = () => {
  return (
    <section id="beranda" className={`${styles.flexCenter} relative pt-[65px]`}>
      <HeroContent />
      <HeroImage />
    </section>
  );
};

export default Hero;
