import React from "react";
import Project from "./Project";
import PropTypes from "prop-types";

const projectList = [
  {
    name: "Angular Radavist Rebuild",
    languages: ["javascript", "html", "angular"],
    shortDescription: "A partial clone of theradavist.com cycling website",
    authors: "Stuart Gill",
    link: "https://github.com/stuart-gill/angular-radavist-rebuild",
    projectId: "a"
  },
  {
    name: "Doctor Search",
    languages: ["javascript", "html"],
    shortDescription: "A doctor searching app using the Better Doctor API",
    authors: "Stuart Gill",
    link: "https://github.com/stuart-gill/docsearch-webpack",
    projectId: "b"
  },
  {
    name: "Library Database",
    languages: ["C#", "ASP.Net core", "MySQL", "html"],
    shortDescription: "A library database builder, search, and checkout app",
    authors: "Stuart Gill",
    link:
      "https://github.com/stuart-gill/Library.Solution/tree/master/Library/Views/Home",
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
