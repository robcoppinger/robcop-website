import React from "react";
import styles from "./Footer.module.scss";
import { images } from "../../assets/images";

export const Footer = () => (
  <div className={styles.footerContainer}>
    <a href="https://www.instagram.com/rob.coppinger/" target="_blank">
      <img src={images.Instagram} />
    </a>
    <a
      href="https://www.linkedin.com/in/rob-coppinger-456b17103/"
      target="_blank"
    >
      <img src={images.Linkedin} />
    </a>
    <a href="https://github.com/robcoppinger/robcop-website" target="_blank">
      <img src={images.Github} />
    </a>
  </div>
);
