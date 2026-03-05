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
        <section className="relative w-full overflow-hidden bg-[#1b3d2d] pt-[74px]">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/products-hero-bg.png"
              alt="Produk Dokter Tani"
              fill
              className="object-cover object-center opacity-40 md:opacity-100"
              priority
            />
          </div>
          {/* Left-to-transparent gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2d] from-[25%] via-[#1b3d2d]/60 via-[55%] to-transparent" />

          {/* Content */}
          <div className={`${styles.paddingX} relative z-10 flex min-h-[600px] items-center lg:min-h-[700px]`}>
            <div className="flex max-w-[580px] flex-col gap-4 text-white">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
                Produk{" "}
                <span className="italic text-orangeDokTan">Kami</span>
              </h1>
              <h3 className="text-base font-normal md:text-lg lg:text-2xl">
                Solusi Pertanian Organik <br /> Berkualitas Tinggi
              </h3>
              <p className="text-sm text-slate-200 md:max-w-sm lg:text-base">
                Solusi pertanian organik berkualitas tinggi untuk hasil panen yang
                lebih baik dan pertanian yang berkelanjutan.
              </p>
            </div>
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
