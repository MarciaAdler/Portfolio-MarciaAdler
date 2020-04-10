import React from "react";

const styles = {
  images: { height: "200px" }
};
function PortfolioItems(props) {
  return (
    <div className="row">
      <div className="col-12 col-md-3 col-lg-3 d-flex justify-content-center align-items-center">
        <div className="img-container">
          <img style={styles.images} alt={props.name} src={props.image} />
        </div>
      </div>
      <div className="col-12 col-md-8 col-lg-8">
        <div className="content">
          <ul>
            <li>
              <strong>Name: </strong>
              {props.name}
            </li>
            <li>
              <strong>
                Click{" "}
                <a href={props.link} target="_blank">
                  Here
                </a>{" "}
                to view app
              </strong>
            </li>
            <li>
              <strong>
                Click{" "}
                <a href={props.github} target="_blank">
                  Here
                </a>{" "}
                to view repo on Github
              </strong>
            </li>
            <li>
              <strong>Description: </strong>
              {props.description}
            </li>
            <li>
              <strong>Technologies used: </strong>
              {props.technologies}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItems;
