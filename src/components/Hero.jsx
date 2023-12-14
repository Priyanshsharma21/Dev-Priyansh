import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas, Devpriyansh } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen relative mx-auto">
    <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 make_me_flex`}
      >

       <div className="head_wrap flex h-full">
        <div className='flex flex-col justify-center items-center mt-5'>
            {/* <div className='w-5 h-5 rounded-full bg-[#915EFF]' /> */}
            {/* <div className='w-1 sm:h-80 h-40 violet-gradient' /> */}
          </div>

          <div className="mt-10">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#ff5d0c]'>Priyansh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              <span className="outline_text mern">MERN</span> Stack Web Developer<br className='sm:block hidden' />
              <span className="outline_text three">Three.js </span>Developer &
              <span className="outline_text content"> Content Creator</span>
            </p>
          </div>
       </div>

       <div className="model w-full h-full pb-24 dev_ps">
          <Devpriyansh />
       </div>

       <div className="show_the_model w-full">
         <ComputersCanvas />
        </div>
      </div>


   


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
            
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero