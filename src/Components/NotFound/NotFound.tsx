import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="not-found">
      <div className="head">
        <h1>404 Not Found</h1>
        <Link to={"/"}>
          <button className="button">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
