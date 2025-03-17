import { useContext } from "react";
import { ProductStoreContext } from "../providers/ProductStoreProvider";
import { ProductStore } from "../stores/ProductStore";
import { useStore } from "zustand";

export const useProductStore = <T>(selector: (store: ProductStore) => T) => {
  const productStoreContext = useContext(ProductStoreContext);
  if (!productStoreContext) {
    throw new Error("useProductStore must be used within ProductStoreProvider");
  }
  return useStore(productStoreContext, selector);
};
