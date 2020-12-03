import React from "react";
import { Link } from "react-router-dom";
import '../../css/styleV1.css'

export default function Sidebar() {
  return (
    <ul className="side_bar collection  white accent-4">
      <li className="collectio-item">
        <Link className="side_link blue-grey-text  text-darken-4" to="/skills">
          <i className="fas fa-laptop-code blue-grey-text  text-darken-3"></i>
          <p>Skills</p>
        </Link>
      </li>

      <li className="collectio-item">
      
        <Link className="side_link blue-grey-text  text-darken-4" to="/experience">
          <i className="fas fa-user-clock blue-grey-text  text-darken-3"></i>
          <p>Experience</p>
        </Link>
      </li>
      <li className="collectio-item">
        <Link className="side_link blue-grey-text  text-darken-4" to="/certification">
          <i className="fas fa-graduation-cap blue-grey-text  text-darken-3"></i>
          <p>Certification</p>
        </Link>
      </li>
      <li className="collectio-item">
        <Link className="side_link blue-grey-text  text-darken-4" to="/education">
          <i className="fas fa-university   blue-grey-text  text-darken-3"></i>
          <p>Education</p>
        </Link>
      </li>
    </ul>
  );
}
