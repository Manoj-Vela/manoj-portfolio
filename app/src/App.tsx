import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FeaturedProjects from './components/FeaturedProjects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-[#0f0f10] min-h-screen overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Content Sections */}
      <main className="relative z-10">
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <FeaturedProjects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
