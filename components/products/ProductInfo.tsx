"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, formatPrice } from "@/constant/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);

  const avgRating =
    product.reviews.reduce((sum, r) => sum + r.rating, 0) /
    product.reviews.length;

  const handleWhatsAppOrder = () => {
    const message = `Halo admin Dokter Tani, saya ingin memesan ${quantity}x ${product.name} (Rp ${formatPrice(product.price * quantity)})`;
    const encoded = encodeURIComponent(message);
    window.open(
      `https://api.whatsapp.com/send?phone=6285122093761&text=${encoded}`,
      "_blank",
    );
  };

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

        <p className="text-2xl font-bold text-orangeDokTan md:text-3xl">
          Rp {formatPrice(product.price)}
        </p>

        {/* Quantity & CTA */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex w-fit items-center overflow-hidden rounded-lg border-2 border-slate-200">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-lg font-bold text-slate-600 transition-colors hover:bg-slate-100"
            >
              −
            </button>
            <span className="min-w-[40px] border-x-2 border-slate-200 px-4 py-2 text-center font-semibold text-slate-800">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-lg font-bold text-slate-600 transition-colors hover:bg-slate-100"
            >
              +
            </button>
          </div>
          <button
            onClick={handleWhatsAppOrder}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-orangeDokTan px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-orange-500 hover:shadow-xl sm:w-auto"
          >
            <Image src="/phone.svg" width={18} height={18} alt="order" />
            Pesan via WhatsApp
          </button>
        </div>

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
                src={i < Math.round(avgRating) ? "/star.svg" : "/star-empty.svg"}
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
