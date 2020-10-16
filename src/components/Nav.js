import React from "react";
import nav from "../data/nav";
import { NavLink } from "react-router-dom";

const NavItem = ({ className, href, children }) => (
  <li className={`mh2-ns mr2 f6 f5-l mb4 fw5 ${className}`}>
    <NavLink
      className="no-underline pointer hover"
      exact={true}
      activeClassName="is-active"
      to={href}
    >
      {children}
    </NavLink>
  </li>
);

class Nav extends React.Component {
  render() {
    return (
      <ul className="flex db-l fixed">
        {nav.map((item, id) => (
          <NavItem {...item} key={id} />
        ))}
      </ul>
    );
  }
}

export default Nav;
