import React, { useState, useContext, useEffect } from "react";
import ArticleContext from "../../context/article/articleContext";
import "../../css/styleV1.css";
import { Link } from "react-router-dom";

export default function Acticles() {
    
  const articleContext = useContext(ArticleContext);
  const { articles } = articleContext;
//   console.log(articles);

//   const post_list = [];

//   for (var i = articles.length; i > articles.legnth - 4; i--) {
//     post_list.push(articles[i]);
//       console.log("Post_list",post_list)
//   }


  return (
    <div>
      {articles.length
        ? articles.map((article) => {
            return (
              <div key={article._id}>
                <Link to={"/articledetail/" + article._id}>
                  <h5>{article.title}</h5>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}

// This is single article that we are showing
