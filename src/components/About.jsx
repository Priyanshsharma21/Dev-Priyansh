import React, { useEffect, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useAnimeContext } from '../context/animeContext.jsx'
import { gsap, ScrollTrigger} from "gsap/all";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        {/* {icon} */}

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);



const About = () => {
  const {setCurrentBG} = useAnimeContext()
  const aboutRef = useRef(null)
  const textRef = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG('#1e0a55');
          gsap.to(textRef.current, {
            color: '#282828',
            duration: 1
          })
        },
        onLeaveBack: () => {
          setCurrentBG('#050816');
          gsap.to(textRef.current, {
            duration: 1
          })
        }
      }
    })
  }, [])

  return (
    <div ref={aboutRef}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I understand that a successful business relies on a great app, and that's where I come in. As a highly skilled software developer with expertise in JavaScript, Python, React, Next.js,Vuejs, Node.js, and Three.js frameworks, I have the tools and experience necessary to create efficient, scalable, and user-friendly solutions that can solve real-world problems.

        I am passionate about learning and collaborating closely with my clients to ensure that their vision is brought to life. My goal is to not only meet but exceed your expectations by delivering top-quality results in a timely and professional manner.

        Let's work together to turn your ideas into reality.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


    </div>
  )
}

export default SectionWrapper(About,'about')