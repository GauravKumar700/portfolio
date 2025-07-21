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

function App() {

  return (
    <>
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
