import React from "react";
import * as Icon from "react-feather";

class Site extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fw5 f3-l mb4">
          <Icon.Tool size={28} />
          Toolset
        </h1>
        <p className="f5 w-60 lh-copy mb5">
          The new HMM application is built with{" "}
          <a
            className="no-underline"
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Angular
          </a>{" "}
          and{" "}
          <a
            className="no-underline"
            href="https://www.telerik.com/kendo-angular-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kendo UI
          </a>
          . 
        </p>
        <h1 className="fw5 f3-l mb4">
          <Icon.Grid size={26} />
          Modules
        </h1>
        <p className="f5 w-60 lh-copy mb5">
          HMM is split into different modules that serve a differetnt purpose
          for varying user groups.
        </p>

        <h1 className="fw5 f3-l mb4">
          <Icon.Chrome size={26} />
          Application Site
        </h1>
        <p className="f5 w-60 lh-copy mb4">
          Visit the demo site{" "}
          <a
            className="no-underline"
            href="https://devppgchemicalmanagement.azurewebsites.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
        </p>
      </div>
    );
  }
}

export default Site;
