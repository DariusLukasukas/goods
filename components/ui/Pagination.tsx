"use client";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { getMoreItems } from "@/actions/getProducts";
import useProductStore from "@/store/store";
import EndOfPagination from "@/components/ui/EndOfPagination";
import { useState } from "react";

export default function Pagination() {
  const {
    products,
    startIndex,
    limit,
    totalProductCount,
    addProducts,
    setStartIndex,
    setTotalProductCount,
  } = useProductStore();

  const [isLoading, setIsLoading] = useState(false);

  const loadMoreItems = async (): Promise<void> => {
    setIsLoading(true);

    try {
      const { data, count } = await getMoreItems({
        from: startIndex,
        limit: startIndex + limit,
      });
      addProducts(data);
      setTotalProductCount(count || 0);

      setStartIndex(startIndex + limit + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMoreItems =
    totalProductCount === 0 || totalProductCount > 26 + products.length;

  return (
    <div className="pb-8 pt-16 flex justify-center">
      {hasMoreItems ? (
        <button
          type="button"
          aria-label="Load More"
          disabled={isLoading}
          onClick={loadMoreItems}
          className="flex cursor-pointer items-center justify-center rounded-lg py-2 px-4 transition-colors hover:bg-neutral-200 bg-neutral-100 text-black dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800 dark:bg-neutral-900"
        >
          <ArrowDownIcon className="w-4 h-4" />
        </button>
      ) : (
        <EndOfPagination />
      )}
    </div>
  );
}
