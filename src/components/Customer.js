import React from "react";
import * as Icon from "react-feather";
import components from "../data/components";
import structures from "../data/structures";

const Locations = ({ location, about, classname, highlight }) => (
  <>
    <p className={`pl4 mb2 f5-l fw5 mt3 ${highlight}`}>
      <Icon.CornerDownRight size={18} color={"#2a2e37"} />
      {location}
    </p>
    <p className={`${classname}`}>{about}</p>
  </>
);

const Structures = ({ structure, about, classname }) => (
  <>
    <h4 className="mb3 f5-l fw6">{structure}</h4>
    <p className={`${classname}`}>{about}</p>
  </>
);

const Components = ({ component, description, classname, locations }) => (
  <>
    <h4 className="mb3 f5-l fw6">{component}</h4>
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
        <h1 className="fw5 f3-l mb5">
          <Icon.Settings size={26} />
          Customer Setup
        </h1>
        <h3 className="f4-l fw5 mb3">Customer Components</h3>
        <p className="f5 w-60-l w-100 lh-copy mb4">
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
        <h3 className="f4-l fw5 mb3">Customer Structures</h3>
        <p className="f5 w-60-l w-100 lh-copy mb4">
          A customer consists of many different structure levels. The first
          structure under a Customer Instance is a Facility then a Facility
          itself may have one or more Buildings. Buildings will contain more
          than one Shop. Then the final level is the Bin/Cabinet where the
          actual inventory is assigned. All these levels together are the makeup
          of a customer instance.
        </p>
        <div>
          {structures.map((structure, id) => (
            <Structures {...structure} key={id} />
          ))}
        </div>
      </>
    );
  }
}

export default Customer;
