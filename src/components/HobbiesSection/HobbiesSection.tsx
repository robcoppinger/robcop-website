import React from "react";
import { SectionTitle } from "../SectionTitle";
import { images } from "../../assets/images";
import { HobbieEntry, HobbieEntryProps } from "../HobbieEntry";

export const HobbiesSection = () => (
  <div className="section">
    <div
      className="contentContainer"
      style={{ paddingTop: "10rem", paddingBottom: "10rem" }}
    >
      <SectionTitle>Hobbies</SectionTitle>
      {HobbyEntries.map((entry) => (
        <HobbieEntry
          key={entry.title}
          title={entry.title}
          media={entry.media}
        />
      ))}
    </div>
  </div>
);

const HobbyEntries: HobbieEntryProps[] = [
  {
    title: "Anything Adventure",
    media: [
      {
        title: "Anzere Ski Trip",
        thumbnail: images.Snowboard,
        type: "video",
        link:
          "https://robcop.s3.eu-west-2.amazonaws.com/videos/anzere-video.mp4",
      },
      {
        title: "Zambia Safari",
        thumbnail: images.Zambia,
        type: "video",
        link: "https://www.youtube.com/watch?v=lM17tqn5xMI&t=87s",
      },
      { thumbnail: images.Surfing, type: "video" },
    ],
  },
  {
    title: "Making Music",
    media: [
      {
        title: "Dance Monkey cover",
        thumbnail: images.DanceMonkey,
        type: "video",
        link:
          "https://robcop.s3.eu-west-2.amazonaws.com/videos/dance-monkey-cover.mp4",
      },
      {
        title: "Lovers on the Sun Cover",
        thumbnail: images.LoversOnTheSun,
        type: "video",
        link: "https://www.youtube.com/watch?v=GYVqRVXVNjc",
      },
      {
        title: "My own composition",
        thumbnail: images.Composition,
        type: "video",
        link: "https://www.youtube.com/watch?v=eQIw_2GKc2k",
      },
    ],
  },
];
