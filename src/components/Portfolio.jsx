import React from "react";
import animenia from "../assets/images/animenia.png";
import bakery from "../assets/images/bakery.png";
import chatterzph from "../assets/images/chatterzph.png";
import gallery from "../assets/images/gallery.png";
import gmailclone from "../assets/images/gmail-clone.png";
import imageColorPicker from "../assets/images/image-color-picker.png";
import loginform from "../assets/images/loginform.jpg";
import netherlands from "../assets/images/netherlands.png";
import pesbook from "../assets/images/pesbook.png";
import shappey from "../assets/images/shappy.png";
import spense from "../assets/images/spense.png";
import tiktokclone from "../assets/images/tiktokclone.png";
import todoapp from "../assets/images/todoapp.png";
import worldtrip from "../assets/images/worldtrip.jpg";
import youtubeclone from "../assets/images/youtubeclone.png";
const Portfolio = () => {
  const projects = [
    bakery,
    shappey,
    chatterzph,
    todoapp,
    youtubeclone,
    tiktokclone,
    animenia,
    pesbook,
    gmailclone,
    spense,
    netherlands,
    imageColorPicker,
    loginform,
    worldtrip,
    gallery,
  ];

  return (
    <>
      {projects.map((index) => {
        return (
          <div
            key={index}
            data-aos="fade-up"
            className="portfolio-items relative max-w-[500px] w-full h-full bg-white  overflow-hidden rounded-xl"
          >
            <div className="w-full h-full bg-white">
              <img className=" w-full h-full object-cover" src={index} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Portfolio;
