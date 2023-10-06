"use client";

import { Product } from "@prisma/client";
import ProductCard from "./ProductCard";

export type ProductWithCategory = Product & { category: { name: string } };

interface ProductsProps {
  data: ProductWithCategory[];
}
export default function Products({ data }: ProductsProps) {
  return (
    <>
      {data.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </>
  );
}
