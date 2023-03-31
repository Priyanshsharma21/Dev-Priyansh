import { createContext, useContext, useEffect, useRef, useState } from 'react';
import {gsap} from 'gsap/all'

const AnimeContext = createContext();



export const AnimeProvider = ({ children }) => {

  const [currentBG, setCurrentBG] = useState('#050816')
  let appRef = useRef(null)

  useEffect(() => {
    gsap.to(appRef.current, {
      duration: 1,
      background: currentBG,
    })
  }, [currentBG]);

  console.log(currentBG)

 

  return (
    <AnimeContext.Provider value={{ setCurrentBG,appRef }}>
      {children}
    </AnimeContext.Provider>
  );
}


export const useAnimeContext = () => useContext(AnimeContext);