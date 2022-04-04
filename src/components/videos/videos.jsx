import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";

const Videos = ({ videos, onSelect, display }) => {
  const videosClass =
    display === "wide"
      ? styles.videos
      : `${styles.videos} ${styles["videos--long"]}`;

  return (
    <ul className={videosClass}>
      {videos.map((video) => (
        <Video key={video.id} video={video} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default Videos;
