import React, { Fragment } from "react";
import classes from "./QuoteDetail.module.css";
import { Link, useParams } from "react-router-dom";

const QuoteDetail = ({ quotes }) => {
  const params = useParams();
  const quote = quotes.find((quote) => quote.id === params.quoteId);

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
          <Link to="/quotes">
            <button>Back</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteDetail;
