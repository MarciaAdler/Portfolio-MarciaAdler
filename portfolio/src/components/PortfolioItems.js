import React from "react";

const styles = {
  images: { height: "60px", width: "285px" },
  content: {
    color: "black",
    backgroundColor: "#d8b9c3",
  },
  cardheader: {
    borderBottom: "0",
    padding: "0",
    textAlign: "center",
  },
  card: {
    height: "280px",

    opacity: "80%",
  },
  tech: {
    fontSize: "12px",
  },
};
function PortfolioItems(props) {
  return (
    <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-top align-items-center">
      <div className="card border-dark mb-3" style={styles.card}>
        <div className="card-header bg-transparent" style={styles.cardheader}>
          <img style={styles.images} alt={props.name} src={props.titleimage} />
        </div>

        <div className="content card-body pt-1 pb-1" style={styles.content}>
          <div>
            <h6 className="text-center mt-1">
              <strong>{props.name}</strong>
            </h6>

            <p style={styles.tech}>
              <i>Technologies used: {props.technologies}</i>
            </p>
          </div>
        </div>
        <div className="card-footer">
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <strong> View App </strong>
          </a>

          <a href={props.github} target="_blank" rel="noopener noreferrer">
            <strong>View Repo</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItems;
