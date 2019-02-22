import React from "react";
import Project from "./Project";

const projectList = [
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill"
  },
  {
    name: "project 1",
    languages: ["javascript", "html"],
    shortDescription: "This project rocks",
    authors: "Stuart Gill"
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
          authors={project.authors}
          key={index}
        />
      ))}
    </div>
  );
}

export default PortfolioOfProjects;
