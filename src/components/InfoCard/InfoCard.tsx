import React from "react";
import { images } from "../../assets/images";
import styles from "./infoCard.module.scss";

export const InfoCard = () => (
  <div className={styles.infoCardContainer}>
    <div className={styles.card}>
      <div className={styles.infoCard}>
        <div className={styles.headshot}>
          <img src={images.Headshot} style={{ width: "100%" }}></img>
        </div>
        <div className={styles.titleContainer}>
          <h1>Rob Coppinger</h1>
          <h3 className={styles.subtitle}>Software Developer</h3>
        </div>
        <div className={styles.infoContainer}>
          {infoData.map((item) => (
            <div key={item.text} className={styles.infoRow}>
              <img src={item.icon} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const infoData = [
  {
    icon: images.Uni,
    text: "University of Pretoria",
  },
  {
    icon: images.Code,
    text: "Full Stack Web / Mobile",
  },
  {
    icon: images.Graduation,
    text: "BSc Geoinformatics",
  },
  {
    icon: images.Location,
    text: "London",
  },
];
