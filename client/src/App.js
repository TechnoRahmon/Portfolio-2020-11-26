import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Skills from './components/sidebar/Skills'
import Experience from "./components/sidebar/Experience";
import Education from "./components/sidebar/Education";
import Certification from "./components/sidebar/Certification";
import {Switch, Route, Router} from 'react-router-dom'
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/skills" exact component={Skills}></Route>
        <Route path="/experience" exact component={Experience}></Route>
        <Route path="/certification" exact component={Certification}></Route>
        <Route path="/education" exact component={Education}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="/projects" exact component={Projects}></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
