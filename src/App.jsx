import "./App.css";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImage } from "./hooks/useCatImage";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>New fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt="Random cat" />}
    </>
  );
}

export default App;
