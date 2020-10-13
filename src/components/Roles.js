import React, { useState } from "react";
import roles from "../data/roles";

const RoleItem = ({ className, role, description }) => {
  const [info, setInfo] = useState(false);

  return (
    <div>
      <li className={`f5 f5-l mb3 fw5 ${className}`}>
        <button
          className="btn-link no-underline pointer underline-hover"
          onClick={(id) => setInfo(!info)}
        >
          {role}
        </button>
      </li>
      {info && <p className="w-50 mb4 lh-copy">{description}</p>}
    </div>
  );
};

const Roles = () => {
  return (
    <ul>
      {roles.map((role, id) => (
        <RoleItem {...role} key={id} id={id} />
      ))}
    </ul>
  );
};

export default Roles;
