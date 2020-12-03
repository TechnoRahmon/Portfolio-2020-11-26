import React , {useEffect, useContext}from "react";
import Sidebar from "../Sidebar";
import Articles from "../../layout/Articles";
import { Link } from "react-router-dom";
import ArticleContext from '../../../context/article/articleContext'
import  '../../../css/mediaQ/MQHome.css';
import CertificationComponent from '../Certification';
import MobilSidebar from "../../sidebar/MobileSidbar";


const Certification = () => {
  const { getArticle, error } = useContext(ArticleContext);
  useEffect(()=>{
    
    getArticle();
    window.scrollTo(0, 0); 
  },[])
  return (
  <div className="home ">

    <div className="container home-container">
        
        <div className="row home-row">


            {/* sidbar  */}
            <div className="card side_bar_menu col s12 l2 left hide-on-med-and-down navbar">
              <Sidebar />
            </div>
         


            {/* middleCard */}
            <div className="card person_card z-depth-3 col s12 l5 offset-l1 center ">

                <div className="middle_section blue-grey-text  text-darken-4">

                
                    <CertificationComponent/>


                </div>

            </div>



          {/* Mobile sidbar  */}
          <div className="card side_bar_menu col s12 l2 left show-on-small mobile-nav-section">
              <MobilSidebar />
            </div>


            {/* post section */}
            <div className="card right-box col s12 l3 right center">
              <h3 className="blue-grey-text  text-darken-4">
                <i className="fas fa-blog "></i>
                  My Blog
                </h3>
                <div className="divider"></div>

              <Link to="/addarticle" className="blue-grey-text  text-darken-4 add-post-box">
                <button className="btn btn-floating  waves-effect waves-light blue-grey darken-3">
                   <i className="material-icons">add</i>
                   </button>
                   <span>Add post</span>
              </Link>

              {error ?<p className="center red viewPostErro"> error </p> : null}
              
                <Articles />
             
            </div>

        </div>
    </div>
  </div>
  );
};

export default Certification;
