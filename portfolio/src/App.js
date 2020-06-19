import React from "react";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <NavTabs />
          <Switch>
            <Route exact path="/Portfolio-MarciaAdler" component={About} />
            <Route path="/Portfolio-MarciaAdler" component={About} />
            <Route
              path="/Portfolio-MarciaAdler/portfolio"
              component={Portfolio}
            />
            <Route path="/Portfolio-MarciaAdler/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
