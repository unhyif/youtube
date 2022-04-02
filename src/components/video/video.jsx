import React from "react";
import styles from "./video.module.css";

const Video = ({
  video: {
    title,
    channelTitle: channel,
    thumbnails: {
      medium: { url },
    },
  },
}) => (
  <li className={styles.video}>
    <img src={url} alt={title} className={styles.thumbnail} />

    <div className={styles.info}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.channel}>{channel}</p>
    </div>
  </li>
);

export default Video;
