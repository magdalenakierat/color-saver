import React from "react";
import "./ColorCard.css";

export default function ColorCard({ colorObjects }) {
  
  return (
    colorObjects.map((colorObject) => {
      return (
      <article key={colorObject.id} className="card" style={{ backgroundColor: colorObject.colorCode }}>
        <button type="button" className="card__button">
        {colorObject.colorCode}
        </button>
      </article>
      )

    })
  );




}
