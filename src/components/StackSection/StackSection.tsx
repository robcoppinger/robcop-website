import React from "react";
import { StackItem } from "../StackItem";
import styles from "./StackSection.module.scss";
import { images } from "../../assets/images";

export const StackSection = () => (
  <div className={styles.stackSectionContainer}>
    <h1>Stack</h1>
    <div className={styles.StackItemsContainer}>
      {stackItems.map((item) => (
        <StackItem icon={item.icon} title={item.title} pills={item.pills} />
      ))}
    </div>
  </div>
);

const stackItems = [
  {
    icon: images.Mobile,
    title: "Mobile",
    pills: ["React Native"],
  },
  {
    icon: images.Laptop,
    title: "Frontend Web Dev",
    pills: ["React", "JavaScript"],
  },
  {
    icon: images.Database,
    title: "Backend Dev",
    pills: ["Node", "Symfony"],
  },
  {
    icon: images.Laptop,
    title: "DevOps",
    pills: ["AWS", "Docker"],
  },
];
