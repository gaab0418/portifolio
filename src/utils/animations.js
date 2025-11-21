// Variantes de animação centralizadas para framer-motion

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 },
};

export const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Configurações de viewport para scroll animations
export const viewportConfig = {
  once: true,
  amount: 0.3,
};

export const viewportConfigMore = {
  once: true,
  amount: 0.4,
};

// Transições padrão
export const defaultTransition = {
  duration: 0.5,
  ease: [0.4, 0, 0.2, 1],
};

export const fastTransition = {
  duration: 0.3,
  ease: [0.4, 0, 0.2, 1],
};

export const slowTransition = {
  duration: 0.8,
  ease: [0.4, 0, 0.2, 1],
};

