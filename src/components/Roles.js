import React, { useState } from "react";
import roles from "../data/roles";

const RoleItem = ({ className, role, description }) => {
  const [info, setInfo] = useState(false);

  return (
    <div>
      <li className={`f5 f5-l mb2 fw5 ${className}`}>
        <button
          className="btn-link no-underline pointer underline-hover"
          onClick={() => setInfo(!info)}
        >
          {role}
        </button>
      </li>
      <p className="w-50 mb3 lh-copy">{description}</p>
    </div>
  );
};

const Roles = () => {
  return (
    <ul>
      {roles.map((role, id) => (
        <RoleItem {...role} key={id} />
      ))}
    </ul>
  );
};

export default Roles;
