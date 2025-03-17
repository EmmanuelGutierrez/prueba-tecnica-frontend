"use client";
import React, { useState } from "react";
import "./style.css";
import { CartList } from "../cart-list/CartList";
import { useProductStore } from "@/app/zustand/hooks/useProductStore";

const Popup = () => {
  const { productCart } = useProductStore((state) => state);
  const [showPopup, setShowPopup] = useState(false);
  const handleShowPopup = () => {
    setShowPopup((show) => !show);
  };

  return (
    <div className="popup-container">
      <button onClick={handleShowPopup} className="chart-button">
        {!!productCart.length && <div className="chart-notification"></div>}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
      </button>
      <div className={`popup ${showPopup ? "popup-show" : ""}`}>
        <div className="popup-header">
          <h2>Mi carrito </h2>
          <p>Total: {productCart.length}</p>
          <svg
            onClick={handleShowPopup}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-x popup-close"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
        <CartList />
      </div>
    </div>
  );
};

export default Popup;
