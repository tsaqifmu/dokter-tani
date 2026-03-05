import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ButtonKonsultasi } from "@/components/ButtonKonsultasi";
import { styles } from "@/constant/style";

export const metadata = {
  title: "Tentang Kami - Dokter Tani",
  description:
    "Dokter Tani adalah klinik pertanian terpercaya yang berdedikasi dalam membantu petani menjaga kesehatan dan produktivitas tanaman.",
};

/* ─── Hero Section ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1b3d2d] pt-[74px]">
      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/tentang-hero-bg.png"
          alt="Tentang Dokter Tani"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 md:opacity-100"
          priority
        />
      </div>
      {/* Left-to-transparent gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b3d2d] from-[25%] via-[#1b3d2d]/60 via-[90%] to-transparent" />

      {/* Content */}
      <div className={`${styles.paddingX} relative z-10 flex min-h-[600px] items-center lg:min-h-[700px]`}>
        <div className="flex max-w-[580px] flex-col gap-4 text-white">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-7xl">
            Tentang{" "}
            <span className="italic text-orangeDokTan">Dokter Tani</span>
          </h1>
          <h3 className="text-base font-normal md:text-lg lg:text-2xl">
            Klinik Pertanian Terpercaya <br /> untuk Kesehatan Tanaman Anda
          </h3>
          <p className="text-sm text-slate-200 md:max-w-sm lg:text-base">
            Menjaga kesehatan dan produktivitas tanaman Anda dengan layanan
            konsultasi serta produk pertanian berkualitas dari Dokter Tani.
          </p>
          <div className="transition-all hover:-translate-y-1">
            <Link
              href="https://api.whatsapp.com/send?phone=6285122093761&text=Halo%20admin%20Dokter%20Tani%2C%20saya%20ingin%20konsultasi"
              target="_blank"
            >
              <button className="flex w-fit items-center gap-x-2 rounded-lg border-2 border-orangeDokTan bg-orangeDokTan px-5 py-2.5 shadow-lg transition-all hover:border-orange-400 hover:bg-orange-400">
                <Image
                  src="/phone.svg"
                  height={20}
                  width={20}
                  alt="phone"
                  className="w-4 lg:w-5"
                />
                <span className="text-sm font-medium text-white lg:text-base">
                  Hubungi Kami
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ───────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
      <div
        className={`${styles.boxWidth} ${styles.paddingY} flex flex-col items-center gap-10 lg:flex-row lg:gap-16`}
      >
        {/* Left Text */}
        <div className="flex-1 space-y-4">
          <nav className="text-sm text-slate-400">
            <Link href="/" className="transition-colors hover:text-slate-600">
              Beranda
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-slate-600">Tentang Kami</span>
          </nav>

          <h2
            className={`${styles.heading1} italic text-greenDokTan`}
          >
            Tentang Dokter Tani
          </h2>

          <p className="leading-relaxed text-slate-600 md:text-base">
            Dokter Tani adalah klinik pertanian terpercaya yang berdedikasi
            dalam membantu petani menjaga kesehatan dan produktivitas tanaman.
            Berdiri sejak tahun 2020, kami berkomitmen untuk memberikan
            konsultasi profesional serta memproduksi produk-produk pertanian
            berkualitas untuk mendukung keberhasilan usaha pertanian Anda.
          </p>
          <p className="leading-relaxed text-slate-600 md:text-base">
            Dengan tim ahli pertanian berpengalaman, kami hadir untuk
            memberikan solusi terbaik bagi setiap permasalahan tanaman Anda,
            mulai dari diagnosis penyakit hingga rekomendasi produk yang tepat
            dan ramah lingkungan.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex flex-1 justify-center">
          <Image
            src="/tentang-about.png"
            alt="Tentang Dokter Tani"
            width={500}
            height={400}
            className="h-auto w-full max-w-[460px] rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Differentiators Section ─────────────────────────────────── */
const differentiators = [
  {
    icon: "/tentang-icon-expert.png",
    title: "Ahli Pertanian Berpengalaman",
    description:
      "Tim kami terdiri dari para ahli pertanian yang berpengalaman, siap memberikan konsultasi serta solusi untuk permasalahan tanaman Anda.",
  },
  {
    icon: "/tentang-icon-product.png",
    title: "Produk Pertanian Berkualitas",
    description:
      "Kami menyediakan produk-produk pertanian yang telah teruji dan berkualitas tinggi, aman digunakan, dan ramah lingkungan.",
  },
  {
    icon: "/tentang-icon-friendly.png",
    title: "Pendekatan Ramah Petani",
    description:
      "Kami mengutamakan kepuasan petani dengan pendekatan yang ramah, konsultasi yang mudah diakses, dan support yang responsif.",
  },
];

