// import React from "react";
import AddNewBtn from "../layout/AddNewBtn";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import ProjectContext from "../../context/project/projectContext";
import "../../css/styleV1.css";

const Projects = () => {
  const [err, setErr] = useState("");
  const [proj, setProj] = useState([]);

  const project = useContext(ProjectContext);
  const { loadProject, projects, error, deleteProject, StartLoading } = project;
  useEffect(() => {
    loadProject(); //get data from database
    StartLoading(); // turn isLoading to true
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
        <Link className="project_name_link" to={"/projectdetails/" + project._id}>
          <h4>{project.name}</h4>
          <div className="img_holder">
            <img src={project.img_path} alt="img" />
          </div>
        </Link>
        <div className="hoverBtns waves-effect waves-light ">
          <button
            className="btn btn-floating waves-effect waves-light red deleteBtn"
            onClick={() => {
              deleteProject(project._id);
            }}
          >
            <i className="material-icons">delete</i>
          </button>
          <button className="btn btn-floating waves-effect waves-light indigo accent-4">
            <Link to={"/projectdetails/" + project._id} className="demo">
              <i className="far fa-eye"></i>
            </Link>
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="project_area">
      <h1>Projects</h1>
      <p>A small selection of my projects</p>

      <div className="grid_list">
        {project_list.length ? project_list : "No data"}
      </div>
      <div className="addBTN">
        <AddNewBtn />
      </div>
    </div>
  );
};

export default Projects;
