import React from "react";
import { Link } from "react-scroll";

const SideNav = ({ active }) => {
  console.log(active);
  return (
    <>
      <ul
        className={`${
          active ? "left-0" : "-left-full "
        } absolute top-20 duration-300 bg-primary/80 w-1/2 h-screen p-5 flex flex-col gap-5 items-start`}
      >
        <li className="navItem relative text-white text-lg px-2 cursor-pointer font-mono">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li className="navItem relative text-white text-lg px-2 cursor-pointer font-mono">
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
        <li className="navItem relative text-white text-lg px-2 cursor-pointer font-mono">
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
        <li className="navItem relative text-white text-lg px-2 cursor-pointer font-mono">
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
        {/* <li className="navItem relative text-white text-lg px-2 cursor-pointer font-mono">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact
                </Link>
              </li> */}
      </ul>
    </>
  );
};

export default SideNav;
