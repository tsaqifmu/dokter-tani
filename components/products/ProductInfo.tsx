import Image from "next/image";
import { Product } from "@/constant/products";

interface ProductInfoProps {
  product: Product;
}

const marketplaces = [
  { key: "shopee" as const, label: "Shopee", color: "#EE4D2D" },
  { key: "tokopedia" as const, label: "Tokopedia", color: "#03AC0E" },
  { key: "lazada" as const, label: "Lazada", color: "#F02B7E" },
  { key: "tiktokShop" as const, label: "TikTok Shop", color: "#010101" },
];

const ProductInfo = ({ product }: ProductInfoProps) => {
  const avgRating =
    product.reviews.reduce((sum, r) => sum + r.rating, 0) /
    product.reviews.length;

  const availableMarketplaces = marketplaces.filter(
    (m) => product.ecommerceLinks?.[m.key],
  );

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      {/* Product Image */}
      <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 lg:w-1/2">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="h-auto max-h-[400px] w-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-5 lg:w-1/2">
        <h1 className="text-2xl font-bold text-greenDokTan md:text-3xl lg:text-4xl">
          {product.name}
        </h1>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/check-circle.svg"
              width={18}
              height={18}
              alt="check"
            />
            <span
              className={`text-sm font-semibold ${
                product.stock === "Tersedia"
                  ? "text-greenDokTan"
                  : "text-red-500"
              }`}
            >
              {product.stock}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1">
              <Image
                src="/check-circle.svg"
                width={14}
                height={14}
                alt="check"
              />
              <span className="text-sm font-semibold text-slate-700">
                {product.category}
              </span>
            </div>
            <div className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1">
              <span className="text-sm text-slate-500">🔥</span>
              <span className="text-sm font-semibold text-slate-700">
                {product.unit}
              </span>
            </div>
          </div>
        </div>

        {/* Marketplace CTAs */}
        {availableMarketplaces.length > 0 && (
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-600">
              Beli di marketplace pilihan Anda:
            </p>
            <div className="flex flex-wrap gap-3">
              {availableMarketplaces.map((m) => (
                <a
                  key={m.key}
                  href={product.ecommerceLinks[m.key]!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: m.color }}
                >
                  {m.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Meta Info */}
        <div className="space-y-1 border-t border-slate-200 pt-4 text-sm text-slate-500">
          <p>
            <span className="font-medium text-slate-700">Kategori:</span>{" "}
            {product.category}
          </p>
          <p>
            <span className="font-medium text-slate-700">Tag:</span>{" "}
            {product.tags.join(", ")}
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-4 py-3">
          <span className="text-2xl font-bold text-slate-800">
            {avgRating.toFixed(1)}
          </span>
          <span className="text-slate-400">/</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={
                  i < Math.round(avgRating) ? "/star.svg" : "/star-empty.svg"
                }
                width={18}
                height={18}
                alt="star"
              />
            ))}
          </div>
          <span className="text-sm text-slate-500">
            ({product.reviews.length})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
