import React from "react";
import Roles from "./Roles";

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3-l mb4">External Customers</h1>
        <p className="f5 w-70 lh-copy mb5">
          The external customers access the system to place orders, manage
          quality approvals, and view their data or run reports, including for
          environmental and regulatory compliance. Examples of external
          customers include: Boeing, Delta, Gulfstream.
        </p>
        <h1 className="fw5 f3-l mb4">PPG CMS Employees</h1>
        <p className="f5 w-70 lh-copy mb5">
          The PPG CM employee uses the system to manage the inventory,
          receiving, labeling, filling orders, scanning and replenishing product
          to customer locations, and maintaining SDS and chemical data.
        </p>
        <h1 className="fw5 f3-l mb4">Common Roles</h1>
        <Roles />
      </div>
    );
  }
}

export default Users;
