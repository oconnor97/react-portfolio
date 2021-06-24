import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Michael O'Connor
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/projects" className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./Resume/Resume.pdf" target="_blank" download="MichaelO_resume">Resume</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
