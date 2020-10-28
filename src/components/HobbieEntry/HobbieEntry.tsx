import React from "react";
import styles from "./HobbieEntry.module.scss";

type MediaType = "image" | "video";

type Media = {
  title?: string;
  thumbnail: any;
  type: MediaType;
  link?: string;
};

export type HobbieEntryProps = {
  title: string;
  media: Media[];
};

export const HobbieEntry = ({ title, media }: HobbieEntryProps) => {
  return (
    <div className={styles.HobbieEntryContainer}>
      <h2>{title}</h2>
      <div className={styles.mediaContainer}>
        {media.map((mediaEntry, index) => (
          <div key={index} className={styles.thumbnailConatiner}>
            <a href={mediaEntry.link} target="_blank" rel="noopener noreferrer">
              <img alt={title} src={mediaEntry.thumbnail} />
            </a>
            {mediaEntry.title && (
              <div className={styles.fadingTitle}>
                <h4>{mediaEntry.title}</h4>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
