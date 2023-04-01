import React from 'react';
import { Link } from 'react-router-dom';
import { ResumeDropdown } from './ResumeDropdown';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link exact="true" to="/" activeclassname="active">
            About Me
          </Link>
        </li>
        <li>
          <Link exact="true" to="/portfolio" activeclassname="active">
            Portfolio
          </Link>
        </li>
        <li>
          <Link exact="true" to="/contact" activeclassname="active">
            Contact
          </Link>
        </li>
        <li>
          <ResumeDropdown />
        </li>
      </ul>
    </nav>
  );
}

export { Navigation };