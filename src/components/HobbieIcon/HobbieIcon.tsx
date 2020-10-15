import React from "react";
import styles from "./HobbieIcon.module.scss";

export const HobbieIcon = ({ icon }: { icon: any }) => (
  <div className={styles.hobbieIconContainer}>
    <img src={icon} />
  </div>
);
