import './App.css';
import WelcomeBackground from './components/WelcomeBackground';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';



function App() {
  return (
    <div className="app">

      <div>
        <WelcomeBackground />
      </div>
      <div id="welcome" className="welcome">
        <Welcome />
      </div>

      <NavBar />      
      <div id="projects">
        <Projects />
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
