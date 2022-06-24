import React, { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";
import CardForm from "./components/Form/CardForm";
import {nanoid} from "nanoid";

const colorObjects = [
  {
    id: nanoid(),
    colorCode: "#25B2D9",
  },
  {
    id: nanoid(),
    colorCode: "#A23A24",
  },
  {
    id: nanoid(),
    colorCode: "#879F18",
  },
];

function App() {
  const [cards, setCards] = useState(colorObjects);
  const [colorChange, setColorChange] = useState();

  function editCard(value){
    setCards(value)
  }

  function test(value){
    setCards({value,...cards})
  }

  function addNewCard(value){
    setColorChange(value)
  }


  return (
    <>
      <div className="card-container">
        <CardForm colorChange={colorChange} addNewCard={addNewCard} cardObjects={cards} editCard={editCard}/>
        <ColorCard
          colorObjects={cards}
          editCard={editCard}
        />
      </div>
    </>
  );
}

export default App;
