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
    console.log("selected" + { projectId });
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
            projectId={project.projectId}
          />
        ))}
      </div>
    );
  }
}

export default PortfolioOfProjects;
