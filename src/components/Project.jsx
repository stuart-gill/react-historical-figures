import React from "react";
import PropTypes from "prop-types";

function Project(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.shortDescription}</p>
      <ul>
        {props.languages.map((languages, index) => (
          <li key={index}>{languages}</li>
        ))}
      </ul>
    </div>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(String).isRequired,
  shortDescription: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Project;
