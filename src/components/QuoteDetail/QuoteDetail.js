import React, { Fragment } from "react";
import classes from "./QuoteDetail.module.css";
import { Link, useParams } from "react-router-dom";

const QuoteDetail = ({ quotes, removeQuoteFromLocalStorage }) => {
  const params = useParams();
  const quote = quotes.find((quote) => quote.id === params.quoteId);

  const removeQuoteHandler = () => {
    removeQuoteFromLocalStorage(quote.id);
  };

  if (!quote) {
    return;
  }

  return (
    <Fragment>
      <div className={classes.quoteDetail}>
        <div className={classes.content}>
          <div className={classes.quote}>{quote.quoteText}</div>
          <div className={classes.author}>{quote.author}</div>
        </div>
        <div>
          <button className={classes.deleteButton} onClick={removeQuoteHandler}>
            Delete
          </button>
          <Link to="/quotes">
            <button className={classes.backButton}>Back</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteDetail;
