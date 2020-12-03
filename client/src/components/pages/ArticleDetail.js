import React, { useState, useContext, useEffect } from "react";
import ArticleContext from "../../context/article/articleContext";

import { useHistory } from "react-router-dom";


export default function ArticleDetail(props) {
  const history = useHistory();
  const articleContext = useContext(ArticleContext);
  const { viewArticle, currentArticle, deleteArticle ,addSuccess} = articleContext;

  const [id, setId] = useState("");
  const [currentArt, setCurrentArt] = useState({});

 
  useEffect(() => {
   
 
 viewArticle(props.match.params.id); 


    console.log(id)
  }, []);
  useEffect(() => {
    setCurrentArt(currentArticle); 
  }, [currentArticle]);


 useEffect(() => {
    if (addSuccess) {
      history.push("/");
    }
 }, [history, addSuccess]);


console.log("addSc: ",addSuccess)
  return (
    <div className="atricle_details">
      {currentArt ? (
        <div className="actual_post">
          <button
            className="btn btn-floating waves-effect waves-light red deleteBtn"
            onClick={() => {
              deleteArticle(currentArt._id);
            }}
          >
            <i className="material-icons">delete</i>
          </button>
          <h1>{currentArt.title}</h1>
          <hr/>
          <p>{currentArt.content}</p>
        </div>
      ) : null}
    </div>
  );
}
