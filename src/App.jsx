import ScrollIndicator from './components/ScrollIndicator';
import NavigationDots from './components/NavigationDots';
import ThemeToggle from './components/ThemeToggle';
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
import useTheme from './hooks/useTheme';

function App() {
  useScrollAnimations();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollIndicator />
      <NavigationDots />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
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

