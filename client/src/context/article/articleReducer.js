import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  ERROR_ARTICLE,
} from "../types";

export const ArticleReducer = (state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      // console.log("action: ",action.payload)
      return {
        ...state,
        isLoading: false, //updated to false
        articles: action.payload,
      };
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles],
        isLoading: false, //updated to false
        addSuccess: action.success, //updated
      };
    case DELETE_ARTICLE:
      // this is helful for debbuging
      const newArticle = state.projects.filter(
        (article) => article._id !== action.payload
      );
      return { ...state, projects: newArticle };

    case ERROR_ARTICLE:
      return {
        ...state,
        error: action.payload,
        isLoading: true, //updated to true
        addSuccess: action.success, //updated
      };
    default: {
      return state;
    }
  }
};
