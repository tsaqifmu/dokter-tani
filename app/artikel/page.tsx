import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { styles } from "@/constant/style";

export const metadata: Metadata = {
  title: "Artikel Pertanian & Tips Budidaya - Dokter Tani",
  description:
    "Baca 1000+ artikel pertanian, tips budidaya, panduan pemupukan, dan solusi hama penyakit tanaman. Ditulis oleh Tim Ahli Dokter Tani.",
  keywords:
    "artikel pertanian, tips budidaya, panduan pemupukan, hama tanaman, penyakit tanaman, pertanian organik",
  openGraph: {
    title: "Artikel Pertanian & Tips Budidaya - Dokter Tani",
    description:
      "1000+ artikel pertanian dan tips budidaya dari Tim Ahli Dokter Tani.",
    url: "https://www.doktertani.co.id/artikel",
    siteName: "Dokter Tani",
    locale: "id_ID",
    type: "website",
  },
  alternates: {
    canonical: "https://www.doktertani.co.id/artikel",
  },
};

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedDate: string;
  readingTime: number;
  featuredImage?: string;
  featuredImageAlt?: string;
}

async function getArticles(page = 1, pageSize = 12): Promise<{
  articles: Article[];
  pagination: { page: number; pageSize: number; pageCount: number; total: number };
}> {
  try {
    const res = await fetch(
      `https://api.doktertani.co.id/api/articles?sort=publishedDate:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}&fields[0]=title&fields[1]=slug&fields[2]=excerpt&fields[3]=category&fields[4]=author&fields[5]=publishedDate&fields[6]=readingTime&fields[7]=featuredImage&fields[8]=featuredImageAlt`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("Failed to fetch");
    const data = await res.json();
    return {
      articles: data.data || [],
      pagination: data.meta?.pagination || { page: 1, pageSize: 12, pageCount: 0, total: 0 },
    };
  } catch {
    return {
      articles: [],
      pagination: { page: 1, pageSize: 12, pageCount: 0, total: 0 },
    };
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArtikelPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const { articles, pagination } = await getArticles(page);

  return (
    <>
      <NavBar />
      <main className="bg-slate-100 text-slate-800">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-[#1b3d2d] pt-[74px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2d] from-[25%] via-[#1b3d2d]/80 to-[#1b3d2d]/60" />
          <div
            className={`${styles.paddingX} relative z-10 flex min-h-[300px] items-center lg:min-h-[400px]`}
          >
            <div className="flex max-w-[580px] flex-col gap-4 text-white">
              <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
                Artikel{" "}
                <span className="italic text-orangeDokTan">Pertanian</span>
              </h1>
              <p className="text-sm text-slate-200 md:max-w-sm lg:text-base">
                Tips budidaya, panduan pemupukan, dan solusi hama penyakit dari
                Tim Ahli Dokter Tani.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section
          className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}
        >
          <div className={styles.boxWidth}>
            {articles.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-lg text-slate-500">
                  Artikel sedang disiapkan. Silakan kembali lagi nanti.
                </p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {articles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/artikel/${article.slug}`}
                      className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative h-[200px] w-full overflow-hidden bg-green-50">
                        {article.featuredImage ? (
                          <Image
                            src={article.featuredImage}
                            alt={article.featuredImageAlt || article.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center">
                            <span className="text-4xl">🌱</span>
                          </div>
                        )}
                        <div className="absolute left-3 top-3">
                          <span className="rounded-full bg-greenDokTan px-3 py-1 text-xs font-semibold text-white">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 p-4">
                        <h3 className="line-clamp-2 text-lg font-bold text-slate-800 group-hover:text-greenDokTan">
                          {article.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-slate-500">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-400">
                          <span>{formatDate(article.publishedDate)}</span>
                          <span>·</span>
                          <span>{article.readingTime} menit baca</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Pagination */}
                {pagination.pageCount > 1 && (
                  <div className="mt-12 flex justify-center gap-2">
                    {Array.from(
                      { length: Math.min(pagination.pageCount, 10) },
                      (_, i) => i + 1
                    ).map((p) => (
                      <Link
                        key={p}
                        href={`/artikel?page=${p}`}
                        className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                          p === page
                            ? "bg-greenDokTan text-white"
                            : "bg-white text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {p}
                      </Link>
                    ))}
                    {pagination.pageCount > 10 && (
                      <span className="px-2 py-2 text-slate-400">...</span>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
