import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import "./app.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube.popular().then((items) => setVideos(items));
  }, []); // REVIEW: Argument should be a function

  const onSearch = useCallback((q) => {
    youtube.search(q).then((items) => setVideos(items));
  }, []);

  return (
    <>
      <Header onSearch={onSearch}></Header>
      <Videos videos={videos} />
    </>
  );
};

export default App;
