import React from "react";
import nav from "../data/nav";

const NavItem = ({ className, href, children }) => (
  <li className={`mh2-ns f5 f5-l mb4 fw5 ${className}`}>
    <a className="no-underline" href={href}>
      {children}
    </a>
  </li>
);

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          {nav.map((item) => (
            <NavItem {...item} />
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
