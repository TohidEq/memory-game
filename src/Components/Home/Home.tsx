import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

type Props = {};

const Home = (props: Props) => {
  const cardImages: { src: string }[] = [
    { src: "/img/helmet-1.png" },
    { src: "/img/potion-1.png" },
    { src: "/img/ring-1.png" },
    { src: "/img/scroll-1.png" },
    { src: "/img/shield-1.png" },
    { src: "/img/sword-1.png" },
  ];

  const [cards, setCards] = useState<{ src: string; id: number }[]>([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState<string>("");
  const [choiceTwo, setChoiceTwo] = useState<string>("");

  // shuffle cards :
  const shuffleCards = () => {
    const shuffledCards: { src: string; id: number }[] = [
      ...cardImages,
      ...cardImages,
    ]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a Choice
  const handleChoice = (card: { src: string; id: number }) => {
    choiceOne ? setChoiceTwo(card.src) : setChoiceOne(card.src);
  };

  return (
    <div className="home">
      <h1>Memory Game</h1>
      <button className="button" onClick={shuffleCards}>
        New Game
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card={card} key={card.id} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
};

export default Home;
