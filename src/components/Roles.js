import React from 'react';
import roles from '../data/roles';

const RoleItem = ({ className, href, role }) => (
  <li className={`f5 f5-l mb4 fw5 ${className}`}>
    <a className="no-underline" href={href}>
      {role}
    </a>
  </li>
);

class Roles extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* Col 1 */}
          <ul>
            {roles.map((role, id) => (
              <RoleItem {...role} key={id} />
            ))}
          </ul>
          {/* Col 2 */}
        </div>
      </div>
    );
  }
}

export default Roles;
