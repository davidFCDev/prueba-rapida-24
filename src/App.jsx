import { useState } from "react";
import "./App.css";

function App() {

  const [randomFact, setRandomFact] = useState("");

  const firstThreeWords = randomFact.split(" ").slice(0, 3).join(" ");

  return (
    <>
      <h1>App de gatitos</h1>

      <button>New fact</button>

      {randomFact && <p>{randomFact}</p>}
    </>
  );
}

export default App;
