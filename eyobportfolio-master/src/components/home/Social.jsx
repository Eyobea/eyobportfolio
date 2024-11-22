import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://t.me/Eyob_12_21"
        className="home__social-icon"
        target="_blank"
      >
        <FaTelegram />
      </a>
      <a
        href="https://github.com/Eyobea"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/eyob-yibeltal-"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
