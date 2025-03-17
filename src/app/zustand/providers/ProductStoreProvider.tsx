"use client";

import { createContext, useRef } from "react";
import { createProductStore } from "../stores/ProductStore";

export type ProductStoreApi = ReturnType<typeof createProductStore>;
export const ProductStoreContext = createContext<ProductStoreApi | undefined>(
  undefined
);
export const ProductStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<ProductStoreApi | null>(null);
  if (!storeRef.current) {
    storeRef.current = createProductStore();
  }

  return (
    <ProductStoreContext.Provider value={storeRef.current}>
      {children}
    </ProductStoreContext.Provider>
  );
};
