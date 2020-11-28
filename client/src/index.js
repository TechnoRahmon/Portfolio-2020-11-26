import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import ProjectState from '../src/context/project/projectsState'
ReactDOM.render(
  <ProjectState >
    <Router>
    <App />
  </Router>
  </ProjectState>
  
 ,
  document.getElementById('root')
);

