import { useState } from "react";
import "./ColourPicker.css";
export function ColourPicker() {
  const [colour, setColour] = useState("transparent");

  function handleColourChange(colour) {
    setColour(colour);
  }

  return (
    <main>
      <div style={{ background: colour }}>Displaying: {colour}</div>
      <input
        type="text"
        autoFocus
        defaultValue={"Enter Colour Here:"}
        onChange={(eventObject) => {
          handleColourChange(eventObject.target.value);
        }}
      />
    </main>
  );
}
