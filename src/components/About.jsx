import React from "react";
import coding_gif from "../assets/images/coding.gif";

function About() {
  return (
    <div className="mx-auto h-auto my-36 max-xl:my-20" id="about">
      <div className="flex gap-6 justify-between items-center max-md:flex-wrap max-xl:justify-center">
        <div className="w-1/2 max-xl:w-full text-left max-md:text-center">
          <h1 className="text-5xl max-md:text-4xl mb-5">
            Hi, I'm Vaishnavi Sai 👋
          </h1>
          <p className="text-xl max-md:text-base mb-5 font-light">
            REG NO: RA2411003010949 | Department of Computing Technologies,
            SRMIST Kattankulathur.
            <br /> I’m a curious and enthusiastic learner passionate about
            computer science and hands-on projects that solve real-world
            problems. I enjoy exploring new ideas, learning through practical
            application, and collaborating with others to share perspectives. I
            value balance in life, spending time with friends and enjoying
            movies to stay creative. My goal is to keep growing, build
            meaningful projects, and make a positive impact.
          </p>
          <a
            href="#contact"
            className="p-2 px-4 rounded-md text-base bg-white text-purple-500 hover:bg-purple-500 hover:text-white transition-all inline-block w-auto">
            GET IN TOUCH
          </a>
        </div>
        <img
          className="h-80 max-xl:h-64 rounded max-[426px]:h-auto max-[426px]:w-full max-[426px]:mb-5"
          src={coding_gif}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
