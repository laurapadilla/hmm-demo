import React from "react";
import roles from "../data/roles";

const RoleItem = ({ className, role }) => (
  <li className={`f5 f5-l mb4 fw5 ${className}`}>
    <button className="btn-link no-underline pointer underline-hover">
      {role}
    </button>
  </li>
);

class Roles extends React.Component {
  render() {
    return (
      <ul className="flex flex-wrap flex-column h5">
        {roles.map((role, id) => (
          <RoleItem {...role} key={id} />
        ))}
      </ul>
    );
  }
}

export default Roles;
