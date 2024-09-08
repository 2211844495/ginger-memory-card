import React, { useEffect, useState } from "react";
import { images } from "./components/Images";
import Header from "./components/Header";
import Card from "./components/Card";
import "./index.css";
import "./styles/Header.css";
import ScoreBox from "./components/ScoreBox";
function App() {
  const [begin, isBegin] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    shuffleImages();
  }, [clickedCards]);

  function shuffleImages() {
    const arrayOfCards = images.map((character) => ({src: character.src, name: character.name}));
    const shuffledArray = arrayOfCards.sort(() => Math.random() - 0.5);
    setCards(shuffledArray);
  }

  const handleBegin = () => {
    isBegin(true);
  };
  function updateScore(key) {
    if (clickedCards.includes(key)) {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      setClickedCards([...clickedCards, key]);
      setScore(score + 1);
    }
  };

  return (
    <>
      {begin ? (
        <>
          <ScoreBox score={score} highScore={highScore}/>
          <div className="grid-cards">
            {cards.map((character) => {
              return (
                <>
                  <Card onClick={updateScore} src={character.src} name={character.name} key={character.name}/>
                </>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <Header />
          <button className="btn" onClick={handleBegin}>
            Start Game
          </button>
        </>
      )}
    </>
  );
}

export default App;
