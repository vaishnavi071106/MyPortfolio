import React from "react";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";

function Contact() {
  return (
    <div
      className="text-center flex flex-col gap-5 max-[426px]:mt-44 h-auto my-20"
      id="contact">
      <div className="text-5xl mb-10 max-[500px]:text-3xl max-[500px]:mb-5">
        Contact Me ☎️
      </div>
      <p className="text-gray-400 text-base">
        DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
      </p>
      <a
        href="tel:+9019946922"
        className="text-gray-400 text-2xl hover:text-white">
        Phone: +91- 9019946922
      </a>
      <a
        href="mailto:ms0804@srmist.edu.in"
        className="text-gray-400 text-2xl hover:text-white">
        Email: ms0804@srmist.edu.in
      </a>
      <div className="flex justify-center gap-5 mt-10">
        <a
          href="https://github.com/vaishnavi071106"
          target="_blank"
          className="text-4xl cursor-pointer "
          rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vaishnavi-sai-810366369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          className="text-4xl cursor-pointer "
          rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Contact;
