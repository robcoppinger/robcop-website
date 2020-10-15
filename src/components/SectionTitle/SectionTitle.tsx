import React from "react";
import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h1 className={styles.sectionTitle}>{children}</h1>
);
