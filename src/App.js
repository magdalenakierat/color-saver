import React, { useState } from "react";
import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";
import CardForm from "./components/Form/CardForm";
import {nanoid} from "nanoid";


function App() {
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

  const [cards, setCards] = useState(colorObjects);
  const [newCard, setNewCard] = useState();

  function editCard(value){
    setCards(value)
  }

  function addNewCard(value){
    setNewCard(value)
  }


  return (
    <>
      <div className="card-container">
        <CardForm newCard={newCard} addNewCard={addNewCard}/>
        <ColorCard
          colorObjects={cards}
          editCard={editCard}
        />
      </div>
    </>
  );
}

export default App;
