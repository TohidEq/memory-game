import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link to={"/"}>
        <button className="button">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
