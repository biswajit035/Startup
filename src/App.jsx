import './app.scss'
import About from './components/about/About'
import AboutParallax from "./components/about/parralax/AboutParallax";
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Service from './components/services/Service';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AboutParallax title="Who We Are" />
      <About />
      <AboutParallax title="What We Do" />
      <Service />
    </div>
  );
}

export default App
