"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, getRelatedProducts } from "@/constant/products";
import ProductCard from "./ProductCard";

interface ProductTabsProps {
  product: Product;
}

type TabKey = "deskripsi" | "cara-penggunaan" | "ulasan" | "produk-terkait";

const tabs: { key: TabKey; label: string }[] = [
  { key: "deskripsi", label: "Deskripsi" },
  { key: "cara-penggunaan", label: "Cara Penggunaan" },
  { key: "ulasan", label: "Ulasan" },
  { key: "produk-terkait", label: "Produk Terkait" },
];

const ProductTabs = ({ product }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("deskripsi");
  const relatedProducts = getRelatedProducts(product);

  const avgRating =
    product.reviews.reduce((sum, r) => sum + r.rating, 0) /
    product.reviews.length;

  return (
    <div className="mt-12">
      {/* Tab Headers */}
      <div className="flex overflow-x-auto whitespace-nowrap border-b border-slate-200 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-4 py-3 text-sm font-semibold transition-colors md:px-8 md:text-base ${
              activeTab === tab.key
                ? "text-greenDokTan"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.label}
            {tab.key === "ulasan" && ` (${product.reviews.length})`}
            {activeTab === tab.key && (
              <div className="absolute bottom-0 left-0 h-[3px] w-full rounded-t-full bg-greenDokTan" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-8">
        {/* Deskripsi */}
        {activeTab === "deskripsi" && (
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="space-y-6 lg:w-1/2">
              <div>
                <h2 className="mb-3 text-xl font-bold italic text-greenDokTan md:text-2xl">
                  Tentang Produk
                </h2>
                <p className="leading-relaxed text-sm text-slate-600 md:text-base">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-bold text-slate-800 md:text-lg">
                  Keunggulan {product.name}
                </h3>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Image
                        src="/check-circle.svg"
                        width={22}
                        height={22}
                        alt="check"
                        className="shrink-0"
                      />
                      <span className="text-sm text-slate-700 md:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center justify-center lg:w-1/2">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="h-auto max-h-[350px] w-auto rounded-xl object-contain"
              />
            </div>
          </div>
        )}

        {/* Cara Penggunaan */}
        {activeTab === "cara-penggunaan" && (
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="space-y-6 lg:w-1/2">
              <h2 className="text-center text-xl font-bold italic text-greenDokTan md:text-2xl lg:text-left">
                Cara Penggunaan
              </h2>
              <ol className="space-y-6">
                {product.usage.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-greenDokTan/10">
                      {i === 0 && (
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
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      )}
                      {i === 1 && (
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
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                      )}
                      {i === 2 && (
                        <Image
                          src="/check-circle.svg"
                          width={20}
                          height={20}
                          alt="step"
                        />
                      )}
                    </div>
                    <p className="pt-2 text-sm leading-relaxed text-slate-700 md:text-base">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex items-center justify-center lg:w-1/2">
              <Image
                src={product.usage.image}
                alt={`Cara penggunaan ${product.name}`}
                width={500}
                height={400}
                className="h-auto max-h-[350px] w-auto rounded-xl object-cover shadow-lg"
              />
            </div>
          </div>
        )}

        {/* Ulasan */}
        {activeTab === "ulasan" && (
          <div className="space-y-6">
            {/* Rating Summary */}
            <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-slate-800">
                  {avgRating.toFixed(1)}{" "}
                  <span className="text-lg font-normal text-slate-400">/</span>
                </p>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src={
                        i < Math.round(avgRating)
                          ? "/star.svg"
                          : "/star-empty.svg"
                      }
                      width={18}
                      height={18}
                      alt="star"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  ({product.reviews.length})
                </p>
              </div>
              <div className="ml-4 text-sm text-slate-500">
                <p>
                  Tingkat kepuasan pembeli:{" "}
                  <span className="font-semibold text-greenDokTan">
                    ▲ {avgRating.toFixed(1)}
                  </span>{" "}
                  (50+ pembeli rata-rata 8 rating)
                </p>
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-greenDokTan text-sm font-bold text-white">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {review.name}
                        </p>
                        <p className="text-xs text-slate-400">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src={
                            i < review.rating ? "/star.svg" : "/star-empty.svg"
                          }
                          width={14}
                          height={14}
                          alt="star"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Produk Terkait */}
        {activeTab === "produk-terkait" && (
          <div>
            <h2 className="mb-6 text-center text-2xl font-bold italic text-greenDokTan">
              Produk Terkait
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
