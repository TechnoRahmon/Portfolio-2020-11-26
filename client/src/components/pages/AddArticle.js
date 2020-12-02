import React, { useContext, useState, useEffect } from "react";
import "../../css/styleV1.css";
import { Link, useHistory } from "react-router-dom";
import ArticleContext from "../../context/article/articleContext";
export default function AddArticle() {
  const history = useHistory();
  const { addArticle, addSuccess, error } = useContext(ArticleContext);
  const [newArticle, setNewArticle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [err, setErr] = useState(null);

  useEffect(() => {
    if(error) {
      setErr(error);
    }
    if (addSuccess) {
      history.push("/");
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("new Article: ",newArticle)
    //  console.log("new content: ", newContent);

    const newObj = {
      title : newArticle,
      content: newContent
    }

    addArticle(newObj);

    setNewArticle("");
    setNewContent("")

  };

  const onChangeHandler = (e) => {
    // console.log(e.target.value)
    setNewArticle(e.target.value);
  };

  const textChangeHandler = (e)=>{
    setNewContent(e.target.value);
  }

  return (
    <div className="article_container">
    <h1>Post</h1>
    {error? <p>{error}</p> : null}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="title..."
          onChange={onChangeHandler}
          value={newArticle}
        />
        <textarea name="content"
         onChange={textChangeHandler}
         value={newContent}
         placeholder="content..."
         
         >
         </textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
