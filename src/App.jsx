import { useEffect } from 'react';
import ScrollIndicator from './components/ScrollIndicator';
import NavigationDots from './components/NavigationDots';
import Header from './components/Header';
import About from './components/About';
import Stats from './components/Stats';
import Brands from './components/Brands';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import RecentWorks from './components/RecentWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';

function App() {
  useScrollAnimations();

  return (
    <>
      <ScrollIndicator />
      <NavigationDots />
      
      <div className="container">
        <Header />
        <About />
        <Stats />
        <Brands />
        <Experience />
        <Education />
        <Skills />
        <RecentWorks />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

