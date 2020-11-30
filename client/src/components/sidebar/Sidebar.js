import React from "react";
import { Link } from "react-router-dom";
import '../../css/styleV1.css'

export default function Sidebar() {
  return (
    <ul className="side_bar">
      <li>
        <Link className="side_link" to="/skills">
          <i className="fas fa-laptop-code"></i>
          <p>skills</p>
        </Link>
      </li>

      <li>
        {" "}
        <Link className="side_link" to="/experience">
          <i className="fas fa-user-clock"></i>
          <p>Experience</p>
        </Link>
      </li>
      <li>
        <Link className="side_link" to="/certification">
          <i className="fas fa-graduation-cap"></i>
          <p>Certification</p>
        </Link>
      </li>
      <li>
        <Link className="side_link" to="/education">
          <i className="fas fa-university"></i>
          <p>Education</p>
        </Link>
      </li>
    </ul>
  );
}
