import './App.css';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';


function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Education/>
    <Footer/>


    <SocialLinks/>
    </>
  );
}

export default App;
