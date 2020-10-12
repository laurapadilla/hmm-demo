import React from "react";
import roles from "../data/roles";

const RoleItem = ({ className, role, description, showInfo }) => (
  <div>
    <li
      className={`f5 f5-l mb2 fw5 ${className}`}
      onMouseOver={this.toggleInfo}
      // this runs when our mouse leaves the attraction element
      onMouseLeave={this.closeInfo}
    >
      <button className="btn-link no-underline pointer underline-hover">
        {role}
      </button>
    </li>
    <div
      style={{
        // we do a test to see wether our showInfo state is true
        // if it is, we change the transform to be none, otherwise -100%
        display: showInfo ? "none" : "block",
      }}
    >
      <p className="w-50 mb3 lh-copy">{description}</p>
    </div>
  </div>
);

class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
    // here we tell our toggleInfo about this by using bind,
    // otherwise things llike setState will not work
    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  // this is our own method
  toggleInfo() {
    this.setState((prevState, props) => ({
      // here we invert our showInfo boolean by using the
      // previous state and the ! exclamation mark
      showInfo: !prevState.showInfo,
    }));
  }

  closeInfo() {
    // here we use setState the usual way because we don't need
    // access to the previous state, we're just force setting the
    // showInfo state
    this.setState({
      showInfo: false,
    });
  }

  render() {
    // const { description } = this.props;
    // const { showInfo } = this.state;
    return (
      <ul>
        {roles.map((role, id) => (
          <RoleItem {...role} key={id} {...this.props} {...this.state} />
        ))}
      </ul>
    );
  }
}

export default Roles;
