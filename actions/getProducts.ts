import { supabase } from "@/lib/supabase-clients";
import { cache } from "react";
import { ProductWithCategory } from "@/components/product/Products";

export const revalidate = 3600; // revalidate the data at every hour

export const getProducts = cache(async ({ limit }: { limit: number }) => {
  const { data, error } = await supabase
    .from("Product")
    .select(
      `
      *,
      category: Category(name)
    `
    )
    .range(0, limit)
    .order("id", { ascending: true });

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return data || [];
});

export async function getMoreItems({
  from,
  limit,
}: {
  from: number;
  limit: number;
}) {
  const { data, count, error } = await supabase
    .from("Product")
    .select(
      `
    *,
    category: Category(name)
  `,
      { count: "exact" }
    )
    .range(from, limit)
    .order("id", { ascending: true });

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return { data: data as ProductWithCategory[], count } || [];
}
