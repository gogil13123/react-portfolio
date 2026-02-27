import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee, { MarqueeItem } from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const marqueeSkills = [
    'Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading',
    'Motion Graphics', 'Storytelling', 'Digital Platforms'
  ];

  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Marquee>
        {marqueeSkills.map((skill, i) => (
          <MarqueeItem key={i} text={skill} />
        ))}
      </Marquee>
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
