import { supabase } from "@/lib/supabase-clients";
import { cache } from "react";
import { Product } from "@prisma/client";

export const revalidate = 3600; // revalidate the data at every hour

export const getProduct = cache(async (slug: string) => {
  const { data, error } = await supabase
    .from("Product")
    .select("*")
    .eq("slug", slug.toLowerCase());

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return (data as Product[]) || [];
});
