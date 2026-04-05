import Hero from "@/components/Hero";
import Mitra from "@/components/Mitra";
import NavBar from "@/components/Navbar";
import Layanan from "@/components/Layanan";
import Team from "@/components/Team";
import Dedikasi from "@/components/Dedikasi";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dokter Tani",
  url: "https://www.doktertani.co.id",
  logo: "https://www.doktertani.co.id/logo/logo-dokter-tani.png",
  description:
    "Klinik pertanian yang menyediakan pupuk organik, fungisida hayati, dan konsultasi untuk meningkatkan produktivitas tanaman.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indonesia",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.instagram.com/doktertani.id",
    "https://www.facebook.com/doktertani",
    "https://wa.me/6281234567890",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Indonesian",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
