import { notFound } from "next/navigation";
import Image from "next/image";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductInfo from "@/components/products/ProductInfo";
import ProductTabs from "@/components/products/ProductTabs";
import { products, getProductBySlug } from "@/constant/products";
import { styles } from "@/constant/style";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Produk Tidak Ditemukan - Dokter Tani" };

  return {
    title: `${product.name} - Dokter Tani`,
    description: product.description.slice(0, 155),
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <NavBar />
      <main className="bg-slate-100 text-slate-800">
        {/* Hero / Breadcrumb Section */}
        <section className="relative overflow-hidden bg-greenDokTan py-8 md:py-12 pt-[74px] md:pt-[90px]">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/product-detail-bg.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div
            className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}
          >
            <div className={styles.boxWidth}>
              <nav className="mb-2 flex flex-wrap items-center text-sm text-white/60">
                <a
                  href="/"
                  className="transition-colors hover:text-white/90"
                >
                  Beranda
                </a>
                <span className="mx-2">/</span>
                <a
                  href="/produk"
                  className="transition-colors hover:text-white/90"
                >
                  Produk
                </a>
                <span className="mx-2">/</span>
                <span className="text-white">{product.name}</span>
              </nav>
              <h1 className="text-2xl font-bold text-white md:text-3xl">
                {product.name}
              </h1>
            </div>
          </div>
        </section>

        {/* Product Detail */}
        <section
          className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}
        >
          <div className={styles.boxWidth}>
            <ProductInfo product={product} />
            <ProductTabs product={product} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
