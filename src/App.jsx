import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Projects from './components/Projects'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#about" className="skip">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
