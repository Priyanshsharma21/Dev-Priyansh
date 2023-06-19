import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger} from "gsap/all";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { awards } from "../constants";
import { useAnimeContext } from '../context/animeContext.jsx'

const FeedbackCard = ({
  index,
  testimonial,
  name,
  company,
  image,
  link
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 card_text p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[20px]'>{name}</p>

    <div className='mt-1'>
      <p className='text-slate-300 tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <a href={link} target="_blank" rel="noopener noreferrer"  className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient cursor-pointer'>@</span> {company}
          </a>
          
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);



const Awards = () => {
  const {setCurrentBG} = useAnimeContext()
  const testRef = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
      scrollTrigger: {
        trigger: testRef.current,
        start: "+=200 70%",
        end: "+=00 60%",
        scrub: true,
        pinSpacing: false,
        onEnter: () => {
          setCurrentBG('#050816');
        },
        onLeaveBack: () => {
          setCurrentBG('#050816');
        }
      }
    })
  }, [])

  return (
    <div ref={testRef} className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Honors & awards.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {awards.map((award, index) => (
          <FeedbackCard key={award.name} index={index} {...award} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Awards, "");