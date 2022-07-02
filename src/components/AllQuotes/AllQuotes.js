import IndividualQuote from "../IndividualQuote/IndividualQuote";
import classes from "./AllQuotes.module.css";
import { Link } from "react-router-dom";

const AllQuotes = ({ quotes }) => {
  return (
    <div className={classes.main}>
      <div className={classes.list}>
        {quotes.length > 0 ? (
          quotes.map((quote) => (
            <IndividualQuote
              key={quote.id}
              id={quote.id}
              quoteText={quote.quoteText}
              author={quote.author}
            />
          ))
        ) : (
          <div className={classes.noQuotesFound}>
            <p className={classes.heading}>No Content Found.</p>;
            <p className={classes.sub}>
              Try{" "}
              <Link to="/addQuote">
                <span>Adding </span>
              </Link>
              or Refreshing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllQuotes;
