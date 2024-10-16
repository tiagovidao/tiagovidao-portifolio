import { useState, useEffect } from 'react';

// Hook para simular o efeito de digitação de texto.
export const useTypeWriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      const resetTimeout = setTimeout(() => {
        setDisplayText(''); 
        setIndex(0); 
      }, 10000);

      return () => clearTimeout(resetTimeout);
    }
  }, [index, text, speed]);

  return displayText;
};
