import useScrollIndicator from '../hooks/useScrollIndicator';

export default function ScrollIndicator() {
  const scrollProgress = useScrollIndicator();

  return (
    <div 
      className="scroll-indicator" 
      style={{ width: `${scrollProgress}%` }}
    />
  );
}

