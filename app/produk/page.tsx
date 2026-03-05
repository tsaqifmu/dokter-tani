import Image from "next/image";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/constant/products";
import { styles } from "@/constant/style";

export const metadata = {
  title: "Produk Kami - Dokter Tani",
  description:
    "Produk pertanian organik berkualitas tinggi dari Dokter Tani. Pupuk organik, fungisidal hayati, dan pestisidal hayati untuk pertanian berkelanjutan.",
};

export default function ProdukPage() {
  return (
    <>
      <NavBar />
      <main className="bg-slate-100 text-slate-800">
        {/* Hero Section */}
        <section className="relative flex min-h-[340px] items-center justify-center overflow-hidden md:min-h-[420px] pt-[74px]">
          {/* Background Image */}
          <Image
            src="/products-hero-bg.png"
            alt="Products hero background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-greenDokTan/80 to-greenDokTan/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center px-4 text-center">
            <h1
              className={`${styles.heading1} mb-4 text-white drop-shadow-lg`}
            >
              Produk <span className="italic text-orangeDokTan">Kami</span>
            </h1>
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              Solusi pertanian organik berkualitas tinggi untuk hasil panen yang
              lebih baik dan pertanian yang berkelanjutan.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section
          className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}
        >
          <div className={styles.boxWidth}>
            <div className="mb-10 text-center">
              <h2
                className={`${styles.heading2} mb-2 italic text-greenDokTan`}
              >
                Katalog Produk
              </h2>
              <p className={styles.paragraph}>
                Temukan berbagai produk organik terbaik untuk kebutuhan pertanian
                Anda
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
