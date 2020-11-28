import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import ProjectState from '../src/context/project/projectsState'
import ResumeProvider from '../src/context/resume/resumeState'

ReactDOM.render(
  <ProjectState >
    <ResumeProvider>
      <Router>
        <App />
      </Router>
  </ResumeProvider>
  </ProjectState>
  
 ,
  document.getElementById('root')
);

