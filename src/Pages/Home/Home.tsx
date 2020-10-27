import React from "react";
import styles from "./Home.module.scss";
import { InfoCard } from "../../components/InfoCard";
import { StackSection } from "../../components/StackSection";
import { Footer } from "../../components/Footer";
import { HobbiesSection } from "../../components/HobbiesSection";

export const Home = () => {
  type Theme = "light" | "dark";
  const dataTheme = () =>
    document.getElementById("html")?.getAttribute("data-theme");

  const setDataTheme = (theme: Theme) =>
    document.getElementById("html")?.setAttribute("data-theme", theme);

  function toggleTheme() {
    setDataTheme(dataTheme() === "light" ? "dark" : "light");
  }
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.themeToggleContainer}>
          <input
            type="checkbox"
            id="theme-switch"
            name="theme"
            onChange={toggleTheme}
          />
          <label htmlFor="theme-switch">Toggle</label>
        </div>
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
};
