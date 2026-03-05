import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { styles } from "@/constant/style";

export const metadata = {
  title: "Hubungi Kami - Dokter Tani",
  description:
    "Hubungi Dokter Tani untuk mendapatkan konsultasi dan layanan pertanian terbaik.",
};

/* ─── Curved Divder Component ────────────────────────────── */
const WaveDivider = () => (
  <div className="w-full relative -mb-1 overflow-hidden" style={{ height: "120px" }}>
    <svg
      viewBox="0 0 1440 120"
      className="absolute bottom-0 w-full h-full object-cover"
      preserveAspectRatio="none"
    >
      <path
        fill="#2E5F4C" // Matches greenDokTan
        d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
      ></path>
    </svg>
  </div>
);

/* ─── Hero Section ────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#224A37] pt-[74px]">
      <div className="absolute inset-0 flex">
        {/* Dark Green Gradient Fade on the Left */}
        <div className="z-10 w-full bg-gradient-to-r from-[#1b3d2d] via-[#224A37]/90 to-transparent lg:w-3/5" />
        {/* Hero Image on the Right */}
        <div className="absolute inset-0 right-0 left-auto w-full lg:w-2/3">
          <Image
            src="/hubungi-hero.png"
            alt="Customer Support"
            fill
            className="object-cover object-center opacity-40 lg:opacity-100"
            priority
          />
        </div>
      </div>

      <div
        className={`${styles.paddingX} ${styles.flexCenter} relative z-20 mx-auto min-h-[400px] w-full lg:min-h-[500px]`}
      >
        <div className="flex w-full flex-col justify-center pb-24 md:pb-32 lg:w-1/2 lg:pb-0">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Hubungi Kami
          </h1>
          <p className="max-w-md pb-8 text-sm leading-relaxed text-slate-200 md:text-base">
            Kami siap membantu Anda dengan konsultasi dan layanan pertanian
            terbaik.
          </p>
          <div className="transition-all hover:-translate-y-1">
            <Link
              href="https://api.whatsapp.com/send?phone=6285122093761&text=Halo%20admin%20Dokter%20Tani%2C%20saya%20ingin%20konsultasi"
              target="_blank"
            >
              <button className="flex w-fit items-center gap-x-2 rounded-lg border-2 border-orangeDokTan bg-orangeDokTan px-6 py-3 shadow-lg transition-all hover:border-orange-400 hover:bg-orange-400">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm font-semibold text-white lg:text-base">
                  Hubungi Sekarang
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Info Cards ────────────────────────────────────── */
const contactInfo = [
  {
    icon: (
      <svg
        className="h-6 w-6 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Alamat Kami",
    value: "Jl. Pertanian No. 123, Jakarta 56789",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-green-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Telepon & WhatsApp",
    value: "+62-851-2209-3761",
  },
  {
    icon: (
      <svg
        className="h-6 w-6 text-orangeDokTan"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Kami",
    value: "info@doktertani.id",
  },
];

function CardsSection() {
  return (
    <section className={`relative z-30 mx-auto -mt-16 ${styles.paddingX} md:-mt-24`}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {contactInfo.map((info, i) => (
          <div
            key={i}
            className="flex flex-col border-t-4 border-white bg-white p-6 shadow-xl lg:px-8 lg:py-10 transition-all hover:-translate-y-1 hover:border-orangeDokTan rounded-sm"
          >
            <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="rounded-full bg-slate-50 p-2">{info.icon}</div>
              <h3 className="font-bold text-slate-800">{info.title}</h3>
            </div>
            <p className="text-sm font-medium text-slate-600 md:text-base">
              {info.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Form & Map Section ──────────────────────────────────────── */
function FormAndMapSection() {
  return (
    <section className={`mx-auto w-full ${styles.paddingX} py-16 lg:py-24`}>
      <div className="flex flex-col gap-16 lg:flex-row lg:gap-12">
        {/* Form Container */}
        <div className="flex-1">
          <h2 className="mb-3 text-2xl font-bold text-[#224A37] md:text-3xl">
            Kirim Pesan kepada Kami
          </h2>
          <p className="mb-8 text-sm text-slate-500 md:text-base">
            Silakan isi formulir di bawah ini untuk menghubungi kami. Kami akan
            segera merespon pesan Anda.
          </p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Nama Anda"
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-greenDokTan focus:outline-none focus:ring-1 focus:ring-greenDokTan"
            />
            <input
              type="email"
              placeholder="Email Anda"
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-greenDokTan focus:outline-none focus:ring-1 focus:ring-greenDokTan"
            />
            <input
              type="tel"
              placeholder="Nomor Telepon"
              className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-greenDokTan focus:outline-none focus:ring-1 focus:ring-greenDokTan"
            />
            <textarea
              placeholder="Pesan Anda"
              rows={5}
              className="w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm focus:border-greenDokTan focus:outline-none focus:ring-1 focus:ring-greenDokTan"
            />
            <button
              type="submit"
              className="rounded-md bg-orangeDokTan px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-600 hover:-translate-y-0.5 sm:w-auto w-full mt-2"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Map Container */}
        <div className="relative flex-1">
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl border-4 border-white shadow-lg bg-slate-200 md:h-[400px]">
            <Image
              src="/hubungi-map.png"
              alt="Peta Lokasi"
              fill
              className="object-cover"
            />
            
            {/* Custom Location Card Floating on Map */}
            <div className="absolute right-0 bottom-0 left-0">
               <div className="m-4 bg-white p-4 shadow-md sm:m-6 rounded-md">
                 <div className="mb-2 flex items-center gap-2">
                   <svg
                     className="h-5 w-5 text-greenDokTan"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                     />
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                     />
                   </svg>
                   <h4 className="font-bold text-slate-800">Lokasi Kami</h4>
                 </div>
                 <p className="text-sm font-medium text-slate-600 mt-2 pl-7">
                   Jl. Pertanian No. 123, Jakarta 56789
                 </p>
               </div>
            </div>
            
            {/* Custom Pin Icon for map center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center">
               <div className="rounded-full bg-white p-2 shadow-lg w-max flex items-center gap-2">
                  <div className="bg-greenDokTan rounded-full p-1.5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                  <span className="font-bold text-slate-800 tracking-wide text-sm pr-2">DOKTER TANI</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Operational Hours & Features Section ────────────────────── */
const bottomFeatures = [
  { img: "/hubungi-feat-1.png", title: "Layanan Konsultasi" },
  { img: "/hubungi-feat-2.png", title: "Diagnosa Tanaman" },
  { img: "/hubungi-feat-3.png", title: "Produk Pertanian" },
  { img: "/hubungi-feat-4.png", title: "Resep Obat" },
];

function OperationalAndFeatures() {
  return (
    <>
      <section className={`mx-auto w-full ${styles.paddingX} pt-4`}>
        <h2 className="mb-4 text-2xl font-bold text-[#224A37]">
          Jam Operasional Kami
        </h2>
        <div className="mb-6 space-y-2 text-sm font-semibold text-slate-600 md:text-base">
          <p>
            <span className="inline-block w-32 border-b border-dotted border-slate-300">Senin - Jumat </span> : 08.00 - 17.00
          </p>
          <p>
            <span className="inline-block w-32 border-b border-dotted border-slate-300">Sabtu</span> : 08.00 - 12.00
          </p>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-500 pb-16 md:pb-20">
          Jangan ragu untuk menghubungi kami pada jam operasional tersebut untuk
          konsultasi dan informasi lebih lanjut.
        </p>
      </section>

      {/* Wave transition into dark green background */}
      <WaveDivider />
      
      {/* Bottom Features section with dark green background */}
      <section className="bg-greenDokTan relative pb-20 pt-4 px-4 w-full">
         <div className="absolute inset-0 bg-[url('/tentang-hero-bg.png')] opacity-10 object-cover opacity-5 mix-blend-overlay"></div>
         <div className={`relative z-10 ${styles.paddingX}`}>
            <div className="grid grid-cols-2 gap-4 gap-y-12 sm:grid-cols-4 md:gap-6 mt-6">
                {bottomFeatures.map((feat, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <div className="relative -mb-10 w-24 h-24 sm:w-32 sm:h-32 z-10 overflow-hidden rounded-full ring-4 ring-white shadow-xl">
                            <Image 
                               src={feat.img}
                               alt={feat.title}
                               fill
                               className="object-cover"
                            />
                        </div>
                        <div className="bg-white w-full rounded-md pt-14 pb-5 shadow-lg text-center h-full flex items-center justify-center min-h-[120px]">
                            <h4 className="font-bold text-[#224A37] text-sm md:text-base px-2">
                                {feat.title}
                            </h4>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>
    </>
  );
}

/* ─── Page Component ─────────────────────────────────────────── */
export default function HubungiKamiPage() {
  return (
    <>
      <NavBar />
      <main className="bg-slate-50 relative">
        <HeroSection />
        <CardsSection />
        <FormAndMapSection />
        <OperationalAndFeatures />
      </main>
      <Footer />
    </>
  );
}
