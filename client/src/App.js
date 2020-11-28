import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/sidebar/Skills'
import Experience from "./components/sidebar/Experience";
import Education from "./components/sidebar/Education";
import Certification from "./components/sidebar/Certification";
import AddProjectForm from "./components/pages/AddProjectForm";
import Resumes from "./components/pages/Resume";
import {Switch, Route} from 'react-router-dom'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/skills"  component={Skills}></Route>
        <Route exact path="/experience"  component={Experience}></Route>
        <Route exact path="/certification"  component={Certification}></Route>
        <Route exact path="/education"  component={Education}></Route>
        <Route exact path="/"  component={Home}></Route>
        <Route exact path="/projects"  component={Projects}></Route>
        <Route exact path="/newproject"  component={AddProjectForm}></Route>
        <Route exact path="/resumes"  component={Resumes}></Route>
      </Switch>
      

      <Footer />
    </div>
  );
}

export default App;
