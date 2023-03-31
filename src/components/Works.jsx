import React, { useEffect, useRef } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger} from "gsap/all";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight } from 'react-icons/ai'
import { useAnimeContext } from '../context/animeContext.jsx'


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  );
};

const Works = () => {
  const homeProjects = projects.slice(0,3)
  const {setCurrentBG} = useAnimeContext()
  const workRef = useRef(null)
  const textRef = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: workRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG('#160505');
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
    <div ref={workRef}>
      <div variants={textVariant()}>
       <div className="flex justify-between">
       <p  className={`${styles.sectionSubText} `}>My work</p>
       <Link to="/project" className={`${styles.sectionSubText} flex items-center`}>View More <AiOutlineArrowRight /></Link>
       </div>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>


      <div className='w-full flex'>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
         Explore my Projects and discover how I turn complex problems into elegant solutions. Each project is a real-world example of my skills and expertise, providing a glimpse into my capabilities as a software developer. You'll find brief project descriptions, links to the code repositories, and live demos that showcase my ability to work with various technologies, effectively manage projects, and solve complex problems with ease.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {homeProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Works,'work')