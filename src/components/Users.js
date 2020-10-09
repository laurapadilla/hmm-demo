import React from "react";

class Users extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3-l mb4">What is HMM?</h1>
        <p className="f5 w-70 lh-copy mb5">
          HMM, “Hazardous Materials Management”, is a system that allows us to
          fulfill best in class chemical management services for our Aerospace
          customers, by tracking container level inventory, chemical constituent
          data, product safety data sheets, quality documentation, and more. 
        </p>
        <h1 className="fw5 f3-l mb4">Why the re-write?</h1>
        <p className="f5 w-70 lh-copy">
          The “UX” project is a rewrite of the current system, to bring a
          better, more modern and attractive user experience, and to streamline
          the work processes for users.
        </p>
      </div>
    );
  }
}

export default Users;
