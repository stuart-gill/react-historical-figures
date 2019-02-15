import React from "react";
import { Link } from "react-router-dom";
// import farmersImage from "../assets/images/farmers.jpeg";

function Header() {
  return (
    <div>
      <style jsx>
        {`
          div {
            margin-bottom: 20px;
          }
          h1 {
            text-align: center;
          }
          img {
            max-width: 100%;
            height: auto;
          }

          button {
            color: white;
            background-color: darkgrey;
            font-size: 1rem;
            font-weight: bold;
            width: 150px;
            height: 50px;
            margin: auto;
            border-radius: 10%;
            border: 2px solid black;
          }
        `}
      </style>
      {/* <img src={farmersImage} /> */}
      <h1>Portfolio</h1>
      <Link to="/portfolio">
        <h3>Portfolio</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </div>
  );
}

export default Header;
