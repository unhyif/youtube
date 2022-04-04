import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import Detail from "./components/detail/detail";
import styles from "./app.module.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = useCallback((q) => {
    youtube.search(q).then((videos) => setVideos(videos));
  }, []);

  const handleSelect = useCallback((video) => setSelectedVideo(video), []);

  useEffect(() => {
    youtube.popular().then((videos) => setVideos(videos));
  }, []); // REVIEW: Argument should be a function

  return (
    <>
      <Header onSearch={handleSearch}></Header>

      {/* 상위 컴포넌트에서 레이아웃 구상 */}
      <main className={styles.content}>
        {selectedVideo && (
          <section className={styles.detail}>
            <Detail video={selectedVideo} />
          </section>
        )}

        {/* 삼항연산자 통해 복수 클래스 설정 */}
        <section
          className={
            selectedVideo
              ? styles.popular
              : `${styles.popular} ${styles["popular--align"]}`
          }
        >
          {/* 삼항연산자 통해 하위 컴포넌트 클래스 관련 prop 상속 */}
          <Videos
            videos={videos}
            onSelect={handleSelect}
            display={selectedVideo ? "long" : "wide"}
          />
        </section>
      </main>
    </>
  );
};

export default App;
