import React from "react";
import * as Icon from "react-feather";

import features from "../data/features";

const Features = ({ feature }) => (
  <li className="f5 f5-l mb4 fw5">
    <Icon.ArrowRight size={18} color={"green"} />
    {feature}
  </li>
);

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3-l mb4">
          {" "}
          <Icon.FileText size={26} />
          What is HMM?
        </h1>
        <p className="f5 w-70 lh-copy mb5">
          HMM, “Hazardous Materials Management”, is a system that allows us to
          fulfill best in class chemical management services for our Aerospace
          customers, by tracking container level inventory, chemical constituent
          data, product safety data sheets, quality documentation, and more. 
        </p>
        <h1 className="fw5 f3-l mb4">
          {" "}
          <Icon.Tool size={26} />
          What problems are we solving?
        </h1>
        <p className="f5 w-70 lh-copy mb5">
          Digitizing very manual processes, giving users one system to perform
          most of not all of their dauly tasks
        </p>
        <h1 className="fw5 f3-l mb4">
          <Icon.Code size={28} />
          Why the re-write?
        </h1>
        <p className="f5 w-70 lh-copy mb4">
          The “UX” project is a rewrite of the current system, to bring a
          better, more modern and attractive user experience, and to streamline
          the work processes for users.
        </p>

        <h3 className="fw5 f4-l mb3">New features</h3>
        <p className="f5 w-70 lh-copy mb4">
          Some of the new improvements and features include:
        </p>
        <ul>
          {features.map((feature, id) => (
            <Features {...feature} key={id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
