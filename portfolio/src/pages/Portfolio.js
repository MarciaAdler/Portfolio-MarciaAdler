import React, { Component } from "react";
import PortfolioItems from "../components/PortfolioItems";
import portfolioitems from "../portfolioitems.json";

const styles = {
  container: {
    marginBottom: "50px",
    paddingBottom: "30px"
  },
  title: {
    textAlign: "center"
  }
};
class Portfolio extends Component {
  state = {
    portfolioitems
  };

  render() {
    return (
      <div className="container mt-2 mb-5" style={styles.container}>
        <h1 style={styles.title}>Portfolio</h1>
        <p style={styles.title}>
          Below are samples of some of my projects. Please feel free to reach
          out with any questions or should you see something that peeks your
          interest.
        </p>
        <hr />
        {this.state.portfolioitems.map(item => (
          <PortfolioItems
            key={item.id}
            name={item.name}
            image={item.image}
            link={item.link}
            github={item.github}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>
    );
  }
}
export default Portfolio;
