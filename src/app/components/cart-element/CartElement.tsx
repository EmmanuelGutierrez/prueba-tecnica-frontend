"use client";
import { ProductI } from "@/common/interfaces/product.interface";
import React from "react";
import "./styles.css";
import Image from "next/image";
import { useProductStore } from "@/app/zustand/hooks/useProductStore";

interface ChartElementPropsI {
  item: ProductI;
  total: number;
}

export const CartElement = ({ item, total }: ChartElementPropsI) => {
  const { addProduct, removeProduct, deleteProduct } = useProductStore(
    (state) => state
  );
  const handleAddProduct = () => {
    addProduct(item);
  };

  const handleRemoveProduct = () => {
    removeProduct(item.id);
  };
  const handleDeleteProduct = () => {
    deleteProduct(item.id);
  };
  return (
    <div className="element-container">
      <div className="element-info">
        <div className="element-info-image">
          <Image src={item.imagen} alt="card-img" height={200} width={200} />
        </div>
        <div className="element-info-text">
          <p className="element-info-title">{item.titulo}</p>
          <p className="element-info-price">{item.precio}</p>
        </div>
        <button className="element-info-delete" onClick={handleDeleteProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-trash-fill trash-svg"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
          </svg>
        </button>
      </div>
      <div className="element-total">
        <button className="element-total-button" onClick={handleRemoveProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-dash-square "
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
          </svg>
        </button>
        <p className="element-total-number">{total}</p>

        <button className="element-total-button" onClick={handleAddProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-plus-square "
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </div>
    </div>
  );
};
