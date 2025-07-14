
import './App.css';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <div id="welcome" className="page">
        <Welcome />
      </div>
      <NavBar />
      <div id="projects" className="page">
        <Project />
        <Project />
      </div>
      <div id="about" className="page">
        <About />
      </div>
      <div id="contact" className="page">
        <Contact />
      </div>
    </div>

  );
}

export default App;
