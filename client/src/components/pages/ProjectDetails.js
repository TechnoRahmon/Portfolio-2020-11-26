import React, { useState, useContext, useEffect } from "react";
import projectContext from "../../context/project/projectContext";
import '../../css/styleV1.css'
import {Link} from "react-router-dom";
const ProjectDetails = (props) => {
  const projectDetailsContext = useContext(projectContext);
  const { viewProject, currentProject } = projectDetailsContext;

  const [id, setId] = useState("");
  const [currentProj, setCurrentProj] = useState({});

  // const viewProjectID = async(id)=>{
  // await viewProject(id);

  // }

  useEffect(() => {
    // setId(props.match.params.id);
    viewProject(props.match.params.id);
  }, []);
  useEffect(() => {
    setCurrentProj(currentProject);
  }, [currentProject]);

  // console.log("current proj: ", currentProj)
  return (
    <div className="projectDetail_container">
      {/* current project data here*/}
      {currentProj ? (
        <div className="projectDeatil_grid">
          <h2>{currentProj.name}</h2>
          <div className="project_img">
            <img src={currentProj.img_path} alt="img" />
          </div>

          <Link to={currentProj.url}>
            <b>
              <i className="fas fa-share"></i>{" "}
            </b>{" "}
          </Link>
          <Link to={currentProj.source_code}>
            {" "}
            <b>
              <i className="fab fa-github"></i>{" "}
            </b>
          </Link>

          <p>
            <b>Description: </b> {currentProj.description}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetails;
