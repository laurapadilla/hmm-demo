import React from "react";
import roles from "../data/roles";

const RoleItem = ({ className, role, description }) => (
  <div>
    <li className={`f5 f5-l mb2 fw5 ${className}`}>
      <button className="btn-link no-underline pointer underline-hover">
        {role}
      </button>
    </li>
    <div>
      <p className="w-50 mb3 lh-copy">{description}</p>
    </div>
  </div>
);

class Roles extends React.Component {
  render() {
    return (
      <ul>
        {roles.map((role, id) => (
          <RoleItem {...role} key={id} />
        ))}
      </ul>
    );
  }
}

export default Roles;
