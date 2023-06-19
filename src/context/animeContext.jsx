import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap/all';
import chroma from 'chroma-js';

const AnimeContext = createContext();

export const AnimeProvider = ({ children }) => {
  const [currentBG, setCurrentBG] = useState('#050816');
  let appRef = useRef(null);

  useEffect(() => {
    const calculateGradient = () => {
      const firstColor = currentBG;
      const secondColor = chroma(firstColor).darken().hex();
      const thirdColor = chroma(firstColor).brighten().hex();
      const forthColor = chroma(firstColor).darken().hex();


      return `linear-gradient(to right, ${firstColor},${thirdColor}, ${secondColor})`;
    };

    const gradient = calculateGradient();

    gsap.to(appRef.current, {
      duration: 1,
      background: gradient,
    });
  }, [currentBG]);

  return (
    <AnimeContext.Provider value={{ setCurrentBG, appRef }}>
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnimeContext = () => useContext(AnimeContext);
