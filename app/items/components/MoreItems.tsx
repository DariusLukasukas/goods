"use client";

import ProductCard from "@/components/product/ProductCard";

export default function MoreItems({ items }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <ProductCard key={i} product={item} />
      ))}
    </div>
  );
}
