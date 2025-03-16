import React from "react";
import "./styles.css";
export const NotFound = () => {
  return (
    <div className="not-found-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>

      <h2>No se encontraron productos</h2>
      <p>
        No hay productos que coincidad con tu busqueda. <br />
        Intenta ajusta tus filtros o verifica que el nombre que estas buscando
        sea correcto
      </p>
    </div>
  );
};
