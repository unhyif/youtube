import React from "react";
import styles from "./detail.module.css";

const Detail = ({ video: { id, snippet } }) => (
  <>
    <div className={styles.player}>
      <iframe
        id="ytplayer"
        type="text/html"
        title="player"
        width="100%"
        height="550px"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>

    <div className={styles.info}>
      <h2 className={styles.title}>{snippet.title}</h2>
      <h3 className={styles.channel}>{snippet.channelTitle}</h3>
      <p className={styles.desc}>{snippet.description}</p>
    </div>
  </>
);

export default Detail;
