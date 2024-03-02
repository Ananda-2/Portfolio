import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import "./App.css"


const App = () => {
  return (
    <div>
      {/* <a href=""></a> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App