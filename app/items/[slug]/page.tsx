import GoBack from "@/components/navbar/GoBack";
import ItemCard from "../components/ItemCard";
import { getProduct } from "@/actions/getProduct";
import { getCategoryTitle } from "@/actions/decodeCategoryId";
import { getFilteredProducts } from "@/actions/getFilteredProducts";
import Products from "@/components/product/Products";
import NotFound from "@/components/ui/NotFound";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = await getProduct(params.slug);

  if (item[0] === undefined) {
    return (
      <>
        <GoBack />
        <NotFound />
      </>
    );
  }

  const filteredItems = await getFilteredProducts(item[0].categoryId);
  const filteredItemsWithoutCurrentItem = filteredItems.filter(
    (product) => product.slug !== params.slug.toLowerCase()
  );

  return (
    <div className="space-y-4">
      <GoBack />
      <ItemCard item={item} />
      <div className="pt-4">
        <div className="text-neutral-400 text-sm">
          More items from{" "}
          <span className="italic">{getCategoryTitle(item[0].categoryId)}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Products data={filteredItemsWithoutCurrentItem} />
      </div>
    </div>
  );
}
