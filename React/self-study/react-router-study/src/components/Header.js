import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/main">Main</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
