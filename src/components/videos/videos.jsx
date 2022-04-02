import React from "react";
import Video from "../video/video";
import styles from "./videos.module.css";

const Videos = ({ videos }) => {
  return (
    <section className={styles.popular}>
      <ul className={styles.videos}>
        {videos.map((video) => (
          <Video key={video.id} video={video.snippet} />
        ))}
      </ul>
    </section>
  );
};

export default Videos;
