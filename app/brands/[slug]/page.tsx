import GoBack from "@/components/navbar/GoBack";
import { getBrandProducts } from "@/actions/getFilteredProducts";
import Products, { ProductWithCategory } from "@/components/product/Products";
import NotFound from "@/components/ui/NotFound";

export default async function BrandsPage({
  params,
}: {
  params: { slug: string };
}) {
  const item: ProductWithCategory[] = await getBrandProducts(params.slug);

  if (!item.length) {
    return (
      <>
        <GoBack />
        <NotFound />
      </>
    );
  }

  return (
    <>
      <GoBack />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Products data={item} />
      </div>
    </>
  );
}
