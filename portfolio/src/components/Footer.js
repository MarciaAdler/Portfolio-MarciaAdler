import React from "react";
const styles = {
  footer: {
    backgroundColor: "white",
    height: "50px",
    position: "fixed",
    clear: "both",
    width: "100%",
    bottom: "0",
    paddingTop: "25px",
    opacity: "55%"
  }
};
function Footer() {
  return <footer style={styles.footer}></footer>;
}

export default Footer;
