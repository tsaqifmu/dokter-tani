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
        <section className={`${styles.flexCenter} relative pt-[74px]`}>
          {/* Text Content */}
          <div
            className={`${styles.paddingX} absolute top-1/2 z-10 flex w-full -translate-y-1/3 flex-col gap-1 space-y-1 text-white lg:gap-4 lg:space-y-0`}
          >
            <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
              Produk{" "}
              <span className="italic text-orangeDokTan">Kami</span>
            </h1>
            <h3 className="text-base font-normal md:text-lg lg:text-2xl">
              Solusi Pertanian Organik <br /> Berkualitas Tinggi
            </h3>
            <p className="w-2/3 text-sm text-slate-200 sm:w-1/2 md:w-96 lg:text-base">
              Solusi pertanian organik berkualitas tinggi untuk hasil panen yang
              lebih baik dan pertanian yang berkelanjutan.
            </p>
          </div>
          {/* Background Image */}
          <Image
            src="/products-hero-bg.png"
            alt="Produk Dokter Tani"
            width={1920}
            height={1080}
            className="h-[600px] object-cover object-right brightness-50 md:brightness-100 lg:h-[700px] lg:w-full"
            priority
          />
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
