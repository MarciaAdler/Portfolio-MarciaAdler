import React from "react";
import { Link, useLocation } from "react-router-dom";
const styles = {
  nav: {
    backgroundColor: "black",
    paddingBottom: "20px",
    opacity: "50%"
  }
};
function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav justify-content-center" style={styles.nav}>
      <li className="nav-item">
        <Link
          to="/ReactPortfolio/about"
          className={
            location.pathname === "/ReactPortfolio/about"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/ReactPortfolio/portfolio"
          className={
            location.pathname === "/ReactPortfolio/portfolio"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/ReactPortfolio/contact"
          className={
            location.pathname === "/ReactPortfolio/contact"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
