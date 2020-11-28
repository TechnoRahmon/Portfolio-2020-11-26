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
        isLoading: true,
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        isLoading: true,
      };
    case GET_PROJECT_DETAILS:
      return {
        ...state,
        currentProject: action.payload,
        isLoading: true,
      };

    case DELETE_PROJECT:
      // this is helful for debbuging
      const newProject = state.projects.filter(
        (project) => project._id !== action.payload
      );
      return { ...state, projects: newProject };

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
