import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";
import banner from "../assets/images/banner.png";
import mypic from "../assets/images/me.jpeg";
import resume from "../assets/resume.pdf";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import SideNav from "./utils/SideNav";
// ..
AOS.init();
const Home = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(false)}
      className="w-full h-full bg-primary overflow-x-hidden "
    >
      <div className=" w-full px-5 ">
        <div className="bg-primary w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 border-b border-white/10">
          <header className=" md:max-w-6xl w-full mx-auto flex justify-between items-center py-5 px-5 lg:px-0 ">
            <h1 className="text-white text-xl font-semibold font-mono cursor-pointer">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                &lt;/Codereg.
                <span className="text-secondary font-mono">Tech</span>&gt;
              </Link>
            </h1>

            <div
              onClick={(e) => {
                setActive(!active);
                e.stopPropagation();
              }}
              className={`${
                active ? "active" : ""
              } toggle-menu md:hidden block`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <SideNav active={active} />

            <ul className="hidden md:flex gap-2 justify-between items-center">
              <li className="navItem relative text-white text-base px-2 cursor-pointer font-mono">
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="navItem relative text-white text-base px-2 cursor-pointer font-mono">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li className="navItem relative text-white text-base px-2 cursor-pointer font-mono">
                <Link
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="navItem relative text-white text-base px-2 cursor-pointer font-mono">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </header>
        </div>

        {/* hero section */}
        <div
          id="hero"
          className="hero-section relative w-full  md:h-screen-large md:max-w-6xl mx-auto  flex md:flex-row flex-col-reverse gap-8  justify-center md:justify-between items-center "
        >
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="md:max-w-lg z-40 text-center md:text-left"
          >
            <h2 className="text-white/80 text-base md:text-2xl font-sans">
              Hi There
            </h2>
            <h1 className="text-white text-3xl md:text-5xl font-mono font-bold whitespace-nowrap">
              I'm <span className="text-secondary"> John Reygun</span>
            </h1>
            <p className="text-white/80 text-lg md:text-2xl font-sans">
              Fullstack Web Developer
            </p>

            <Link
              className="bg-secondary text-white text-base px-8 py-2 mt-5 rounded-md animate-bounce duration-500 inline-block cursor-pointer"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Get Started
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="w-full h-1/2 md:h-[65%] relative flex flex-col justify-end "
          >
            <img
              className=" w-full h-[80%] md:h-full object-contain absolute md:-top-10 bottom-4"
              src={banner}
              alt=""
            />
            <img
              className="w-full min-w-[350px]"
              src="https://webstockreview.net/images/graffiti-clipart-paint-splatter-16.png"
              alt=""
            />
          </div>{" "}
          <div className="absolute bottom-5 left-0 flex lg:flex-col gap-3 items-center">
            <a
              href="https://www.facebook.com/people/John-Reygun-Danag/100004818424870/"
              className=""
            >
              <FaFacebook className="text-white text-xl" />
            </a>
            <a href="https://github.com/coderegtech" className="">
              <FaGithub className="text-white text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-reygun-danag-9a9aa0215/"
              className=""
            >
              <FaLinkedin className="text-white text-xl" />
            </a>
            <span className="lg:h-20 h-[1px] lg:w-[1px] w-20 bg-white border-l "></span>
          </div>
        </div>

        {/* About section */}
        <div
          id="about"
          className="min-h-[100vh] md:min-h-[80vh] w-full  md:max-w-6xl md:w-full mx-auto my-20 lg:my-0 flex md:flex-row flex-col gap-8 justify-around items-center md:px-5 py-5 "
        >
          <div
            data-aos="fade-right"
            className="flex-2 about-img relative shrink-0 border-4 border-secondary"
          >
            <img
              className=" relative w-56 lg:w-60 h-60 lg:h-80 object-cover bg-white"
              src={mypic}
              alt=""
            />
          </div>

          <div
            data-aos="fade-left"
            className="md:max-w-xl w-full flex flex-col items-start"
          >
            <h1 className="lg:text-3xl text-xl font-semibold text-white font-mono py-3">
              About me:
            </h1>
            <p className="lg:text-lg text-base text-white/80 font-sans">
              Hi, I am a self-taught developer with a love for acquiring new
              knowledge and skills. I am always eager to learn something new and
              challenge myself in the tech industry. My dream is to become a
              software engineer, and I am dedicated to making this dream a
              reality through my hard work and determination.
            </p>

            <div className="w-full md:w-3/4 py-8 flex  items-center justify-between">
              <div className="flex flex-col gap-2 items-start justify-center">
                <p className="text-sm md:text-base font-sans font-semibold text-white/80 ">
                  Name:
                </p>
                <p className="text-sm md:text-base font-sans font-semibold text-white/80 ">
                  Date of birth:
                </p>
                <p className="text-sm md:text-base font-sans font-semibold text-white/80 ">
                  Address:
                </p>
                <p className="text-sm md:text-base font-sans font-semibold text-white/80 ">
                  Email:
                </p>
                <p className="text-sm md:text-base font-sans font-semibold text-white/80 ">
                  Phone:
                </p>
              </div>
              <div className="flex flex-col gap-2 items-start justify-center">
                <p className="font-mono text-sm md:text-base text-white/60">
                  John Reygun A. Danag
                </p>

                <p className="font-mono text-sm md:text-base text-white/60">
                  March 25, 2002
                </p>

                <p className="font-mono text-sm md:text-base text-white/60">
                  Brgy. San Pedro, PPC, Palawan
                </p>

                <p className="font-mono text-sm md:text-base text-white/60">
                  reygundanag55@gmail.com
                </p>

                <p className="font-mono text-sm md:text-base text-white/60">
                  +(63)967-5439-528
                </p>
              </div>
            </div>

            <a
              href={resume}
              className="flex gap-3 items-center bg-secondary text-white px-8 py-2  rounded-md  duration-500 hover:gap-10"
            >
              <p>Resume</p> <FiArrowRight />
            </a>
          </div>
        </div>

        {/* Skills section */}
        <div
          id="skills"
          className="md:h-[70vh] w-full md:max-w-6xl  md:mx-auto my-14  md:px-5 flex flex-col justify-start items-center "
        >
          <h1 className="text-center text-white text-3xl font-mono font-semibold py-5">
            Skills
          </h1>
          <div className="md:max-w-lg h-full w-full  p-5 bg-black rounded-xl  ">
            <Skills />
          </div>
        </div>

        {/* portfolio section */}
        <div
          id="projects"
          className="h-full w-full md:max-w-6xl  md:mx-auto my-14  md:px-5 "
        >
          <h1 className="text-center text-white text-3xl font-mono font-semibold">
            Projects
          </h1>
          {/* <ul className="flex justify-center items-center py-5">
            <li className="px-2 text-white cursor-pointer">All</li>
            <li className="px-2 text-white cursor-pointer">Full Stack</li>
            <li className="px-2 text-white cursor-pointer">Front End</li>
            <li className="px-2 text-white cursor-pointer">Web Design</li>
          </ul> */}
          <div className="w-full h-full flex flex-wrap  justify-center items-center  gap-5 py-10 overflow-hidden">
            <Portfolio />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
