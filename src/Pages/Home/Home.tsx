import React from "react";
import styles from "./Home.module.scss";
import { InfoCard } from "../../components/InfoCard";

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
    <div style={{ height: "20rem" }}></div>
  </>
);
