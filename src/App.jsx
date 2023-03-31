import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Project from "./pages/Project";
import Scrollbar from 'smooth-scrollbar';
import { useEffect } from "react";
import { useAnimeContext } from './context/animeContext.jsx'
import { Playground } from "./pages";

// const  options = {
//   damping : 0.03,
//   thumbMinSize : 2
// }

const App = () => {
  
  // useEffect(()=>{
  //   Scrollbar.init(document.body, options);
  // },[])

  const {appRef} = useAnimeContext()


  return (
    <div>
     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            {/* <Hero /> */}
      </div>
       <Routes>
            <Route exact path="/" element={(
              <>
                <div className='relative z-0 main_section_ps' ref={appRef}>
                  <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Navbar />
                    <Hero />
                  </div>
                  <About />
                  <Experience />
                  <Tech />
                
                  <Works />
                  <Feedbacks />
                  <div className='relative z-0'>
                    <Contact />
                    <StarsCanvas />
                  </div>
                </div>
              </>
            )} />
            <Route exact path="/project" element={(
              <div className="proj_page">
                  <Project />
              </div>
            )} />

            <Route exact path="/play" element={<Playground />} />
        </Routes>
    </div>
      
  )
}

export default App