import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/sidebar/Skills'
import Experience from "./components/sidebar/Experience";
import Education from "./components/sidebar/Education";
import Certification from "./components/sidebar/Certification";
import AddProjectForm from "./components/pages/AddProjectForm";
import ProjectDetails from "./components/pages/ProjectDetails";
import Resumes from "./components/pages/Resume";
import NotFound from "./components/pages/NotFound";
import NavBar from './components/layout/Navbar';
import {Switch, Route} from 'react-router-dom';
import About from './components/pages/About';
import './css/App.css';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <Switch>
        <Route exact path="/skills"  component={Skills}></Route>
        <Route exact path="/experience"  component={Experience}></Route>
        <Route exact path="/certification"  component={Certification}></Route>
        <Route exact path="/education"  component={Education}></Route>
        <Route exact path="/"  component={Home}></Route>
        <Route exact path="/projects"  component={Projects}></Route>
        <Route exact path="/newproject"  component={AddProjectForm}></Route>
        <Route exact path="/projectdetails/:id"  component={ProjectDetails}></Route>
        <Route exact path="/resumes"  component={Resumes}></Route>
        <Route exact path="/about"  component={About}></Route>
        <Route  component={NotFound}></Route>

      </Switch>
      <Footer />

      
    </div>
  );
}

export default App;
