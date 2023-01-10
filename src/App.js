import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("yellow");
  const [textSize, setTextSize] = useState("2em");

  function copyText() {
    navigator.clipboard.writeText(text);
  }

  function toggleUI() {
    let colorBox = document.querySelector(".colorSelector");
    let sizeBox = document.querySelector(".sizeSelector");
    colorBox.style.visibility === "hidden"
      ? (colorBox.style.visibility = "visible")
      : (colorBox.style.visibility = "hidden");
    sizeBox.style.visibility === "hidden"
      ? (sizeBox.style.visibility = "visible")
      : (sizeBox.style.visibility = "hidden");
    document.querySelector("#inputBox").focus();
  }

  const inputBox = document.querySelector("#inputBox");

  return (
    <div className="App">
      <button className="copyTextButton" onClick={copyText}>
        Copy Text
      </button>
      <div className="colorSelector">
        <button
          className="redText"
          onClick={() => {
            setTextColor("red");
            inputBox.focus();
          }}
        >
          R
        </button>
        <button
          className="orangeText"
          onClick={() => {
            setTextColor("orange");
            inputBox.focus();
          }}
        >
          R
        </button>
        <button
          className="yellowText"
          onClick={() => {
            setTextColor("yellow");
            inputBox.focus();
          }}
        >
          R
        </button>
        <button
          className="greenText"
          onClick={() => {
            setTextColor("green");
            inputBox.focus();
          }}
        >
          R
        </button>
        <button
          className="blueText"
          onClick={() => {
            setTextColor("dodgerblue");
            inputBox.focus();
          }}
        >
          R
        </button>

        <button
          className="whiteText"
          onClick={() => {
            setTextColor("white");
            inputBox.focus();
          }}
        >
          R
        </button>
      </div>

      <div className="sizeSelector">
        <button
          className="bigger"
          onClick={() => {
            let currentTextSize = textSize;
            let newTextSize =
              Number(currentTextSize.slice(0, currentTextSize.length - 2)) +
              1 +
              "em";
            setTextSize(newTextSize);
            console.log("new text size is", newTextSize);
            inputBox.focus();
          }}
        >
          +
        </button>
        <button
          className="smaller"
          onClick={() => {
            let currentTextSize = textSize;
            let newTextSize =
              Number(currentTextSize.slice(0, currentTextSize.length - 2)) -
              0.5 +
              "em";
            setTextSize(newTextSize);
            console.log("new text size is", newTextSize);
            inputBox.focus();
          }}
        >
          -
        </button>
      </div>

      <div className="toggleOptionsView">
        <button onClick={toggleUI}>%</button>
      </div>

      <h1
        className="colorText"
        style={{ color: textColor, fontSize: textSize }}
      >
        <pre>{text}</pre>
      </h1>
      <textarea
        id="inputBox"
        autoFocus
        placeholder="type something..."
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
