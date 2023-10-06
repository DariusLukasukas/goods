"use client";

import Products from "@/components/product/Products";
import useProductStore from "@/store/store";

export default function MoreProducts() {
  const { products }: any = useProductStore();

  return <>{products && <Products data={products} />}</>;
}
