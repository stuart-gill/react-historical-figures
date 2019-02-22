import React from "react";
import PropTypes from "prop-types";

export class Project extends React.Component {
  render() {
    return (
      <div>
        <h2 onClick={this.props.onToggleDetails}>{this.props.name}</h2>
        <p>{this.props.shortDescription}</p>
        <div className="details">
          <p>Authors: {this.props.authors}</p>
          <p>
            Link: <a href={this.props.link}>{this.props.link}</a>{" "}
          </p>
          <ul>
            {this.props.languages.map((languages, index) => (
              <li key={index}>{languages}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  onToggleDetails: PropTypes.func,
  name: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(String).isRequired,
  shortDescription: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  img: PropTypes.string
};

export default Project;
