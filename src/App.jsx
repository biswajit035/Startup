import './app.scss'
import About from './components/about/About'
import AboutParallax from "./components/about/parralax/AboutParallax";
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutParallax />
      <About />
    </div>
  );
}

export default App
