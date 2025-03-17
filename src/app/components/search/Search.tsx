"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useProductStore } from "@/app/zustand/hooks/useProductStore";
export const Search = () => {
  const [search, setSearch] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const { setFilteredProducts } = useProductStore((state) => state);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setFilteredProducts(search);
    }, 600);
    setTimeoutId(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="seacrh-container">
      <h3>Buscar</h3>
      <div className="seacrh-input-container">
        <input
          value={search}
          onChange={handleChange}
          className="search-input"
          type="text"
          placeholder="Ingrese un nombre..."
        />
        <p>10 productos</p>
      </div>
    </div>
  );
};
