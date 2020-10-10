import React from "react";
import nav from "../data/nav";
import { Link } from "react-router-dom";

const NavItem = ({ className, href, children }) => (
  <li className={`mh2-ns f5 f5-l mb4 fw5 ${className}`}>
    <Link className="no-underline" to={href}>
      {children}
    </Link>
  </li>
);

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul className="fixed">
          {nav.map((item) => (
            <NavItem {...item} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
