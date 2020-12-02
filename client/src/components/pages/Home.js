import React , {useEffect, useContext}from "react";
import Sidebar from "../sidebar/Sidebar";
import Articles from "../layout/Articles";
import { Link } from "react-router-dom";
import ArticleContext from '../../context/article/articleContext'
const Home = () => {
  const { getArticle, error } = useContext(ArticleContext);
  useEffect(()=>{
    
    getArticle();

  },[])
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium at tenetur in exercitationem sequi esse nam optio
              illum fugit quod! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Praesentium at tenetur in exercitationem sequi
              esse nam optio illum fugit quod
            </p>
          </div>
        </div>
      </div>

      <div className="right-box">
        <Link to="/addarticle">
          <button>Add new Article</button>
        </Link>
        {error ? error : null}
        <Link to="/articledetail">
          <Articles />
        </Link>
      </div>
    </div>
  );
};

export default Home;
