import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="side_bar">
      <Link className="links" to="/skills">Skills</Link>
      <Link className="links" to="/experience">Experience</Link>
      <Link className="links" to="/certification">Certification</Link>
      <Link className="links" to="/education">Education</Link>
    </div>
  );
}
