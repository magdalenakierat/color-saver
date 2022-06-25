import React from "react";
import "./ColorCard.css";

export default function ColorCard({ colorObjects, editCard }) {
  
  return (
    colorObjects.map((colorObject) => {
      return (
      <article key={colorObject.id} className="card" style={{ backgroundColor: colorObject.colorCode }}>
        <input type="text" className="card__input" value={colorObject.colorCode} onChange={(event) => {              
              editCard(
                colorObjects.map((colorObject_) => colorObject_.id === colorObject.id ? { ...colorObject_, colorCode: event.target.value } : colorObject_)
              );         
              
            }}>
        </input>
        <button className="card__button-delete" onClick={()=>{
            editCard(colorObjects.filter((colorObjects_) => colorObjects_.id !== colorObject.id));
        }}>X</button>
      </article>
      )

    })
  );

}
