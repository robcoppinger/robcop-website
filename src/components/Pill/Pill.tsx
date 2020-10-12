import React from "react";
import styles from "./Pill.module.scss";

export const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.pill}>{children}</div>
);
