import React, { Fragment, useRef, useState } from "react";
import { makeid } from "../../dataFile";
import classes from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const Form = ({ setQuotes, addToLocalStorage }) => {
  const navigate = useNavigate();
  const inputAuthor = useRef();

  const inputQuote = useRef();
  const [authorError, setAuthorError] = useState(false);
  const [quoteFieldError, setQuoteFieldError] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (inputAuthor.current.value === "") {
      setAuthorError(true);
      setTimeout(() => {
        setAuthorError(false);
      }, 3000);
      return;
    }

    if (inputQuote.current.value === "") {
      setQuoteFieldError(true);
      setTimeout(() => {
        setQuoteFieldError(false);
      }, 3000);
      return;
    }

    const data = {
      quoteText: inputQuote.current.value,
      author: inputAuthor.current.value,
      id: makeid(),
    };

    setQuotes((prev) => [...prev, data]);
    addToLocalStorage(data);
    navigate("/quotes");
  };

  return (
    <Fragment>
      <form className={classes.form}>
        <div className={classes.content}>
          <label>Author</label>
          <input
            ref={inputAuthor}
            type="text"
            className={`${classes.authorField} ${
              authorError ? classes.error : ""
            }`}
          />
          <label>Text</label>
          <textarea
            ref={inputQuote}
            className={`${classes.quoteField} ${
              quoteFieldError ? classes.error : ""
            }`}
          />
          <button onClick={onSubmitHandler}>Add Quote</button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
