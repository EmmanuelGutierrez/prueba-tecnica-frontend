import { CartElement } from "@/app/components/cart-element/CartElement";
import React from "react";

import "./styles.css";
import { EmptyCart } from "@/app/components/empty-cart/EmptyCart";

const data = [
  {
    id: 5,
    titulo: "Reloj Inteligente",
    descripcion: "Reloj inteligente con monitor de frecuencia cardíaca y GPS.",
    precio: 249.99,
    imagen:
      "https://cdn-xiaomi.waugi.com.ar/1235-thickbox_default/smart-watch-redmi-watch-2-lite-xiaomi-reloj-inteligente-negro.jpg",
    fav: true,
    rating: 4,
    categoria: "Accesorios",
  },
  {
    id: 6,
    titulo: "Reloj Inteligente",
    descripcion: "Reloj inteligente con monitor de frecuencia cardíaca y GPS.",
    precio: 249.99,
    imagen:
      "https://cdn-xiaomi.waugi.com.ar/1235-thickbox_default/smart-watch-redmi-watch-2-lite-xiaomi-reloj-inteligente-negro.jpg",
    fav: true,
    rating: 4,
    categoria: "Accesorios",
  },
];

export const CartList = () => {
  return (
    <div className="chart-list-container">
      {false ? (
        data.map((d) => <CartElement item={d} key={d.id} />)
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
