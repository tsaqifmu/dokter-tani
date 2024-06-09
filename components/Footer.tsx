import { navLinks, socialMedia } from "@/constant";
import { styles } from "@/constant/style";
import { logoDokTanFooter } from "@/public/logo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} bg-greenDokTan`}>
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} ${styles.paddingY}`}
      >
        <div className="flex flex-col gap-8 border-b-4 border-white pb-5 md:flex-row md:items-center md:justify-between">
          <div className="w-40 space-y-8 xl:w-96">
            <div>
              <Image
                src={logoDokTanFooter}
                width={300}
                height={300}
                alt="logo dokter tani"
                className="w-72"
              />
              <p className="mt-3 text-sm text-slate-300">
                Klinik pertanian yang menyediakan layanan konsultasi, diagnosis,
                dan resep obat untuk meningkatkan kesehatan dan produktivitas
                tanaman Anda.
              </p>
            </div>
            <div className="w-3/4">
              <div className="flex items-center">
                <p className="text-nowrap font-semibold text-white">
                  Ikuti Kami di
                </p>
                <div className="ml-3 h-0 w-2/3 rounded-full border-2" />
              </div>
              <div className="mt-3 flex gap-2 lg:justify-between lg:gap-0">
                {socialMedia.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-green-900 p-3 transition-all hover:bg-orangeDokTan"
                  >
                    <Image
                      src={item.icon}
                      alt={item.id}
                      className="text-white"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-5 md:flex-row md:justify-end xl:gap-14">
            <ul className="flex flex-col gap-4 whitespace-nowrap text-end">
              <h3 className="text-[16px] text-sm font-semibold text-white md:text-lg">
                Akses Cepat
              </h3>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className="cursor-pointer text-[16px] text-sm font-normal text-white transition-all hover:font-semibold md:text-sm"
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-5 text-center text-xs font-medium text-white md:text-base xl:text-right xl:text-lg">
          ©{new Date().getFullYear()}{" "}
          <Link
            href={"/"}
            target="_blank"
            className="transition-all hover:text-orangeDokTan"
          >
            doktertani.co.id.
          </Link>
          <br /> Semua Hak Cipta Dilindungi.
        </p>
      </div>
    </section>
  );
};

export default Footer;
