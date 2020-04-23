import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <NavTabs />
          <Route exact path="/Portfolio-MarciaAdler" component={About} />
          <Route exact path="/Portfolio-MarciaAdler/about" component={About} />
          <Route
            exact
            path="/Portfolio-MarciaAdler/portfolio"
            component={Portfolio}
          />
          <Route
            exact
            path="/Portfolio-MarciaAdler/contact"
            component={Contact}
          />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
