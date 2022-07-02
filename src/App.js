import { Fragment, useEffect, useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import AllQuotes from "./components/AllQuotes/AllQuotes";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import QuoteDetail from "./components/QuoteDetail/QuoteDetail";
import NotFound from "./components/NotFound/NotFound";

const LOCAL_STORAGE_KEY = "quotes";
function App() {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState([]);

  const TITLE = "Quotes App";

  useEffect(() => {
    document.title = TITLE;
  }, [TITLE]);

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const getData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parseData = JSON.parse(getData);
    setQuotes(parseData);
  }, []);

  const addQuoteToLocalStorage = (data) => {
    const getDataFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parseData = JSON.parse(getDataFromLocalStorage);
    const arrOfQuotes = [...parseData];
    arrOfQuotes.push(data);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arrOfQuotes));
  };

  const removeQuoteFromLocalStorage = (id) => {
    const getDataFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parseData = JSON.parse(getDataFromLocalStorage);

    const filteredQuotesAfterRemovingMatched = parseData.filter(
      (quote) => quote.id !== id
    );

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(filteredQuotesAfterRemovingMatched)
    );
    setQuotes(filteredQuotesAfterRemovingMatched);
    navigate("/quotes");
  };

  return (
    <Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes quotes={quotes} />}></Route>
        <Route
          path="/quotes/:quoteId"
          element={
            <QuoteDetail
              quotes={quotes}
              removeQuoteFromLocalStorage={removeQuoteFromLocalStorage}
            />
          }
        ></Route>
        <Route
          path="/addQuote"
          element={
            <Form
              addToLocalStorage={addQuoteToLocalStorage}
              setQuotes={setQuotes}
            />
          }
        />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/quotes/*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
}

export default App;
