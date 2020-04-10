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
          <Route exact path="/ReactPortfolio" component={About} />
          <Route exact path="/ReactPortfolio/about" component={About} />
          <Route exact path="/ReactPortfolio/portfolio" component={Portfolio} />
          <Route exact path="/ReactPortfolio/contact" component={Contact} />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
