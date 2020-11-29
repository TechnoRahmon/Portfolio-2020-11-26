// import React from "react";
import AddNewBtn from "../layout/AddNewBtn";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import ProjectContext from "../../context/project/projectContext";

// temporary CSS
import "../pages/project.css";

const Projects = () => {
  const [err, setErr] = useState("");
  const [proj, setProj] = useState([]);

  const project = useContext(ProjectContext);
  const { loadProject, projects, error, deleteProject } = project;
  useEffect(() => {
    loadProject();

    setProj(projects);
    if (error) {
      console.log("Error: ", error);
      setErr(error);
    }
    console.log("Projects: ", projects);
  }, [error, proj]);


//   useEffect(()=>{
// deleteProject();
//   })

// Delete function


  // const project0 = projects.length?projects[0]: "no data"
  const project_list = projects.map((project) => {
    return (
      <div className="project_box" key={project._id}>
        <Link to={"/projectdetails/" + project._id}>
          <div className="img_holder">
            <img src="/images/avatar.png" alt="img" />
          </div>

          <h3>{project.name}</h3>
        </Link>
        <button
          className="btn-small waves-effect waves-light red"
          onClick={()=>{deleteProject(project._id);}}
        >
          {" "}
          <i className="material-icons">
            delete
          </i>
        </button>
      </div>
    );
  });
  return (
    <div>
      <Link to="/newproject">
        <AddNewBtn />
      </Link>
      <div className="grid_list">{project_list.length ? project_list : "No data"}</div>
    </div>
  );
};

export default Projects;
