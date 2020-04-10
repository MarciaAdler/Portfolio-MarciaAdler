import React from "react";
import me from "../images/me.jpeg";

const styles = {
  container: {},
  image: {
    height: "200px",
    marginRight: "0px",
    borderRadius: "5em",
    marginBottom: "20px"
  }
};

function AboutImage() {
  return (
    <div className="container d-flex justify-content-center">
      <img style={styles.image} src={me} alt="Marcia" />
    </div>
  );
}

export default AboutImage;
