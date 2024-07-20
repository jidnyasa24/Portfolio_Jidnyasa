import React from 'react';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/Skills';  // Ensure correct path
import Projects from './components/Projects/Projects';  // Add a Projects component
import Contact from './components/Contact/contact';
import Navbar from './components/Navbar';  // Ensure correct path
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <section id="about">
      </section>
      <section id="skills">
        <Skills />  {/* Include the Skills component */}
      </section>
      <section id="projects">
        <Projects />  {/* Add Projects component */}
      </section>
      <section id="contact">
        <Contact />  {/* Include Contact component */}
      </section>
      <Footer />
  
    </div>
  );
}

export default App;
