import React from "react";
import Sidebar from "../sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="side_bar_menu">
        <Sidebar />
      </div>
      <div className="card person_card z-depth-3">
        <div className="middle_section">
        <div className="img_box">
          <img src="images/person1.jpg" alt="prof" />
        </div>
        <div className="card_info">
            <h2>Heading</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          at tenetur in exercitationem sequi esse nam optio illum fugit quod!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          at tenetur in exercitationem sequi esse nam optio illum fugit quod
        </p>
        </div>
      
      </div>
      </div>
      
      <div className="right-box">
        <div className="post">
          <h5>POST_1</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nulla nostrum expedita nemo deserunt dolore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
