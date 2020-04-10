import React from "react";
import AboutImage from "../components/AboutImage";

const styles = {
  container: {
    marginBottom: "50px",
    marginTop: "0",
    paddingBottom: "50px"
  },
  title: {
    textAlign: "center"
  },
  p: {
    textAlign: "center"
  }
};
function About() {
  return (
    <div className="container" style={styles.container}>
      <hr />
      <AboutImage />
      <p style={styles.p}>
        I am a Product Manager/Product Developer with a Bachelors’s in Business
        and Technology, an MBA, a background in consulting and a certificate for
        Full Stack Web Development from Columbia University. I have experience
        working successfully in teams on large projects to build products and
        applications to help clients achieve their business goals. I have
        completed requirements gathering, as well as debugging and testing
        products to ensure they meet the needs of clients and work as desired. I
        like to solve problems and find better ways to do things. My experience
        in consulting and skills from my certificate set me up well to work with
        teams to not only plan and develop but also build new products and
        applications.
      </p>
    </div>
  );
}
export default About;
