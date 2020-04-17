import React from "react";
import { Link } from "gatsby";

const Navbar = () => (
  <div className="navbar">
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/resources">Resources</Link></li>
      <li><Link to="/writeups">Writeups</Link></li>
    </ul>
    <div className="underlines">
      <div className="underline">About</div>
      <div className="underline">Resources</div>
      <div className="underline">Writeups</div>
    </div>
  </div>
)

export default Navbar;
