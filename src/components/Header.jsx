import React from "react";
import { Link } from "react-router-dom";
import lucienImage from "../assets/images/lucien.png";

function Header() {
  return (
    <div>
      <style jsx>
        {`
          div {
            margin-bottom: 20px;
          }
          h1 {
            font-size: 6em;
            position: relative;
          }
          img {
            width: 200px;
            float: left;
          }

          .navList {
            padding: 0;
            margin: 0;
            position: relative;
            top: 0;
            height: 40px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
          }

          .navItem {
            textalign: center;
            padding: 10px;
          }
        `}
      </style>
      <img src={lucienImage} />
      <h1>Portfolio</h1>
      <div className="navList">
        <Link to="/portfolio" className="navItem">
          Portfolio
        </Link>{" "}
        <Link to="/about" className="navItem">
          About
        </Link>{" "}
        <Link to="/contact" className="navItem">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
