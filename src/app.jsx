import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import Detail from "./components/detail/detail";
import styles from "./app.module.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = useCallback((video) => setSelectedVideo(video), []);

  const handleSearch = useCallback((q) => {
    setLoading(true);
    console.log("loading -> true"); // REVIEW: 1

    setSelectedVideo(null);
    console.log("selectedVideo -> null"); // REVIEW: 2

    // REVIEW: 3 Component rendering

    // REVIEW: promise
    youtube.search(q).then((videos) => {
      setVideos(videos.map((video) => ({ ...video, id: video.id.videoId })));
      console.log("Change videos : ", videos); // REVIEW: 4

      setLoading(false);
      console.log("loading -> false"); // REVIEW: 5
    });

    // REVIEW: 6 Component rendering
  }, []);

  useEffect(() => {
    youtube.popular().then((videos) => setVideos(videos));
    console.log("Effect happening"); // REVIEW: 2
  }, []); // REVIEW: Argument should be a function & after mounting

  return (
    <>
      {console.log("Component rendering")} {/* REVIEW: 1, 3 */}
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
      )}
    </>
  );
};

export default App;
