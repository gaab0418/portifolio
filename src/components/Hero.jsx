import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { motion } from 'framer-motion';
import useTypewriter from '../hooks/useTypewriter';
import { heroData } from '../data/portfolioData';

export default function Hero() {
  const [isParticlesReady, setIsParticlesReady] = useState(false);
  const { displayText } = useTypewriter(heroData.typewriterPhrases, {
    typeSpeed: 80,
    deleteSpeed: 40,
    startDelay: 300,
    betweenWordsDelay: 1600
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setIsParticlesReady(true));
  }, []);

  const particleOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 120,
      fullScreen: { enable: true },
      particles: {
        number: { value: 60, density: { enable: false } },
        color: { value: ['#a855f7', '#ec4899', '#38bdf8'] },
        shape: { type: 'circle' },
        opacity: { value: 0.45 },
        size: { value: { min: 1, max: 3.2 } },
        move: {
          enable: true,
          speed: 0.65,
          direction: 'none',
          straight: false,
          outModes: { default: 'out' }
        },
        links: {
          enable: true,
          distance: 110,
          color: '#a855f7',
          opacity: 0.2,
          width: 1
        }
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false }
        }
      },
      detectRetina: true
    }),
    []
  );

  const particlesElement = useMemo(() => {
    if (!isParticlesReady) return null;
    return <Particles id="hero-particles" className="hero__particles" options={particleOptions} />;
  }, [isParticlesReady, particleOptions]);

  return (
    <section id="hero" className="hero">
      {particlesElement}

      <div className="hero__content">
        {heroData.photoUrl && (
          <motion.div
            className="hero__profile"
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <img src={heroData.photoUrl} alt={heroData.photoAlt || `Foto de ${heroData.name}`} loading="lazy" />
          </motion.div>
        )}
        <motion.div
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="hero__pill">{heroData.greeting}</span>
          <div className="hero__badge-row">
            {heroData.badges.map((badge) => (
              <span key={badge.label} className="hero__badge">
                <i className={badge.icon}></i>
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          {heroData.name}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          {heroData.highlightedRole}
          <span className="hero__typewriter">
            <span className="hero__cursor">{displayText}</span>
          </span>
        </motion.p>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          {heroData.description}
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
        >
          {heroData.ctas.map((cta) => (
            <a key={cta.label} href={cta.href} className={`hero__button hero__button--${cta.variant}`}>
              {cta.label}
              <i className="fa-solid fa-arrow-trend-up"></i>
            </a>
          ))}
        </motion.div>

        <motion.div
          className="hero__metrics"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          {heroData.metrics.map((metric) => (
            <div key={metric.label} className="hero__metric">
              <span className="hero__metric-value">{metric.value}</span>
              <span className="hero__metric-label">{metric.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.span
          className="hero__availability"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <i className="fa-solid fa-signal"></i> {heroData.availability}
        </motion.span>
      </div>
    </section>
  );
}

