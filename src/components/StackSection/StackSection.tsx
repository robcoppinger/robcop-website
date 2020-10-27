import React from "react";
import { StackItem } from "../StackItem";
import styles from "./StackSection.module.scss";
import { images } from "../../assets/images";
import { SectionTitle } from "../SectionTitle";

export const StackSection = () => (
  <div className="section">
    <div
      className="contentContainer"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
    >
      <div className={styles.stackSectionContainer}>
        <SectionTitle>Stack</SectionTitle>
        <div className={styles.StackItemsContainer}>
          {stackItems.map((item) => (
            <StackItem
              key={item.title}
              icon={item.icon}
              title={item.title}
              pills={item.pills}
            />
          ))}
        </div>
      </div>
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
