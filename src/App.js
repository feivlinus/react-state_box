import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setStatus] = useState(false);
  const [statusString, setStatusString] = useState("Activate");

  function handleClick() {
    // Check that the value changes correctly.
    setStatus(!isActive);
    if (isActive) {
      setStatusString("Activate");
    } else {
      setStatusString("Deactivate");
    }
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{statusString}</button>
    </main>
  );
}
