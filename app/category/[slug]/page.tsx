import GoBack from "@/components/navbar/GoBack";
import Products, { ProductWithCategory } from "@/components/product/Products";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import NotFound from "@/components/ui/NotFound";

const categorySlugToIdMap: Record<string, number> = {
  tech: 1,
  lifestyle: 2,
  home: 3,
  workplace: 4,
  carry: 5,
  personal: 6,
};

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const categoryId: number = categorySlugToIdMap[params.slug];

  if (categoryId === undefined) {
    return (
      <>
        <GoBack />
        <NotFound />
      </>
    );
  }

  const products: ProductWithCategory[] = await getFilteredProducts(categoryId);

  return (
    <>
      <GoBack />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Products data={products} />
      </div>
    </>
  );
}
