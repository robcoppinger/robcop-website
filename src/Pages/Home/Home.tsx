import React from "react";
import styles from "./Home.module.scss";
import { InfoCard } from "../../components/InfoCard";
import { StackItem } from "../../components/StackItem";
import { StackSection } from "../../components/StackSection";
import { Footer } from "../../components/Footer";
import { HobbiesSection } from "../../components/HobbiesSection";

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
    <StackSection />
    <HobbiesSection />
    <Footer />
  </>
);
