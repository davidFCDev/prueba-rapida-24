import "./App.css";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { fact, refreshFact } = useCatFact();

  const handleClick = () => {
    refreshFact();
  };

  return (
    <>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>New fact</button>

      {fact && <p>{fact}</p>}
    </>
  );
}

export default App;
