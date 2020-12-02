import React, { useState, useContext, useEffect } from "react";
import ArticleContext from "../../context/article/articleContext";
export default function ArticleDetail(props) {
  const articleContext = useContext(ArticleContext);
  const { viewArticle, currentArticle } = articleContext;

  const [id, setId] = useState("");
  const [currentArt, setCurrentArt] = useState({});

  // const viewProjectID = async(id)=>{
  // await viewProject(id);

  // }

  useEffect(() => {
    // setId(props.match.params.id);
    viewArticle(props.match.params.id);
    console.log(id)
  }, []);
  useEffect(() => {
    setCurrentArt(currentArticle); 
  }, [currentArticle]);

  return (
    <div>
      {currentArt ? (
        <div>
          <h1>{currentArt.title}</h1>
          <p>{currentArt.content}</p>
        </div>
      ) : null}
    </div>
  );
}
