import Intro from './components/Intro'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="skrollr-body">
        <Intro />
        <About />
        <Services />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App 