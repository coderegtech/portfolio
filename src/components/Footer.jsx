import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" p-5 w-full text-center ">
      <h1 className="text-white text-xl font-semibold font-mono cursor-pointer">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
          &lt;/Codereg.
          <span className="text-[red] font-mono">Tech</span>&gt;
        </Link>
      </h1>

      <div className=" flex gap-3 items-center justify-center mt-2">
        <a
          href="https://www.facebook.com/people/John-Reygun-Danag/100004818424870/"
          className=""
        >
          <FaFacebook className="text-white text-2xl" />
        </a>
        <a href="https://github.com/CoderegTech" className="">
          <FaGithub className="text-white text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/john-reygun-danag-9a9aa0215/"
          className=""
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
