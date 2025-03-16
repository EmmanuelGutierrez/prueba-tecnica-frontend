import { Card } from "@/app/components/card/Card";
import React from "react";
import articles from "../../../common/data/articles.json";
import "./style.css";
import { NotFound } from "../not-found/NotFound";

export const CardsContainer = () => {
  return (
    <div className="cards-container">
      {true ? (
        <div className="cards-container-list ">
          {articles.map((art) => (
            <Card card={art} key={art.id} />
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};
