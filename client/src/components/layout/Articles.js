import React, { useState, useContext, useEffect } from "react";
import ArticleContext from "../../context/article/articleContext";
import "../../css/styleV1.css";
import { Link , useHistory} from "react-router-dom";

export default function Acticles() {
    const [post_list , setPost_list] = useState([]); 
  const articleContext = useContext(ArticleContext);
  const { articles } = articleContext;
  const history= useHistory()
//   console.log(articles);


var arr = []; 
useEffect(()=>{
if ( articles.length){
    
    for (var i = articles.length-1; i >articles.length-5; i--) {
    arr.push(articles[i])
      //console.log("Post_list",articles[i])
  }
}

},[articles,arr])


useEffect(()=>{
  if(arr.length){
     // console.log(' post : ', arr.length)
  setPost_list(arr)
  }
  
},[articles])


  return (
    <div className="posts-box-container ">
      {post_list.length
        ? post_list.map((article) => {
            return (
              <div key={`${article.title}_${article._id}`} className="post-box ">
                <a href="#" className="blue-grey-text  text-darken-4 post" onClick={(e)=>{history.push("/articledetail/"+article._id)}} >
                  <h5>{article.title}</h5>
                  <p className="truncate">{article.content} </p>
                </a>
                  <div className="divider"></div>
              </div>
                            
          
            );
          })
        : null}
    </div>
  );
}

// This is single article that we are showing



// post_list.map((article) => {
//   return (
//     <div key={`${article.title}_${article._id}`} className="post-box ">
//       <Link to={"/articledetail/" + article._id} className="blue-grey-text  text-darken-4 post">
//         <h5>{article.title}</h5>
//         <p className="truncate">{article.content} </p>
//       </Link>
//         <div className="divider"></div>
//     </div>
                  

//   );
// })