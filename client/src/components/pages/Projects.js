import React from "react";
import AddNewBtn from "../layout/AddNewBtn";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <AddNewBtn />
      <div className="project_box">
        <div className="actual_project">
          <div className="project_img">
            <img src="images/avatar.png" alt="img" />
          </div>
          <h3>Title</h3>
          <h4>Description</h4>
          <div className="url">
            <Link to="#">github</Link>
          </div>
        </div>
        <div className="actual_project">
          <div className="project_img">
            <img src="images/avatar.png" alt="img" />
          </div>
          <h3>Title</h3>
          <h4>Description</h4>
          <div className="url">
            <Link to="#">github</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
