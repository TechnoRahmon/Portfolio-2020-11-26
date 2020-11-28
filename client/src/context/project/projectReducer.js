import {
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT_DETAILS,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        loading: true,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        loading: true,
      };
    case GET_PROJECT_DETAILS:
      return {
        ...state,
        project: [action.payload, ...state.project],
        loading: true,
      };

    case DELETE_PROJECT:
      return { ...state, projects: [action.payload, ...state.projects] };

    case ERROR_PROJECT:
      return {
        ...state,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};
