import React from "react";

const styles = {
  images: {
    height: "60px",
    width: "auto",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
  },
  background: {
    opacity: "90%",
    backgroundImage:
      "url(https://www.pngfind.com/pngs/m/422-4223435_drone-slider-bottom-shadow-android-app-background-white.png",
  },
  content: {
    color: "black",
  },
  cardheader: {
    borderBottom: "0",
    padding: "0",
    textAlign: "center",
  },
  card: {
    height: "280px",
    width: "350px",
    backgroundColor: "#FFFBFC",
    borderRadius: "20px",
  },
  tech: {
    fontSize: "11px",
  },
  desc: {
    fontSize: "13px",
  },
  link: {
    display: "inline-block",
    marginRight: "15px",
    fontSize: "13px",
  },
};
function PortfolioItems(props) {
  return (
    <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-top align-items-center">
      <div className="card border-dark mb-3" style={styles.card}>
        <div className="card-header bg-transparent" style={styles.cardheader}>
          <img style={styles.images} alt={props.name} src={props.titleimage} />
        </div>

        <div className="content card-body pt-1 pb-1" style={styles.background}>
          <div style={styles.content}>
            <h6 className="text-center mt-1">
              <strong>{props.name}</strong>
            </h6>
            <p style={styles.desc}>{props.shortdescription}</p>
            <p style={styles.tech}>
              <i>Technologies used: {props.technologies}</i>
            </p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <strong> View App </strong>{" "}
          </a>

          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            {" "}
            <strong> View Repo</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItems;
