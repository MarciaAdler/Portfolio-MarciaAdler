import React from "react";
import { Link, useLocation } from "react-router-dom";
const styles = {
  nav: {
    backgroundColor: "lightgrey",
    padding: "10px",
    opacity: "50%",
    fontSize: "20px",
  },
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
          to="/Portfolio-MarciaAdler"
          className={
            location.pathname === "/Portfolio-MarciaAdler"
              ? "nav-link active"
              : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item" style={styles.link}>
        <Link
          to="/Portfolio-MarciaAdler/portfolio"
          className={
            location.pathname === "/Portfolio-MarciaAdler/portfolio"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio-MarciaAdler/contact"
          className={
            location.pathname === "/Portfolio-MarciaAdler/contact"
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
