import React from "react";

type cardType = {
  src: string;
  id: number;
  matched: boolean;
};

type Props = {
  card: cardType;
  handleChoice: Function;
  flipped: boolean;
  disabled: boolean;
};

const SingleCard = (props: Props) => {
  const handleCard = () => {
    if (!props.disabled) {
      props.handleChoice(props.card);
    }
  };

  return (
    <div className="card">
      <div className={props.flipped ? "flipped" : ""}>
        <img className="front" src={props.card.src} alt="card front" />
        <img
          className="back"
          onClick={handleCard}
          src="/img/cover.png"
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
