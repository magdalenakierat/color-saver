import React from "react";
import "./CardForm.css";
import { nanoid } from "nanoid";

export default function CardForm({
  colorChange,
  addNewCard,
  cardObjects,
  editCard,
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const textInput = e.target.elements[0].value;
        let newCard = { id: nanoid(), colorCode: textInput };

        let test2 = cardObjects;
        test2.push(newCard);
        editCard(test2);
        console.log(test2);
      }}
    >
      <article className="card" style={{ backgroundColor: colorChange }}>
        <input
          type="text"
          className="card__input"
          onChange={(e) => {
            addNewCard(e.target.value);
          }}
        ></input>
        <button className="card__button-add">ADD</button>
      </article>
    </form>
  );
}
