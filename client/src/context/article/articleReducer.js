import {
  GET_ARTICLES,
  ADD_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTICLE_DETAILS,
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
      case GET_ARTICLE_DETAILS:
        return {
          ...state,
          currentArticle: action.payload,
          isLoading: true,
        };
    case DELETE_ARTICLE:
      // this is helful for debbuging
      const newArticle = state.articles.filter(
        (article) => article._id !== action.payload
      );
      return { ...state, projects: newArticle ,   addSuccess: action.success};

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
