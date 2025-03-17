import React from "react";
import StarRating from "../star-rating/StarRating";
import Link from "next/link";
import { ProductI } from "@/common/interfaces/product.interface";
import './styles.css'
import BuyButton from "../buy-button/BuyButton";

interface DetailInfoPropsI {
  product: ProductI;
}

const DetailInfo = ({ product }: DetailInfoPropsI) => {
  return (
    <div className="detail-info2">
      <div>
        <h1>{product.titulo}</h1>
        <div className="detail-rating">
          <StarRating rating={product.rating} />
          <p>{product.rating}</p>
        </div>
      </div>
      <p className="show">Calificacion {product.rating} de 5.177 opiniones</p>
      <b>
        <p>${product.precio}</p>
      </b>
      <div className="show">
        <Link href={"#"} className="show">
          Ver los medios de pago
        </Link>
        <p>Llega gratis hoy!!!</p>
      </div>
      <div className="show">
        <Link href={"#"} className="show">
          Mas formas de entrega
        </Link>
        <p className="show">Devolucion gratis</p>
      </div>
      <p className="show">Tenes mas de 30 dias desde que lo recibis.</p>
      <Link href={"#"} className="show">
        Conocer mas
      </Link>
      <div className="detail-button-container show">
        <BuyButton product={product} />
      </div>
    </div>
  );
};

export default DetailInfo;
