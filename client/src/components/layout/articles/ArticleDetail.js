import React, { useState, useContext, useEffect } from "react";
import ArticleContext from "./../../../context/article/articleContext";

import { useHistory } from "react-router-dom";
import AuthContext from "./../../../context/auth/authContext";


export default function ArticleDetail(props) {
  const history = useHistory();
  const articleContext = useContext(ArticleContext);
  const { viewArticle, currentArticle, deleteArticle ,addSuccess,isLoading} = articleContext;
  const {Token , isTokenValid} = useContext(AuthContext) ;

  const [id, setId] = useState("");
  const [currentArt, setCurrentArt] = useState({});

 
  useEffect(() => {
   
    isTokenValid(Token)
 viewArticle(props.match.params.id); 


    console.log(id)
  }, [Token]);

  useEffect(() => {
    setCurrentArt(currentArticle); 
  }, [currentArticle]);


 useEffect(() => {
    if (addSuccess&& (!isLoading)) {
      history.push("/");
    }
 }, [history, addSuccess,isLoading]);
 console.log('Isloading :', isLoading);

console.log("addSc: ",addSuccess)
  return (
    <div className="atricle_details">
      {currentArt ? (
        <div className="actual_post">
          {Token? 
            <button
                className="btn btn-floating waves-effect waves-light red deleteBtn"
                onClick={() => {
                  deleteArticle(currentArt._id);
                }}
              >
                <i className="material-icons">delete</i>
            </button>
          :null}
   

          <h1>{currentArt.title}</h1>
          <hr/>
          <p>{currentArt.content}</p>
        </div>
      ) : null}
    </div>
  );
}