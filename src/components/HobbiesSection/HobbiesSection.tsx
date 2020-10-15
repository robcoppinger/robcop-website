import React from "react";
import styles from "./HobbiesSection.module.scss";
import { SectionTitle } from "../SectionTitle";
import { HobbieIcon } from "../HobbieIcon/HobbieIcon";
import { images } from "../../assets/images";

export const HobbiesSection = () => (
  <div className="section">
    <div
      className="contentContainer"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
    >
      <SectionTitle>Hobbies</SectionTitle>
      <div className={styles.iconContainer}>
        <HobbieIcon icon={images.Laptop} />
        <HobbieIcon icon={images.Laptop} />
        <HobbieIcon icon={images.Laptop} />
      </div>
    </div>
  </div>
);
