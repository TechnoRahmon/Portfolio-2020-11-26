import React from "react";
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return (
    <div className="home">
     <Sidebar />
      <div className="middle_section">
        <div className="img_box">
          <img src="images/avatar.png" alt="prof" />
        </div>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          at tenetur in exercitationem sequi esse nam optio illum fugit quod!
        </p>
      </div>
      <div className="right">
        <div className="post_1">
          <h5>POST_1</h5>
        </div>
        <div className="post_1">
          <h5>POST_2</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
