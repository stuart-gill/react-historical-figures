import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const projectList = [
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com"
  }
];

class PortfolioOfProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProject: null
    };
    this.handleSelectProject = this.handleSelectProject.bind(this);
  }

  handleSelectProject(projectId) {
    this.setState({ selectedProject: projectId });
  }

  render() {
    return (
      <div>
        {projectList.map((project, index) => (
          <Project
            onSelectProject={this.handleSelectProject}
            name={project.name}
            languages={project.languages}
            shortDescription={project.shortDescription}
            authors={project.authors}
            link={project.link}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioOfProjects;
