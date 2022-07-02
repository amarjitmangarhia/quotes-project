import React from "react";
import classes from "./MainHeader.module.css";
import { Link, NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link to="/quotes">
        <p>Great Quotes</p>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="addQuote"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
