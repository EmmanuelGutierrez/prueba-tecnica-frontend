"use client";
import { Card } from "@/app/components/card/Card";
import React, { useEffect } from "react";
// import articles from "../../../common/data/articles.json";
import "./style.css";
import { NotFound } from "../not-found/NotFound";
import { ProductI } from "@/common/interfaces/product.interface";
import { useProductStore } from "@/app/zustand/hooks/useProductStore";
import LoadingSpinner from "@/app/components/loading-spinner/LoadingSpinner";

interface CardsContainerPropsI {
  products: ProductI[];
}

export const CardsContainer = ({
  products: productData,
}: CardsContainerPropsI) => {
  const { setProducts, filteredProducts, products } = useProductStore(
    (state) => state
  );

  useEffect(() => {
    setProducts(productData);
    setProducts(productData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData]);
  return (
    <div className="cards-container">
      {products.length ? (
        filteredProducts?.length ? (
          <div className="cards-container-list ">
            {filteredProducts.map((art) => (
              <Card card={art} key={art.id} />
            ))}
          </div>
        ) : (
          <NotFound />
        )
      ) : (
        <LoadingSpinner size="xl" />
      )}
    </div>
  );
};
