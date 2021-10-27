import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation(props) {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Andrew Ungvary</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <NavLink to="/about"><a class="nav-link" href="#">About Me</a></NavLink>
        <NavLink to="/portfolio"><a class="nav-link">Portfolio</a></NavLink>

        {/* <a class="nav-link" href="https://github.com/aungy5?tab=repositories">GitHub</a>
        <a class="nav-link" href="https://www.linkedin.com/in/aungy/">LinkedIn</a> */}

        <NavLink to="/resume"><a class="nav-link">Resume</a></NavLink>
        <NavLink to="/contact"><a class="nav-link">Contact</a></NavLink>

      </div>
    </div>
  </nav>
    );
}

export default Navigation;