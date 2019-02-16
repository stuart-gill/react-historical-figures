import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Error404 from "./Error404.jsx";
import Home from "./Home";
import PortfolioOfProjects from "./PortfolioOfProjects";
import About from "./About";
import Contact from "./Contact";

function App() {
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
        <Route exact path="/portfolio" component={PortfolioOfProjects} />

        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
