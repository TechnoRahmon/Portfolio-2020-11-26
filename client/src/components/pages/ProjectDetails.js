import React, { useState, useContext, useEffect } from "react";
import projectContext from "../../context/project/projectContext";
import '../../css/styleV1.css'

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
      ProjectDetails
      {currentProj ? (
        <div>
          <h3>{currentProj.name}</h3>
          <p> {currentProj.url}</p>
          <p> {currentProj.source_code}</p>
          <p> {currentProj.img_path}</p>
          <p> {currentProj.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectDetails;
