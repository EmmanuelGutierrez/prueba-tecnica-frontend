import React from "react";
import "./style.css";
export const Search = () => {
  return (
    <div className="seacrh-container">
      <h3>Buscar</h3>
      <div className="seacrh-input-container">
        <input className="search-input" type="text" />
        <p>10 productos</p>
      </div>
    </div>
  );
};
