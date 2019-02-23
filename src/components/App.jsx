import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404.jsx";
import Home from "./Home";
import PortfolioOfProjects from "./PortfolioOfProjects";
import About from "./About";
import Contact from "./Contact";
import Admin from "./Admin";
import { v4 } from "uuid";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectList: {}
    };

    this.handleAddingNewProject = this.handleAddingNewProject.bind(this);
  }

  handleAddingNewProject(newProject) {
    var newProjectId = v4();
    var newProjectList = Object.assign({}, this.state.projectList, {
      [newProjectId]: newProject
    });
    this.setState({ projectList: newProjectList });
  }

  render() {
    return (
      <div>
        <style jsx global>
          {`
            body {
              font-family: "Poppins", sans-serif;

              background-image: url("https://s3-us-west-2.amazonaws.com/unseenworldsrecords/uploads/setting/background_image/5/Untitled-1.png");
            }
          `}
        </style>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/portfolio"
            render={() => (
              <PortfolioOfProjects projectList={this.state.projectList} />
            )}
          />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/admin"
            render={() => (
              <Admin onAddingNewProject={this.handleAddingNewProject} />
            )}
          />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
