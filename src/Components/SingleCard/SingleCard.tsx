import React from "react";

type Props = {
  card: {
    src: string;
    id: number;
  };
  handleChoice: Function;
};

const SingleCard = (props: Props) => {
  const handleCard = () => {
    props.handleChoice(props.card);
  };

  return (
    <div className="card">
      <div>
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
