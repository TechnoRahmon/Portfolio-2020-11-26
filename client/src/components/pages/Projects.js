// import React from "react";
import AddNewBtn from "../layout/AddNewBtn";
import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import ProjectContext from "../../context/project/projectContext";
import '../../css/styleV1.css'

const Projects = () => {
  const [err, setErr] = useState("");
  const [proj, setProj] = useState([]);

  const project = useContext(ProjectContext);
  const { loadProject, projects, error, deleteProject ,StartLoading} = project;
  useEffect(() => {
    loadProject(); //get data from database 
    StartLoading() // turn isLoading to true 
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
            <img src={project.img_path} alt="img" />
          </div>

          <h5>{project.name}</h5>
        </Link>
        <button
          className="btn-small waves-effect waves-light grey deleteBtn"
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
    <div className="project_area">
      <Link to="/newproject">
      
      </Link>
      <div className="grid_list">{project_list.length ? project_list : "No data"}

      <div className="addBTN">
         <AddNewBtn />
      </div>
      
      </div>
       
    </div>
  );
};

export default Projects;
