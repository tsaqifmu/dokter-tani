import Hero from "@/components/Hero";
import Mitra from "@/components/Mitra";
import NavBar from "@/components/Navbar";
import Layanan from "@/components/Layanan";
import Team from "@/components/Team";
import Dedikasi from "@/components/Dedikasi";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="bg-slate-100 text-slate-800">
        <Hero />
        <Mitra />
        <Layanan />
        <Dedikasi />
        <Team />
      </main>
      <Footer />
    </>
  );
}
