import React, { memo } from "react";
import styles from "./video.module.css";

const Video = memo(({ video, video: { snippet }, onSelect }) => {
  return (
    <li className={styles.video} onClick={() => onSelect(video)}>
      <img
        src={snippet.thumbnails.medium.url}
        alt={snippet.title}
        className={styles.thumbnail}
      />

      <div className={styles.info}>
        <h4 className={styles.title}>{snippet.title}</h4>
        <p className={styles.channel}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
});

export default Video;
