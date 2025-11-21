import { useEffect, useMemo, useRef, useState } from 'react';

export default function useTypewriter(
  texts,
  {
    typeSpeed = 90,
    deleteSpeed = 40,
    startDelay = 400,
    betweenWordsDelay = 1200
  } = {}
) {
  const items = useMemo(() => (Array.isArray(texts) ? texts : [texts]), [texts]);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timeout;

    const handleType = () => {
      const currentText = items[textIndexRef.current] || '';
      setDisplayText(currentText.substring(0, charIndexRef.current));

      if (!isDeletingRef.current && charIndexRef.current <= currentText.length) {
        charIndexRef.current += 1;
        setIsTyping(true);
        timeout = setTimeout(handleType, typeSpeed);
      } else if (!isDeletingRef.current && charIndexRef.current > currentText.length) {
        timeout = setTimeout(() => {
          isDeletingRef.current = true;
          handleType();
        }, betweenWordsDelay);
      } else if (isDeletingRef.current && charIndexRef.current >= 0) {
        charIndexRef.current -= 1;
        timeout = setTimeout(handleType, deleteSpeed);
      } else {
        isDeletingRef.current = false;
        textIndexRef.current = (textIndexRef.current + 1) % items.length;
        charIndexRef.current = 0;
        setIsTyping(false);
        timeout = setTimeout(handleType, startDelay);
      }
    };

    timeout = setTimeout(handleType, startDelay);

    return () => clearTimeout(timeout);
  }, [items, typeSpeed, deleteSpeed, startDelay, betweenWordsDelay]);

  return { displayText, isTyping };
}

