import React, { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";
import CardForm from "./components/Form/CardForm";
import { nanoid } from "nanoid";

const colorObjects = [
  {
    id: nanoid(),
    colorCode: "#a9eed1",
  },
  {
    id: nanoid(),
    colorCode: "#ff9899",
  },
  {
    id: nanoid(),
    colorCode: "#ff9a66",
  },
];

function App() {
  const [cards, setCards] = useState(colorObjects);
  const [colorChange, setColorChange] = useState();

  function editCard(value) {
    setCards(value);
  }

  function test(value) {
    setCards({ value, ...cards });
  }

  function addNewCard(value) {
    setColorChange(value);
  }

  return (
    <>
      <h1>— Color Saver —</h1>
      <h2>by Thomas, Magda & Anna</h2>
      <div className="card-container">
        <CardForm
          colorChange={colorChange}
          addNewCard={addNewCard}
          cardObjects={cards}
          editCard={editCard}
        />
        <ColorCard colorObjects={cards} editCard={editCard} />
      </div>
    </>
  );
}

export default App;
