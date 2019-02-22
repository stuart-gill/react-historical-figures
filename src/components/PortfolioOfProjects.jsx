import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const projectList = [
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com",
    projectId: "a"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com",
    projectId: "b"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com",
    projectId: "c"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill",
    link: "www.google.com",
    projectId: "d"
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
            shortDescription={project.shortDescription}
            key={index}
            link={project.link}
            projectId={project.projectId}
            authors={project.authors}
            languages={project.languages}
            selectedProject={this.state.selectedProject}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioOfProjects;
