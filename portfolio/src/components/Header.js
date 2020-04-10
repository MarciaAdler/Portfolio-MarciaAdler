import React from "react";
const styles = {
  header: {
    backgroundColor: "lightgrey",
    fontSize: "50px",
    color: "black",
    textAlign: "center",
    paddingTop: "40px",
    flexDirection: "row",
    alignContent: "center",
    opacity: "40%",
  },
};
function Header() {
  return <header style={styles.header}>Marcia Adler</header>;
}

export default Header;
