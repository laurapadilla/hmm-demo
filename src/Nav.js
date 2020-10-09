import React from "react";
import nav from "./data/nav";

const NavItem = ({ className, href, children }) => (
  <li className={`mh2-ns f6 f4-l tc ${className}`}>
    <a className="no-underline" href={href}>
      {children}
    </a>
  </li>
);

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav className="pt3 pt4-ns mb4 mb0-ns">
          <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
            {nav.map((item) => (
              <NavItem {...item} />
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
