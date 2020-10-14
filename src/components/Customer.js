import React from "react";
import * as Icon from "react-feather";
import components from "../data/components";

const Locations = ({ location, about, classname }) => (
  <>
    <p className="mb2 f5-l fw5 mt3 highlight-green">
      <Icon.CornerDownRight size={18} color={"#2a2e37"} />
      {location}
    </p>
    <p className={`${classname}`}>{about}</p>
  </>
);

const Components = ({ component, description, classname, locations }) => (
  <>
    <h4 className="mb3 f4-l fw5">{component}</h4>
    <p className={`${classname}`}>
      {locations ? (
        <div>
          {description}
          {locations.map((location, id) => (
            <Locations {...location} key={id} />
          ))}
        </div>
      ) : (
        description
      )}
    </p>
  </>
);

class Customer extends React.Component {
  render() {
    return (
      <>
        <h1 className="fw5 f3-l mb4">
          <Icon.Settings size={26} />
          Customer Setup
        </h1>
        <p className="f5 w-60 lh-copy mb4">
          Within an individual Customer Instance the customer is derived of
          different components that make up a customer. These compnents can be
          customized on a per customer basis.
        </p>

        <figure className="w-100 mb5">
          <img
            src={require("../files/customer-diagram.svg")}
            alt="customer diagram"
          />
        </figure>

        <div>
          {components.map((component, id) => (
            <Components {...component} key={id} />
          ))}
        </div>
      </>
    );
  }
}

export default Customer;
