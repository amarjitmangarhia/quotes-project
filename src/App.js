import { Fragment, useEffect, useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import AllQuotes from "./components/AllQuotes/AllQuotes";
import { Routes, Route, Navigate } from "react-router-dom";
import Form from "./components/Form/Form";
import QuoteDetail from "./components/QuoteDetail/QuoteDetail";
import NotFound from "./components/NotFound/NotFound";

const LOCAL_STORAGE_KEY = "quotes";
function App() {
  const [quotes, setQuotes] = useState([
    // {
    //   id: "a",
    //   quoteText: "Learning React is Fun!",
    //   author: "Amar",
    // },
  ]);

  const TITLE = "Quotes App";

  useEffect(() => {
    document.title = TITLE;
    console.log("i run");
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

  const addToLocalStorage = (data) => {
    const getData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parseData = JSON.parse(getData);
    const arr = [...parseData];
    arr.push(data);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
  };

  return (
    <Fragment>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/quotes" />} />
        <Route path="/quotes" element={<AllQuotes quotes={quotes} />}></Route>
        <Route
          path="/quotes/:quoteId"
          element={<QuoteDetail quotes={quotes} />}
        ></Route>
        <Route
          path="/addQuote"
          element={
            <Form addToLocalStorage={addToLocalStorage} setQuotes={setQuotes} />
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
