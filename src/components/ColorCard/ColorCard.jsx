import React from "react";
import "./ColorCard.css";

export default function ColorCard({ colorObjects, addNewCard }) {
  
  return (
    colorObjects.map((colorObject) => {
      return (
      <article key={colorObject.id} className="card" style={{ backgroundColor: colorObject.colorCode }}>
        <div>{colorObject.id}</div>
        <input type="text" className="card__input" value={colorObject.colorCode} onChange={(event) => {              
              addNewCard(
                colorObjects.map((colorObject_) => colorObject_.id === colorObject.id ? { ...colorObject_, colorCode: event.target.value } : colorObject_)
              );         
              
            }}>
        </input>
        <button className="card__button-delete">X</button>
      </article>
      )

    })
  );

}
