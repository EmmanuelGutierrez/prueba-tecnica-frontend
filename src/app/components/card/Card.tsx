"use client";
import { ProductI } from "@/common/interfaces/product.interface";
import Image from "next/image";
import React, { useState } from "react";
import "./style.css";
import StarRating from "../star-rating/StarRating";
import { redirect } from "next/navigation";

interface CardPropsI {
  card: ProductI;
}
export const Card = ({ card }: CardPropsI) => {
  const [favorite, setFavorite] = useState(card.fav);

  const handleFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFavorite((fav) => !fav);
  };

  const handleRedirect = () => {
    redirect(`/detail/${card.id}`);
  };

  return (
    <div className="card-container" onClick={handleRedirect}>
      <div className="card-container-image">
        <Image src={card.imagen} alt="card-img" height={200} width={200} />
        <button className="card-favorite" onClick={handleFavorite}>
          {favorite ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          )}
        </button>
      </div>
      <div className="card-info">
        <header className="card-info-header">
          <div className="card-header-data">
            <h3>{card.titulo}</h3>
            <h5>{card.categoria}</h5>
          </div>
          <button className="card-header-rating">
            <StarRating rating={card.rating} />
            <p>{card.rating}</p>
          </button>
        </header>
        <div className="card-content">
          <div className="card-description">
            <p>{card.descripcion}</p>
          </div>
          <div className="card-price">
            <p> $ {card.precio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
