import React from "react";
import styles from "./StackItem.module.scss";
import { Pill } from "../Pill";

type StackItem = {
  icon: any;
  title: string;
  pills: string[];
};

export const StackItem = ({ icon, title, pills }: StackItem) => (
  <div className={styles.stackItemContainer}>
    <img alt={title} src={icon} />
    <div>
      <h3>{title}</h3>
      <div className={styles.pillContainer}>
        {pills.map((pill, index) => (
          <Pill key={pill + index}>
            <p>{pill}</p>
          </Pill>
        ))}
      </div>
    </div>
  </div>
);
