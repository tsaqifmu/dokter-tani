import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.doktertani.co.id"),
  title: {
    default: "Dokter Tani - Solusi Pertanian Organik Indonesia",
    template: "%s | Dokter Tani",
  },
  description:
    "Dokter Tani adalah klinik pertanian yang menyediakan pupuk organik, fungisida hayati, dan konsultasi untuk meningkatkan produktivitas tanaman Anda. 32+ produk terpercaya.",
  keywords: [
    "pupuk organik",
    "fungisida hayati",
    "pertanian organik",
    "dokter tani",
    "POC",
    "PHC",
    "trichoderma",
    "pupuk hayati",
    "pestisida organik",
    "pertanian berkelanjutan",
  ],
  authors: [{ name: "Dokter Tani" }],
  creator: "Dokter Tani",
  publisher: "PT Centra Biotech Indonesia",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.doktertani.co.id",
    siteName: "Dokter Tani",
    title: "Dokter Tani - Solusi Pertanian Organik Indonesia",
    description:
      "Pupuk organik, fungisida hayati, dan konsultasi pertanian terpercaya. 32+ produk untuk hasil panen lebih baik.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dokter Tani - Solusi Pertanian Organik",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dokter Tani - Solusi Pertanian Organik Indonesia",
    description:
      "Pupuk organik, fungisida hayati, dan konsultasi pertanian terpercaya.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.doktertani.co.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
