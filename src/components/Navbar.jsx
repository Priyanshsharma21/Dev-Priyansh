import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { AiOutlineHome,AiFillLinkedin,AiFillGithub,AiFillInstagram,AiFillYoutube } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { CgGames } from 'react-icons/cg'
import { FiPhoneCall } from 'react-icons/fi'
// import {  }


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {linkRef} = useRef(null)


  useEffect(() => {

    console.log(linkRef)


    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  

  return (
    <nav
    className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
  >
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
{/* logo */}
      {/* <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <p ref={linkRef} className='text-white text-[18px] font-bold cursor-pointer flex '>
              Priyansh &nbsp;
              <span className='sm:block hidden'> | DevDose</span>
            </p>
      </Link> */}


{/* desktop screen Nav */}
      <ul className='list-none hidden sm:flex flex-row gap-10'>
      <Link 
      ref={linkRef}
      to="/"
      onClick={() => {
              window.scrollTo(0, 0);
      }}
      className="text-secondary nav_main_links">
      Home
      </Link>


      <Link 
      ref={linkRef}
      to="/project"
      onClick={() => {
              window.scrollTo(0, 0);
      }}
      className="text-secondary nav_main_links">
      Projects
      </Link>

      <Link 
      ref={linkRef}
      to="/play"
      onClick={() => {
              window.scrollTo(0, 0);
      }}
      className="text-secondary nav_main_links">
      Playground
      </Link>

          {navLinks.map((nav) => (
            <li
            ref={linkRef}
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
      </ul>

      <ul className='list-none hidden sm:flex flex-row gap-10'>
            <div className="social_media flex">
              <a href="https://www.linkedin.com/in/priyansh-sharma-7b9520223/" target="_blank" rel="noopener noreferrer" className="ml-5 social_icons">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Priyanshsharma21" target="_blank" rel="noopener noreferrer" className="ml-5 social_icons">
                <AiFillGithub />
              </a>
              <a href="https://www.instagram.com/urdevdose/" target="_blank" rel="noopener noreferrer" className="ml-5 social_icons">
                <AiFillInstagram />
              </a>
              <a href="https://youtube.com/@UrDevDose" target="_blank" rel="noopener noreferrer" className="ml-5 social_icons">
                <AiFillYoutube />
              </a>
            </div>
      </ul>




{/* Mobile screen and Tablet Screen Nav */}
      {/* <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            <Link 
              to="/project"
              onClick={() => {
                      window.scrollTo(0, 0);
              }}
              className="text-secondary">
              Project
              </Link>
              <Link 
                to="/play"
                onClick={() => {
                        window.scrollTo(0, 0);
                }}
                className="text-secondary">
                Playground
                </Link>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}

      <div className='sm:hidden flex flex-1 justify-end items-center fixed bottom-0 left-0 w-full p-5 main_mob_nav'>
        <div className="menuItems flex justify-around w-full h-full">
         <Link to={`/`} title="Home">
          <AiOutlineHome  className="nav_mob_font"/>
         </Link>

         <Link to={`/project`} title="Projects">
          <MdDeveloperMode  className="nav_mob_font"/>
         </Link>

         <Link to={`/play`} title="Playground">
          <CgGames  className="nav_mob_font"/>
         </Link>

         <a href="#contact">
          <FiPhoneCall className="nav_mob_font" />
         </a>

        </div>
      </div>



    </div>
  </nav>
  )
}

export default Navbar