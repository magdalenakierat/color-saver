import React from "react";
import "./App.css";
import ColorCard from "./components/ColorCard/ColorCard";

function App() {
  const colorObjects = [
    {
      id: "234",
      colorCode: "#ccc",
    },
    {
      id: "235",
      colorCode: "#ccd",
    },
    {
      id: "236",
      colorCode: "#cce",
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
