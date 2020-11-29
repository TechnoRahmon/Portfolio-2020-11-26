// import React from "react";
import AddNewBtn from "../layout/AddNewBtn";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import ProjectContext from "../../context/project/projectContext";

const Projects = () => {
  const [err, setErr] = useState("");
  const [proj, setProj] = useState([])

  const project = useContext(ProjectContext);
  const { loadProject, projects, error } = project;
  useEffect(() => {
    loadProject();

    setProj(projects);
    if (error) {
      console.log("Error: ", error);
      setErr(error);
    }
    console.log("Projects: ", projects);
  }, [error, proj]);

  return (
    <div>
      <Link to="/newproject">
        <AddNewBtn />
      </Link>

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
