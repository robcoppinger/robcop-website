import React from "react";
import styles from "./Home.module.scss";
import { InfoCard } from "../../components/InfoCard";
import { StackItem } from "../../components/StackItem";
import { StackSection } from "../../components/StackSection";

export const Home = () => (
  <>
    <div className={styles.hero}>
      <div className={styles.desktopOnly}>
        <InfoCard />
      </div>
    </div>
    <div className={styles.mobileOnly}>
      <InfoCard />
    </div>
    <div
      className="contentContainer"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
    >
      <StackSection />
    </div>
  </>
);
