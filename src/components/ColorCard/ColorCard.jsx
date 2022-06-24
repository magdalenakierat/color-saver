import React from "react";
import "./ColorCard.css";

export default function ColorCard({ colorObjects }) {
  colorObjects.map((colorObject) => {
    return (
      <article className="card">
        <button type="button" className="card__button">
          {colorObject.id}
        </button>
      </article>
    );
  });
}
