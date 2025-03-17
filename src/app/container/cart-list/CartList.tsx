"use client";
import { CartElement } from "@/app/components/cart-element/CartElement";
import React from "react";

import "./styles.css";
import { EmptyCart } from "@/app/components/empty-cart/EmptyCart";
import { useProductStore } from "@/app/zustand/hooks/useProductStore";

export const CartList = () => {
  const { productCart } = useProductStore((state) => state);
  return (
    <div className="chart-list-container">
      {productCart.length ? (
        productCart.map((d) => (
          <CartElement item={d.product} total={d.total} key={d.product.id} />
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
