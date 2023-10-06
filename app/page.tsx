import { getProducts } from "@/actions/getProducts";
import Navigation from "@/components/navbar/Navigation";
import Products, { ProductWithCategory } from "@/components/product/Products";
import MoreProducts from "@/components/product/MoreProducts";
import Pagination from "@/components/ui/Pagination";

export default async function Home() {
  const data: ProductWithCategory[] = await getProducts({ limit: 25 });

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Navigation />
        <Products data={data} />
        <MoreProducts />
      </div>
      <Pagination />
    </>
  );
}
