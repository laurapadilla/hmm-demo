import React from "react";
import * as Icon from "react-feather";
import roles from "../data/roles";

import Roles from "./Roles";

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3 mb5-l mb4">
          {" "}
          <Icon.User size={28} />
          User Groups
        </h1>
        <h2 className="fw5 f4 mb3">External Customers</h2>
        <p className="f5 w-60-l w-100 lh-copy mb5-l mb4">
          The external customers access the system to place orders, manage
          quality approvals, and view their data or run reports, including for
          environmental and regulatory compliance. Examples of external
          customers include: Boeing, Delta, Gulfstream.
        </p>
        <h2 className="fw5 f4 mb3">PPG CMS Employees</h2>
        <p className="f5 w-60-l w-100 lh-copy mb5-l mb4">
          The PPG CM employee uses the system to manage the inventory,
          receiving, labeling, filling orders, scanning and replenishing product
          to customer locations, and maintaining SDS and chemical data.
        </p>
        <h1 className="fw5 f4 mb4">Common Roles</h1>
        <Roles {...roles} />
      </div>
    );
  }
}

export default Users;
