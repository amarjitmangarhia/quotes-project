import React from "react";
import classes from "./IndividualQuote.module.css";
import { Link } from "react-router-dom";
const IndividualQuote = ({ quoteText, author, id }) => {
  return (
    <div className={classes.quote}>
      <div className={classes.content}>
        <div className={classes.quoteText}>{quoteText}</div>
        <div className={classes.author}>{author}</div>
      </div>

      <Link to={`/quotes/${id}`}>
        <button>Fullscreen</button>
      </Link>
    </div>
  );
};

export default IndividualQuote;
