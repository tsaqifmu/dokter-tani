import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { styles } from "@/constant/style";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  category: string;
  tags: string[];
  author: string;
  publishedDate: string;
  readingTime: number;
  featuredImage?: string;
  featuredImageAlt?: string;
  faq?: { question: string; answer: string }[];
  tableOfContents?: { id: string; title: string; level: number }[];
  relatedProducts?: string[];
}

interface PageProps {
  params: { slug: string };
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(
      `https://api.doktertani.co.id/api/articles?filters[slug][$eq]=${encodeURIComponent(slug)}&pagination[pageSize]=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.data?.[0] || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Artikel Tidak Ditemukan - Dokter Tani" };

  const url = `https://www.doktertani.co.id/artikel/${article.slug}`;

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription || article.excerpt,
    keywords: [article.focusKeyword, ...(article.secondaryKeywords || [])].join(", "),
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      url,
      siteName: "Dokter Tani",
      type: "article",
      locale: "id_ID",
      publishedTime: article.publishedDate,
      authors: [article.author],
      ...(article.featuredImage && {
        images: [
          {
            url: article.featuredImage,
            width: 1200,
            height: 630,
            alt: article.featuredImageAlt || article.title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
    },
    alternates: { canonical: url },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription || article.excerpt,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "Dokter Tani",
      logo: {
        "@type": "ImageObject",
        url: "https://www.doktertani.co.id/logo/logoNavbar.png",
      },
    },
    datePublished: article.publishedDate,
    mainEntityOfPage: `https://www.doktertani.co.id/artikel/${article.slug}`,
    ...(article.featuredImage && { image: article.featuredImage }),
  };

  const jsonLdFaq =
    article.faq && article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: "https://www.doktertani.co.id" },
      { "@type": "ListItem", position: 2, name: "Artikel", item: "https://www.doktertani.co.id/artikel" },
      { "@type": "ListItem", position: 3, name: article.title },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      )}
      <NavBar />
      <main className="bg-slate-100 text-slate-800">
        {/* Hero/Breadcrumb */}
        <section className="bg-[#1b3d2d] pb-8 pt-[74px]">
          <div className={`${styles.paddingX} mx-auto max-w-4xl pt-8`}>
            <nav className="mb-4 flex flex-wrap items-center text-sm text-white/60">
              <Link href="/" className="transition-colors hover:text-white/90">
                Beranda
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/artikel"
                className="transition-colors hover:text-white/90"
              >
                Artikel
              </Link>
              <span className="mx-2">/</span>
              <span className="line-clamp-1 text-white">{article.title}</span>
            </nav>
            <span className="mb-3 inline-block rounded-full bg-greenDokTan/20 px-3 py-1 text-xs font-semibold text-green-300">
              {article.category}
            </span>
            <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {article.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span>Oleh {article.author}</span>
              <span>·</span>
              <span>{formatDate(article.publishedDate)}</span>
              <span>·</span>
              <span>{article.readingTime} menit baca</span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className={`${styles.paddingX} py-10`}>
          <article className="mx-auto max-w-4xl">
            {article.featuredImage && (
              <div className="relative mb-8 h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
                <Image
                  src={article.featuredImage}
                  alt={article.featuredImageAlt || article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Table of Contents */}
            {article.tableOfContents && article.tableOfContents.length > 0 && (
              <div className="mb-8 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="mb-3 text-lg font-bold text-slate-800">
                  Daftar Isi
                </h2>
                <ul className="space-y-2">
                  {article.tableOfContents.map((item, i) => (
                    <li
                      key={i}
                      style={{ paddingLeft: `${(item.level - 1) * 16}px` }}
                    >
                      <a
                        href={`#${item.id}`}
                        className="text-sm text-greenDokTan hover:underline"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Body */}
            <div
              className="prose prose-lg mx-auto max-w-none prose-headings:text-slate-800 prose-p:text-slate-600 prose-a:text-greenDokTan prose-strong:text-slate-700 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* FAQ Section */}
            {article.faq && article.faq.length > 0 && (
              <div className="mt-12 rounded-xl border border-slate-200 bg-white p-6">
                <h2 className="mb-6 text-xl font-bold text-slate-800">
                  Pertanyaan yang Sering Diajukan (FAQ)
                </h2>
                <div className="space-y-4">
                  {article.faq.map((item, i) => (
                    <details key={i} className="group">
                      <summary className="cursor-pointer rounded-lg bg-slate-50 p-4 font-semibold text-slate-700 hover:bg-slate-100">
                        {item.question}
                      </summary>
                      <p className="px-4 pt-2 text-sm text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
