import { create } from "zustand";
import { ProductWithCategory } from "@/components/product/Products";

type ProductState = {
  products: ProductWithCategory[];
  startIndex: number;
  limit: number;
  totalProductCount: number;
};

type ProductStoreActions = {
  addProducts: (newProducts: ProductWithCategory[]) => void;
  setStartIndex: (startIndex: number) => void;
  setLimit: (limit: number) => void;
  setTotalProductCount: (totalProductCount: number) => void;
};

type ProductStore = ProductState & ProductStoreActions;

const useProductStore = create<ProductStore>()((set) => ({
  products: [],
  startIndex: 26,
  limit: 5,
  totalProductCount: 0,
  hasMoreItems: true,
  addProducts: (newProducts) =>
    set((state: ProductState) => ({
      products: [...state.products, ...newProducts],
    })),
  setStartIndex: (startIndex) => set((state) => ({ startIndex })),
  setLimit: (limit) => set((state) => ({ limit })),
  setTotalProductCount: (totalProductCount) =>
    set((state) => ({ totalProductCount })),
}));

export default useProductStore;
