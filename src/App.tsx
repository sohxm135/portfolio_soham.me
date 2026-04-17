import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      {/* Fixed ambient background */}
      <div className="page-bg" aria-hidden="true" />

      <div style={{ minHeight: '100vh', color: '#e4e4e7' }}>
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Projects />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
