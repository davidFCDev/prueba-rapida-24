import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const URL_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

function App() {
  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    fetch(URL_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => setRandomFact(data.fact));
  }, []);
  
  return (
    <>
      <h1>App de gatitos</h1>

      <button>New fact</button>

      {randomFact && <p>{randomFact}</p>}
    </>
  );
}

export default App;
