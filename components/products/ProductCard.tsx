import Image from "next/image";
import Link from "next/link";
import { Product } from "@/constant/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link href={`/produk/${product.slug}`}>
      <div className="group w-full overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[220px] w-full overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                product.stock === "Tersedia"
                  ? "bg-greenDokTan"
                  : "bg-red-500"
              }`}
            >
              {product.stock}
            </span>
          </div>
        </div>
        <div className="space-y-2 p-4">
          <p className="text-xs font-medium text-greenDokTan">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => {
              const avg =
                product.reviews.reduce((sum, r) => sum + r.rating, 0) /
                product.reviews.length;
              return (
                <Image
                  key={i}
                  src={i < Math.round(avg) ? "/star.svg" : "/star-empty.svg"}
                  width={14}
                  height={14}
                  alt="star"
                />
              );
            })}
            <span className="ml-1 text-xs text-slate-400">
              ({product.reviews.length})
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
