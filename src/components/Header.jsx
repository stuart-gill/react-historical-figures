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
            display: flex;
          }

          .navItem {
            textalign: center;
            flex: 1;
            liststyletype: none;
            padding: 10px;
          }
        `}
      </style>
      <img src={lucienImage} />
      <h1>Portfolio</h1>
      <ul className="navList">
        <li className="navItem">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="navItem">
          <Link to="/about">About</Link>
        </li>
        <li className="navItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
