import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import Detail from "./components/detail/detail";
import styles from "./app.module.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  // REVIEW: 같은 값으로 state update해도 re-render X
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = useCallback((video) => setSelectedVideo(video), []);

  const handleSearch = useCallback((q) => {
    setLoading(true);
    setSelectedVideo(null);

    // REVIEW: promise
    youtube.search(q).then((videos) => {
      setVideos(videos);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    youtube.popular().then((videos) => setVideos(videos));
  }, []); // REVIEW: Argument should be a function & It's executed after mounting

  return (
    <>
      <Header onSearch={handleSearch}></Header>
      {loading ? (
        <div className={styles.loading}>
          <p>Loading videos...</p>
        </div>
      ) : (
        // 상위 컴포넌트에서 레이아웃 구상
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
                ? styles.list
                : `${styles.list} ${styles["list--align"]}`
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
      )}
    </>
  );
};

export default App;
