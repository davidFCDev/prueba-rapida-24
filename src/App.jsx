import { useEffect, useState } from "react";
import "./App.css";
import { useCatFact } from "./hooks/useCatFact";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ", 3).join(" ");

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}

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
