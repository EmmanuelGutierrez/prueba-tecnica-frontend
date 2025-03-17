"use client";
import React from "react";
import "./style.css";
import { ProductI } from "@/common/interfaces/product.interface";
import { useProductStore } from "@/app/zustand/hooks/useProductStore";

interface BuyButtonPropsI {
  product: ProductI;
}

const BuyButton = ({ product }: BuyButtonPropsI) => {
  const { addProduct } = useProductStore((state) => state);
  const handleAddProduct = () => {
    addProduct(product);
  };
  return (
    <button onClick={handleAddProduct} className="buy-button ">
      Comprar
    </button>
  );
};

export default BuyButton;
