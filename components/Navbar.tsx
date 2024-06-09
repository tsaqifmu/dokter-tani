"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { navLinks } from "@/constant";
import { styles } from "@/constant/style";
import { ButtonKonsultasi } from "@/components/ButtonKonsultasi";
import { logoDokTanNavbar } from "@/public/logo";

const NavItem = ({
  href,
  label,
  isMobile,
}: {
  href: string;
  label: string;
  isMobile: boolean;
}) => (
  <li
    className={`${styles.navLink} ${isMobile ? styles.navLinkMobile : styles.navLinkDesktop}`}
  >
    <Link href={href}>{label}</Link>
  </li>
);

const Logo = () => (
  <Link href="/">
    <Image
      className="w-[150px] xl:w-[212px]"
      src={logoDokTanNavbar}
      width={212}
      height={50}
      alt="logo dokter tani"
    />
  </Link>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header
      className={`${styles.flexCenter} fixed z-50 w-full bg-white shadow-xl`}
    >
      <div
        className={`${styles.boxWidthNavFoot} ${styles.paddingX} flex w-full items-center justify-between py-3`}
      >
        <Logo />

        {/* FOR MOBILE */}
        <div className={`${styles.flexJustifyEnd} lg:hidden`}>
          <Image
            src={toggleMenu ? "/close.svg" : "/menu.svg"}
            width={28}
            height={28}
            alt="menu"
            className="object-contain"
            onClick={() => setToggleMenu((prev) => !prev)}
          />

          <nav
            className={`${toggleMenu ? `flex` : `hidden`} ${styles.mobileMenu}`}
          >
            <ul className={`${styles.flexJustifyEnd} list-none flex-col`}>
              {navLinks.map((nav) => (
                <NavItem
                  href={nav.id}
                  label={nav.title}
                  key={nav.id}
                  isMobile={true}
                />
              ))}
            </ul>
            <div className="mt-4 hover:translate-y-2">
              <ButtonKonsultasi />
            </div>
          </nav>
        </div>
        {/* FOR DESKTOP */}
        <nav className="hidden lg:flex lg:gap-16">
          <ul className={`${styles.flexJustifyEnd} list-none`}>
            {navLinks.map((nav) => (
              <NavItem
                href={nav.id}
                label={nav.title}
                key={nav.id}
                isMobile={false}
              />
            ))}
          </ul>
          <div className="hidden transition-all hover:-translate-y-1 lg:flex">
            <ButtonKonsultasi />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
