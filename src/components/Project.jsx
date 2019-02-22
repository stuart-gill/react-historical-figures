import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return (
    <div>
      <h2>{props.name}</h2>

      <p>{props.shortDescription}</p>
      <div className="details">
        <p>Authors: {props.authors}</p>
        <p>
          Link: <a href={props.link}>{props.link}</a>{" "}
        </p>
        <ul>
          {props.languages.map((languages, index) => (
            <li key={index}>{languages}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(String).isRequired,
  shortDescription: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Project;
