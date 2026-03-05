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
        <section className={`${styles.flexCenter} relative pt-[74px]`}>
          {/* Text Content */}
          <div
            className={`${styles.paddingX} absolute top-1/2 z-10 flex w-full -translate-y-1/3 flex-col gap-1 space-y-1 text-white lg:gap-4 lg:space-y-0 xl:max-w-[1280px]`}
          >
            <nav className="flex flex-wrap items-center text-sm text-white/60">
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
            <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
              {product.name}
            </h1>
            <p className="w-2/3 text-sm text-slate-200 sm:w-1/2 md:w-96 lg:text-base">
              {product.description.slice(0, 150)}
            </p>
          </div>
          {/* Background Image */}
          <Image
            src="/product-detail-bg.png"
            alt={product.name}
            width={1920}
            height={1080}
            className="h-[400px] object-cover object-right brightness-50 md:brightness-100 lg:h-[500px] lg:w-full"
            priority
          />
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
