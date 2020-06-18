import React from "react";
import AboutImage from "../components/AboutImage";

const styles = {
  container: {
    marginBottom: "50px",
    marginTop: "0",
    paddingBottom: "50px",
  },
  title: {
    textAlign: "center",
  },
  p: {
    textAlign: "center",
    color: "white",
  },
};
function About() {
  return (
    <div className="container" style={styles.container}>
      <hr />
      <AboutImage />
      <p style={styles.p}>
        I am a Product Manager / Software Engineer / People Experience
        professional with a Bachelor’s in Business and Technology, an MBA with
        focuses in finance and human capital, a background in consulting and a
        certificate for Full Stack Web Development from Columbia University. I
        have experience working successfully in teams on large projects to build
        products and applications to help clients achieve their business goals.
        I have completed collecting, analyzing, and translating research and
        data into detailed product requirements, in addition to working with
        multiple stakeholders to understand their current state and create a
        solution. I like to solve problems and find better ways to do things
        through the use of data (qualitative and quantitative). My experience in
        consulting and skills from my Full Stack Web Development Certificate set
        me up well to work with teams to not only plan and develop but also
        build new products and applications to help people have a better
        experience.
      </p>
      <p style={styles.p}>
        I have experience with the following technologies: HTML, CSS,
        JavaScript, jQuery, MySQL, MongoDB, React, Express, Node JS, Bootstrap
      </p>
      <p style={styles.p}>
        I have experience with the following applications: Word, Excel,
        PowerPoint, Access, MySQL Workbench, Asana, PeopleSoft, GitHub
      </p>
    </div>
  );
}
export default About;
