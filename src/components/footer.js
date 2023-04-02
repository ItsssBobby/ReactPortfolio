import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <ul>
        <li><a className="icon-link" href="https://github.com/ItsssBobby" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a className="icon-link" href="https://www.linkedin.com/in/robert-mcmullen-949a90228/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        {/* <li><a className="icon-link" href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a></li>
        <li><a className="icon-link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li> */}
      </ul>
    </footer>
  );
}

export default Footer;
