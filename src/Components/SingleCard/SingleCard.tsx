import React from "react";

type Props = {
  card: {
    src: string;
    id: number;
  };
};

const SingleCard = (props: Props) => {
  
  return (
    <div className="card">
      <div>
        <img className="front" src={props.card.src} alt="card front" />
        <img className="back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;
