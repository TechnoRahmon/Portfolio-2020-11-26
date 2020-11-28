import {
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT_DETAILS,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../types";

export const ProjectReducer = (state, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        isLoading: false,//updated to false
        projects: action.payload,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [action.payload, ...state.projects],
        isLoading: false,//updated to false
        addSuccess:action.success,//updated 
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
        isLoading:true,//updated to true
        addSuccess:action.success, //updated
      };
    default: {
      return state;
    }
  }
};
