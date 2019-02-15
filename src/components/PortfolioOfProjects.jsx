import React from "react";
import Project from "./Project";

const projectList = [
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks"
  },
  {
    name: "project 2",
    languages: ["javascript", "html", "angular"],
    shortDescription: "This project was sick"
  }
];

function PortfolioOfProjects() {
  return (
    <div>
      {projectList.map((project, index) => (
        <Project
          name={project.name}
          languages={project.languages}
          shortDescription={project.shortDescription}
          key={index}
        />
      ))}
    </div>
  );
}

export default PortfolioOfProjects;
