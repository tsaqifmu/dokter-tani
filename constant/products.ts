export interface ProductReview {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tags: string[];
  price: number;
  stock: "Tersedia" | "Habis";
  unit: string;
  image: string;
  description: string;
  benefits: string[];
  usage: {
    steps: string[];
    image: string;
  };
  reviews: ProductReview[];
  relatedProductIds: string[];
}

export const products: Product[] = [
  {
    id: "1",
    slug: "pupuk-organik-cair",
    name: "Pupuk Organik Cair",
    category: "Pupuk Organik",
    tags: ["Pupuk", "Organik", "Cair"],
    price: 50000,
    stock: "Tersedia",
    unit: "1 Liter",
    image: "/products/pupuk-organik-cair.png",
    description:
      "Pupuk Organik Cair tersusun dari bahan-bahan alami dagati skati/mologa pasti taperahari tanaman taman terholising dan berobasi. Gabernaso air tanaman korea pangen. Hiega kileap tanaman kambang, basar keripak bemosk. Hega meatan jongo hog daleuran tanaman. Pat ken smegut neit dera/biasa.",
    benefits: [
      "Menambah nutrisi lengkap bagi tanaman",
      "Meningkatkan pertumbuhan dan hasil panen",
      "Memperkuat daya tahan tanaman terhadap penyakit",
      "Aman dan ramah lingkungan",
    ],
    usage: {
      steps: [
        "Campurkan 10 ml Pupuk Organik Cair dengan 1 liter air bersih",
        "Semprotkan larutan secara merata ke daun dan bagian akar tanaman",
        "Lakukan penyemprotan setiap 1-2 minggu sekali untuk hasil optimal.",
      ],
      image: "/products/pupuk-organik-cair-usage.png",
    },
    reviews: [
      {
        id: "r1",
        name: "Pak Budi",
        rating: 5,
        date: "2025-12-15",
        comment:
          "Pupuk organik cair ini sangat bagus untuk tanaman padi saya. Hasil panen meningkat signifikan!",
      },
      {
        id: "r2",
        name: "Ibu Sari",
        rating: 5,
        date: "2025-11-20",
        comment:
          "Tanaman sayuran saya jadi lebih sehat dan subur setelah menggunakan produk ini.",
      },
      {
        id: "r3",
        name: "Mas Agus",
        rating: 4,
        date: "2025-11-10",
        comment:
          "Kualitas produk bagus, pengiriman cepat. Sangat recommended!",
      },
    ],
    relatedProductIds: ["2", "3"],
  },
  {
    id: "2",
    slug: "fungisidal-hayati",
    name: "Fungisidal Hayati",
    category: "Pestisida Organik",
    tags: ["Fungisida", "Hayati", "Organik"],
    price: 65000,
    stock: "Tersedia",
    unit: "500 ml",
    image: "/products/fungisidal-hayati.png",
    description:
      "Fungisidal Hayati adalah produk pestisida organik berbasis mikroorganisme yang efektif mengendalikan jamur patogen pada tanaman. Diproduksi dari bahan-bahan alami yang aman bagi lingkungan dan kesehatan manusia.",
    benefits: [
      "Mengendalikan jamur patogen secara efektif",
      "Aman untuk lingkungan dan manusia",
      "Meningkatkan kekebalan tanaman",
      "Tidak meninggalkan residu berbahaya",
    ],
    usage: {
      steps: [
        "Campurkan 5 ml Fungisidal Hayati dengan 1 liter air bersih",
        "Semprotkan ke seluruh bagian tanaman yang terinfeksi jamur",
        "Ulangi penyemprotan setiap 7-10 hari sampai gejala hilang.",
      ],
      image: "/products/fungisidal-hayati-usage.png",
    },
    reviews: [
      {
        id: "r4",
        name: "Pak Hendra",
        rating: 5,
        date: "2025-12-01",
        comment:
          "Jamur pada tanaman cabai saya hilang setelah 2x penyemprotan. Luar biasa!",
      },
      {
        id: "r5",
        name: "Ibu Dewi",
        rating: 4,
        date: "2025-11-25",
        comment: "Produk bagus untuk mencegah penyakit jamur pada tomat.",
      },
    ],
    relatedProductIds: ["1", "3"],
  },
  {
    id: "3",
    slug: "pestisidal-hayati",
    name: "Pestisidal Hayati",
    category: "Pestisida Organik",
    tags: ["Pestisida", "Hayati", "Organik"],
    price: 70000,
    stock: "Tersedia",
    unit: "500 ml",
    image: "/products/pestisidal-hayati.png",
    description:
      "Pestisidal Hayati adalah solusi pengendalian hama organik yang terbuat dari bahan-bahan alami. Efektif mengendalikan berbagai jenis hama tanaman tanpa merusak ekosistem pertanian.",
    benefits: [
      "Mengendalikan hama tanaman secara alami",
      "Menjaga keseimbangan ekosistem pertanian",
      "Tidak membunuh serangga penyerbuk",
      "Ramah lingkungan dan aman digunakan",
    ],
    usage: {
      steps: [
        "Campurkan 8 ml Pestisidal Hayati dengan 1 liter air bersih",
        "Semprotkan pada tanaman yang terserang hama di pagi atau sore hari",
        "Lakukan penyemprotan rutin setiap 2 minggu untuk pencegahan.",
      ],
      image: "/products/pestisidal-hayati-usage.png",
    },
    reviews: [
      {
        id: "r6",
        name: "Pak Joko",
        rating: 5,
        date: "2025-12-10",
        comment:
          "Wereng pada padi saya berkurang drastis setelah menggunakan produk ini!",
      },
      {
        id: "r7",
        name: "Mas Rudi",
        rating: 4,
        date: "2025-11-28",
        comment:
          "Bagus untuk pengendalian hama organik. Saya pakai rutin sekarang.",
      },
      {
        id: "r8",
        name: "Ibu Ani",
        rating: 5,
        date: "2025-11-15",
        comment: "Hama ulat pada kubis saya hilang. Produk sangat berkualitas!",
      },
    ],
    relatedProductIds: ["1", "2"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedProductIds
    .map((id) => getProductById(id))
    .filter(Boolean) as Product[];
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID").format(price);
}
