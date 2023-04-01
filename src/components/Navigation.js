import React from 'react';
import { NavLink } from 'react-router-dom';
import { ResumeDropdown } from './ResumeDropdown';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/portfolio" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li>
          <ResumeDropdown />
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };