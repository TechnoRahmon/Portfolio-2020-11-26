import React, { userReduce } from "react";
import axios from "axios"; // dealing with rest full API
import ProjectContext from "./projectContext";

import {
  GET_PROJECTS,
  ADD_PROJECT,
  GET_PROJECT_DETAILS,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../types"; // importing action type
const ProjectState = () => {
  const initialState = {
    isLoading: true,
    projects: [], // project_list (id, title, img_url)
    currentProject: null, // signle project
    error: null,
  };

  const [state, dispacth] = userReduce(ProjectReducer, initialState);

  // loading/ getting projects

  const loadProject = async () => {
    try {
      const response = await axios.get("/api/v1/projects");
      dispacth({
        type: GET_PROJECTS,
        payload: response.data,
      });
    } catch (error) {
      dispacth({ type: ERROR_PROJECT });
    }
  };

  // add/ post project

  const addProject = async (newProjcet) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post("/api/v1/projects", newProjcet, config);
      dispacth({
        type: ADD_PROJECT,
        payload: response.data,
      });

      loadProject();
    } catch (error) {
      dispacth({ type: ERROR_PROJECT, payload: error.response.err.message });
    }
  };

  //getDetail of project

  const viewProject = async (id) => {
    try {
      const response = await axios.get("/api/v1/project/:" + id);
      dispacth({
        type: GET_PROJECT_DETAILS,
        payload: response.data.data,
      });
    } catch (error) {
      dispacth({ type: ERROR_PROJECT, payload: error.response.err.message });
    }
  };

  // Delete a project

  const deleteProject = async (id) => {
    try {
      const response = await axios.delete("/api/v1/project/:" + id);
      dispacth({
        type: DELETE_PROJECT,
        payload: id, // delete object from both db and DOM tree
      });
    } catch (error) {
      dispacth({
        type: ERROR_PROJECT,
        payload: error.response.err.message,
      });
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        isLoading: state.isLoading,
        projects: state.projects,
        currentProject: state.currentProject,
        error: state.error,
        loadProject,
        addProject,
        viewProject,
        deleteProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
