import React from "react";
import styles from "./Card.module.scss";

export const Card = ({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: any;
}) => (
  <div style={style} className={styles.card}>
    {children}
  </div>
);
