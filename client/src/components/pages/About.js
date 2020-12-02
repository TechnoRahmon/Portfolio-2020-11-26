import React from 'react';

const About = () => {
  return (
    <div className="About ">


      <div classNam="container">


      <div className="row">

          <div className="col hide-on-med-and-down m4 sid-background">
            {/* background */}
          </div>

          <div className="col s12 m6 about-content">

                <div className="row">
                    <div className="col  s12 ">
                      <h2 className=" grey-text text-darken-4 ">About Me</h2>
                    </div>
                </div>
                      
                      
                <div className="row ">
                  <div className="col Box Details s12 blue card-panel darken-4 hover">
                      <h4 >Details</h4>
                      <p >I am a developer with a very broad skillset. With experience working with HTML/CSS, JavaScript and ReactJS to
                      create responsive and interactive applications and components of different sizes and scopes. During programs
                      and projects I’ve learned and applied the most up to date ReactJS technologies like React Hooks, Custom API,
                      NextJS and state management with Redux. I’m proficient with the MERN-stack and have worked on a wide array
                      of projects and assignments.
                      </p>
                  </div>
                </div>


                      
                <div className="row ">
                  <div className="col Box Education s12 ">
                      <h4 className="blue-text">Education, courses and certificates</h4>
                        <ul className="collection list">
                          <li className="collection-item"><span className="red-text "><b>2019-2020</b></span> Cybertech - Test Automation Engineer</li>
                          <li className="collection-item"><span className="red-text "><b>2020- ongoing</b> </span>  Codify College - Fullstack Web Development Bootcamp - 15 Weeks</li>
                        </ul>
                  </div>
                </div>



                <div className="row ">
                  <div className="col Box  s12 ">
                      <h4 className="blue-text">Technologies, tools and environments</h4>
                      <div className="progress">
                          <div className="determinate" style={{width: "70%"}}></div>
                      </div>
                  </div>
                </div>

          </div>

      </div>

  </div>
    
</div>
  );
};

export default About;
