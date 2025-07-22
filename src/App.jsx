import './App.css'
import 'boxicons/css/boxicons.min.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Qualification from './components/Qualification'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import ProjectInMind from './components/ProjectInMind'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const scrollTop = () => {
      setIsScrolled(window.scrollY >= 560)
    }
    scrollTop()

    window.addEventListener('scroll', scrollTop)

    return () => {
      window.removeEventListener('scroll', scrollTop)
    }
  }, [])


  return (
    <>
      <a href="#" className={`scrolltop ${isScrolled ? "show-scroll" : ''}`} id="scroll-top">
        <i className="bx bx-chevron-up scrolltop__icon"></i>
      </a>
      <Navbar />
      <main className='l-main'>
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Portfolio />
        <Services />
        <ProjectInMind />
        {/* <Testimonial /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
