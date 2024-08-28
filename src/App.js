import { useEffect } from 'react';
import './App.css';
import About from './Components/About';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import SocialLinks from './Components/SocialLinks';
import aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    aos.init({duration:1200})
  })

  return (
    <>
    <Navbar />
    <About data-aos="zoom-in"/>
    <Skills data-aos="zoom-in"/>
    <Experience data-aos="zoom-in"/>
    <Projects data-aos="zoom-in"/>
    <Education data-aos="zoom-in"/>
    <Footer/>


    <SocialLinks/>
    </>
  );
}

export default App;
