import { useState, useEffect } from 'react';

export function useTypewriter(
  text: string,
  speed: number = 38,
  startDelay: number = 600
) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let index = 0;
    let speedTimer: ReturnType<typeof setInterval> | null = null;

    const startTimer = setTimeout(() => {
      speedTimer = setInterval(() => {
        index++;
        if (index <= text.length) {
          setDisplayed(text.slice(0, index));
        } else {
          setDone(true);
          if (speedTimer) clearInterval(speedTimer);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (speedTimer) clearInterval(speedTimer);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
