import React from "react";
import nav from "../data/nav";
import { Link } from "react-router-dom";

const NavItem = ({ className, href, children }) => (
  <li className={`mh2-ns f5 f5-l mb4 fw5 ${className}`}>
    <Link className="no-underline pointer underline-hover" to={href}>
      {children}
    </Link>
  </li>
);

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {nav.map((item, id) => (
            <NavItem {...item} key={id} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
