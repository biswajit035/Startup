import './style/app.scss'
import About from './components/about/About'
import Parallax from "./components/parralax/Parallax";
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Service from './components/services/Service';
import about from "./assets/aboutParallaxBG.jpg";
import service from "./assets/serviceParallaxBG.jpg";
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="app">
      <Navbar />
       <Hero />
      <Parallax title="Who We Are" section={about} />
      <About />
      <Parallax title="What We Do" section={service} />
      <Service />
      
      <Footer/>
    </div>
  );
}

export default App
