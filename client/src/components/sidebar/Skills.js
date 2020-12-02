import React from "react";
import "../../css/styleV1.css";
const Skills = () => {
  return (
    <div className="skills-container">
      <h1> My Skills</h1>
      <div className="skille_grid">
        <div className="grid-right">
          <h5>HTML/CSS</h5>
          <div className="progress">
            <div className="determinate" style={{ width: "90%" }}></div>
          </div>
          <h5>JAVASCRIPT</h5>
          <div className="progress">
            <div className="determinate" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="grid-middle">
          <h5>JAVA</h5>
          <div className="progress">
            <div className="determinate" style={{ width: "85%" }}></div>
          </div>
          <h5>PYTHON</h5>
          <div className="progress">
            <div className="determinate" style={{ width: "60%" }}></div>
          </div>
        </div>
        <div className="grid-left">
          <h5>REACT</h5>
          <div className="progress">
            <div className="determinate" style={{ width: "90%" }}></div>
          </div>
          <h5>C#</h5>
          <div className="progress">
            <div className="determinate" style={{ width: "50%" }}></div>
          </div>
        </div>
      </div>
        <h1>IDEs</h1>
      <div className="tool_img">
    
        <div className="ides">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"
            alt="vsc"
          />
        </div>
        <div className="ides">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/IntelliJ_IDEA_Logo.svg/1024px-IntelliJ_IDEA_Logo.svg.png"
            alt="vsc"
          />
        </div>
        <div className="ides">
          <img
            src="https://www.eclipse.org/artwork/images/v2/logo-800x188.png"
            alt="vsc"
          />
        </div>
        <div className="ides">
          <img
            src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
            alt="vsc"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
