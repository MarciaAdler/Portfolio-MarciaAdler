import React from "react";
const styles = {
  header: {
    backgroundColor: "black",
    fontSize: "50px",
    color: "white",
    textAlign: "center",
    paddingTop: "40px",
    flexDirection: "row",
    alignContent: "center",
    opacity: "50%"
  }
};
function Header() {
  return <header style={styles.header}>Marcia Adler</header>;
}

export default Header;
