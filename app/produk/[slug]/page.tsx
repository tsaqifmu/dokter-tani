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
        <section className="relative w-full overflow-hidden bg-[#1b3d2d] pt-[74px]">
          {/* Background photo */}
          <div className="absolute inset-0">
            <Image
              src="/product-detail-bg.png"
              alt={product.name}
              fill
              sizes="100vw"
              className="object-cover object-center opacity-40 md:opacity-100"
              priority
            />
          </div>
          {/* Left-to-transparent gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2d] from-[25%] via-[#1b3d2d]/60 via-[90%] to-transparent" />

          {/* Content */}
          <div className={`${styles.paddingX} relative z-10 flex min-h-[400px] items-center lg:min-h-[500px]`}>
            <div className="flex max-w-[580px] flex-col gap-3 text-white">
              <nav className="flex flex-wrap items-center text-sm text-white/60">
                <a href="/" className="transition-colors hover:text-white/90">Beranda</a>
                <span className="mx-2">/</span>
                <a href="/produk" className="transition-colors hover:text-white/90">Produk</a>
                <span className="mx-2">/</span>
                <span className="text-white">{product.name}</span>
              </nav>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                {product.name}
              </h1>
              <p className="text-sm text-slate-200 md:max-w-sm lg:text-base">
                {product.description.slice(0, 150)}
              </p>
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
