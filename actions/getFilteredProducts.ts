import { supabase } from "@/lib/supabase-clients";
import { ProductWithCategory } from "@/components/product/Products";
import { normalizeBrandName } from "@/lib/utils/normalizeBrandName";

export async function getFilteredProducts(categoryId: number) {
  const { data, error } = await supabase
    .from("Product")
    .select(
      `
      *,
      category: Category(name)
    `,
    )
    .eq("categoryId", categoryId);

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return (data as ProductWithCategory[]) || [];
}

export async function getBrandProducts(brand: string) {
  const normalizedBrandName = normalizeBrandName(brand);

  const { data, error } = await supabase
    .from("Product")
    .select(
      `
      *,
      category: Category(name)
    `,
    )
    .ilike("brand", normalizedBrandName);

  if (error) {
    throw new Error("Failed to fetch data");
  }

  return (data as ProductWithCategory[]) || [];
}
