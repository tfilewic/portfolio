
import './App.css';
import Background from './components/Background';
import WelcomeBackground from './components/WelcomeBackground';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>

      <div>
        <WelcomeBackground />
      </div>
      <div id="welcome" className="welcome">
        <Welcome />
      </div>
      <div className="background">
        <Background />
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
    </>
  );
}







export default App;
