import { useState, useEffect } from "react";
import "./styles.css";

function randomChoice(length) {
  return Math.floor(Math.random() * length);
}

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function randomHexColor() {
  let hexColor = "#";
  for (let i = 1; i <= 6; ++i) hexColor += hex[randomChoice(hex.length)];

  return hexColor;
}
function randomRgbColor() {
  return randomChoice(256) + "," + randomChoice(256) + "," + randomChoice(256);
}

const fun = () => {
  const [color, setColor] = useState(() => randomHexColor());
  const [mode, setMode] = useState("rgb");

  function handleMode() {
    setMode(mode === "rgb" ? "hex" : "rgb");
  }

  useEffect(
    function () {
      if (mode === "rgb") setColor(randomRgbColor);
      else setColor(randomHexColor);
    },
    [mode]
  );

  return (
    <div
      className="main"
      style={{
        backgroundColor: `${color}`,
        color: "#f2f2f2",
      }}
      className="app"
    >
      <button onClick={handleMode}>Create Hex Color</button>
      <button onClick={handleMode}>Create RGB color</button>
      <div>
        <h3
          style={{
            backgroundColor: "#fff",
            color: "#d73c65",
          }}
        >
          {mode === "rgb" ? `rgb(${color})` : `Hex Color:${color}`}{" "}
        </h3>
      </div>
    </div>
  );
};

export default fun;
