"use client";

import { navLinks } from "@/constant";
import { styles } from "@/constant/style";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed z-50 flex w-full items-center justify-center bg-white shadow-xl">
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} flex w-full items-center justify-between py-3`}
      >
        <Link href="/">
          <img
            className="w-[150px] xl:w-[212px]"
            src={"/Logo Dokter Tani.png"}
            alt="logo"
          />
        </Link>

        {/* FOR MOBILE */}
        <div className="flex flex-1 items-center justify-end lg:hidden">
          <Image
            src={toggle ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <nav
            className={`${
              toggle ? `flex` : `hidden`
            } min-w[140px] sidebar absolute right-0 top-20 z-50 mx-4 my-2 flex-col rounded-xl bg-white p-6 shadow-2xl`}
          >
            <ul className="flex flex-1 list-none flex-col items-center justify-end">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium text-slate-800 ${
                    index === navLinks.length - 1 ? `mr-0` : `mb-4`
                  }`}
                >
                  <Link href={`${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 hover:translate-y-2">
              {/* <ButtonBelajar about={about} /> */}
            </div>
          </nav>
        </div>
        {/* FOR DESKTOP */}
        <nav className="hidden items-center justify-between lg:flex lg:gap-16">
          <ul className="flex flex-1 list-none items-center justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`hover:text-greenWA cursor-pointer text-base font-medium text-slate-800 transition-all xl:text-lg ${
                  index === navLinks.length - 1 ? `mr-0` : `mr-[30px]`
                }`}
              >
                <Link href={`${nav.id}`}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden transition-all hover:-translate-y-1 lg:flex">
            {/* <ButtonBelajar about={about} /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