function DifferentiatorsSection() {
  return (
    <section
      className={`${styles.paddingX} ${styles.flexCenter} bg-slate-50`}
    >
      <div className={`${styles.boxWidth} ${styles.paddingY}`}>
        <h2
          className={`${styles.heading1} mb-12 text-center italic text-greenDokTan`}
        >
          Apa yang Membuat Kami{" "}
          <span className="text-orangeDokTan">Berbeda?</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-greenDokTan/10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="mb-3 text-lg font-bold text-slate-800">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Vision & Mission Section ────────────────────────────────── */
function VisionMissionSection() {
  return (
    <section className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
      <div className={`${styles.boxWidth} ${styles.paddingY}`}>
        <h2
          className={`${styles.heading1} mb-12 text-center italic text-greenDokTan`}
        >
          Visi &amp; Misi{" "}
          <span className="text-orangeDokTan">Kami</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Visi Card */}
          <div className="space-y-8 rounded-2xl border-l-4 border-greenDokTan bg-slate-50 p-8 shadow-sm">
            {/* Visi */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-greenDokTan">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-greenDokTan">
                  Visi Kami
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Menjadi mitra utama petani dalam mewujudkan pertanian yang
                  sehat, produktif, dan berkelanjutan di Indonesia.
                </p>
              </div>
            </div>

            {/* Teruji */}
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-greenDokTan">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-greenDokTan">
                  Teruji dan Terpercaya
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                  Kami telah berpengalaman bertahun-tahun dalam menyelesaikan
                  berbagai masalah dan tantangan di dunia pertanian. Dengan
                  rekam jejak yang terbukti, kami siap menjadi mitra terpercaya
                  Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Misi Card */}
          <div className="rounded-2xl border-l-4 border-orangeDokTan bg-slate-50 p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orangeDokTan">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-orangeDokTan">
                  Misi Kami
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orangeDokTan" />
                    <span className="text-sm leading-relaxed text-slate-600 md:text-base">
                      Memberikan layanan profesional produk-produk pertanian
                      dan alat-alat yang aman dan terpercaya, serta berkualitas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orangeDokTan" />
                    <span className="text-sm leading-relaxed text-slate-600 md:text-base">
                      Bermitra dengan petani dan pelaku pertanian progresif
                      di seluruh Indonesia.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orangeDokTan" />
                    <span className="text-sm leading-relaxed text-slate-600 md:text-base">
                      Dilandasi dengan prinsip transparansi dan mengutamakan
                      mutu serta tanggung jawab terhadap lingkungan.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orangeDokTan" />
                    <span className="text-sm leading-relaxed text-slate-600 md:text-base">
                      Mewujudkan keberlangsungan dan perkembangan pertanian
                      yang baik bagi petani dan masyarakat di Indonesia.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─────────────────────────────────────────────── */
const ctaFeatures = [
  {
    icon: (
      <svg
        className="h-7 w-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Teruji dan Terpercaya",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Ramah Lingkungan",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Harga Terjangkau",
  },
  {
    icon: (
      <svg
        className="h-7 w-7 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Dukungan Konsultasi",
    description:
      "Kami siap membantu kapan saja melalui konsultasi langsung produk.",
  },
];

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-greenDokTan">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/tentang-hero-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}
      >
        <div
          className={`${styles.boxWidth} py-16 text-center md:py-20`}
        >
          <h2
            className={`${styles.heading1} mb-10 text-white`}
          >
            Bergabung Menilih Mitra{" "}
            <span className="italic text-orangeDokTan">Dokter Tani!</span>
          </h2>

          <div className="mb-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {ctaFeatures.map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-bold text-white md:text-base">
                  {feature.title}
                </h3>
                {feature.description && (
                  <p className="text-xs text-white/60">{feature.description}</p>
                )}
              </div>
            ))}
          </div>

          <div className="transition-all hover:-translate-y-1">
            <Link
              href="https://api.whatsapp.com/send?phone=6285122093761&text=Halo%20admin%20Dokter%20Tani%2C%20saya%20ingin%20konsultasi"
              target="_blank"
            >
              <button className="inline-flex items-center gap-x-2 rounded-lg border-2 border-orangeDokTan bg-orangeDokTan px-8 py-3 shadow-lg transition-all hover:border-orange-400 hover:bg-orange-400">
                <Image
                  src="/phone.svg"
                  height={20}
                  width={20}
                  alt="phone"
                  className="w-5"
                />
                <span className="text-base font-semibold text-white">
                  Hubungi Kami
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */
export default function TentangPage() {
  return (
    <>
      <NavBar />
      <main className="bg-slate-100 text-slate-800">
        <HeroSection />
        <AboutSection />
        <DifferentiatorsSection />
        <VisionMissionSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
