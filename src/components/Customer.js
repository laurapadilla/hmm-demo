import React from "react";
import * as Icon from "react-feather";
import components from "../data/components";

const Locations = ({ location, about, classname }) => (
  <>
    <h3 className="mb2 f5-l fw5 mt4 orange">{location}</h3>
    <p className={`${classname}`}>{about}</p>
  </>
);

const Components = ({ component, description, classname, locations }) => (
  <>
    <h4 className="mb3 f4-l fw5">{component}</h4>
    <p className={`${classname}`}>
      {locations ? (
        <div>
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
        <p className="f5 w-70 lh-copy mb4">
          Within an individual Customer Instance the customer is derived of
          different components that make up a customer. These compnents can be
          customized on a per customer basis.
        </p>

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
