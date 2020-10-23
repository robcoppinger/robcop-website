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
        <HobbieIcon icon={images.Camera} />
        <HobbieIcon icon={images.Music} />
        <HobbieIcon icon={images.Mountains} />
      </div>
    </div>
  </div>
);
