import React from "react";
import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";

function App() {
  const colorObjects = [
    {
      id: "234",
      colorCode: "#25B2D9",
    },
    {
      id: "235",
      colorCode: "#A23A24",
    },
    {
      id: "236",
      colorCode: "#879F18",
    },
  ];

  return (
    <>
      <div className="card-container">
        <ColorCard
          colorObjects={colorObjects}
          style={{ backgroundColor: colorObjects[0].colorCode }}
        />
      </div>
    </>
  );
}

export default App;
