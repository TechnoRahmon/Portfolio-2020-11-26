import React, {useReducer} from 'react';
import axios from 'axios'
import ArticleContext from '../article/articleContext';
import {ArticleReducer} from '../article/articleReducer';


import {
    GET_ARTICLES,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    ERROR_ARTICLE
}
from '../types';
const ArticleState = ({children}) => {
  const initialState = {
    isLoading: true,
    articles: [],
    error: null,
    addSuccess: false, // under testing
  };

  const [state, dispatch] = useReducer(ArticleReducer, initialState);
  /// getting articles

  const getArticle = async () => {
    try {
      const response = axios.get("/api/v1/articles");
      dispatch({
        type: GET_ARTICLES,
        payload: response.data.data
      });
    } catch (error) {
       dispacth({ type: ERROR_ARTICLE, 
        payload: error.response.data.err });
    }
  }

  const addArticle = async ()=>{

  }


}