import React from "react";
const styles = {
  header: {
    backgroundColor: "lightgrey",
    fontSize: "50px",
    color: "black",
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    flexDirection: "row",
    alignContent: "center",
    opacity: "40%",
  },
};
function Header() {
  return <header style={styles.header}>Marcia Adler</header>;
}

export default Header;
