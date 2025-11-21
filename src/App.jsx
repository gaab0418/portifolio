import { Helmet } from 'react-helmet-async';
import ScrollIndicator from './components/ScrollIndicator';
import NavigationDots from './components/NavigationDots';
import ThemeToggle from './components/ThemeToggle';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import IAAutomation from './components/IAAutomation';
import About from './components/About';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import RecentWorks from './components/RecentWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollAnimations from './hooks/useScrollAnimations';
import useTheme from './hooks/useTheme';
import { seoData } from './data/portfolioData';

function App() {
  useScrollAnimations();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <link rel="canonical" href={seoData.url} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.image} />
        <meta property="og:url" content={seoData.url} />
      </Helmet>

      <ScrollIndicator />
      <Navigation />
      <NavigationDots />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div className="container">
        <Hero />
        <IAAutomation />
        <About />
        <Stats />
        <Skills />
        <RecentWorks />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

