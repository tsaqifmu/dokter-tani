import Hero from "@/components/Hero";
import Mitra from "@/components/Mitra";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Mitra />
      </main>
    </>
  );
}
