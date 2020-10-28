import React from "react";
import styles from "./Footer.module.scss";
import { images } from "../../assets/images";

export const Footer = () => (
  <div className={styles.footerContainer}>
    <a
      href="https://www.instagram.com/rob.coppinger/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt="Instagram Logo" src={images.Instagram} />
    </a>
    <a
      href="https://www.linkedin.com/in/rob-coppinger-456b17103/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt="LinkedIn Logo" src={images.Linkedin} />
    </a>
    <a
      href="https://github.com/robcoppinger/robcop-website"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt="GitHub Logo" src={images.Github} />
    </a>
  </div>
);
