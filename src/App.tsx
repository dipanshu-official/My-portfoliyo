import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PersonalDetails from './components/PersonalDetails';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <Header />
        <main>
          <Hero />
          <About />
          <PersonalDetails />
          <Resume />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;