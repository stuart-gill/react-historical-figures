import React from "react";
import Project from "./Project";

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

function PortfolioOfProjects() {
  return (
    <div>
      {projectList.map((project, index) => (
        <Project
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

export default PortfolioOfProjects;
