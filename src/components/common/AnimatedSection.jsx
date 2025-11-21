import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig, defaultTransition } from '../../utils/animations';

export default function AnimatedSection({
  children,
  variants = fadeInUp,
  viewport = viewportConfig,
  transition = defaultTransition,
  delay = 0,
  ...props
}) {
  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.animate}
      viewport={viewport}
      transition={{ ...transition, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

