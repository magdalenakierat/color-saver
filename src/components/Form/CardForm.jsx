import React from "react";
import "./CardForm.css";
import { nanoid } from "nanoid";

export default function CardForm({
  colorChange,
  changeCardColor,
  cardObjects,
  editCard,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const textInput = e.target.elements[0].value;
        let newCard = [...cardObjects,{ id: nanoid(), colorCode: textInput }];

        editCard(newCard);
      }}
    >
      
      <article className="card" style={{ backgroundColor: colorChange }}>
        <input
          type="text"
          className="card__input"
          onChange={(e) => {
            changeCardColor(e.target.value);
          }}
        ></input>
        <button className="card__button-add">ADD</button>
      </article>
    </form>
  );
}
