import { type } from "@testing-library/user-event/dist/type";
import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

type Props = {};
type cardType = {
  src: string;
  id: number;
  matched: boolean;
};

const Home = (props: Props) => {
  const cardImages: { src: string }[] = [
    { src: "/img/helmet-1.png" },
    { src: "/img/potion-1.png" },
    { src: "/img/ring-1.png" },
    { src: "/img/scroll-1.png" },
    { src: "/img/shield-1.png" },
    { src: "/img/sword-1.png" },
  ];

  const [cards, setCards] = useState<cardType[]>([]);
  const [turns, setTurns] = useState<number | null>(null);

  const [choiceOne, setChoiceOne] = useState<cardType | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<cardType | null>(null);

  const [disabled, setDisabled] = useState<boolean>(false);

  // shuffle cards :
  const shuffleCards = () => {
    const shuffledCards: cardType[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));

    setCards(shuffledCards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setDisabled(false);
  };

  // handle a Choice
  const handleChoice = (card: cardType) => {
    choiceOne
      ? card.id !== choiceOne.id
        ? setChoiceTwo(card)
        : console.log("double click on a card? rly?")
      : setChoiceOne(card);
  };

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne!.src === choiceTwo!.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        console.log("mathced");
        resetTurn();
      } else {
        console.log("not matched");
        setTimeout(() => resetTurn(), 400);
      }
    }
  }, [choiceOne, choiceTwo]);

  // reset choice & increase turns
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns! + 1);
    setDisabled(false);
    console.log(cards);
  };

  return (
    <div className="home">
      <div className="head">
        <h1>Memory Game</h1>
        <button className="button" onClick={shuffleCards}>
          New Game
        </button>
      </div>

      <div className="turns">
        {turns !== null ? "Your Turns:" + turns : "Hi :)"}
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            disabled={disabled}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
