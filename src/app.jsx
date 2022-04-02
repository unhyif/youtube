import React, { useEffect, useState, useCallback } from "react";
import Header from "./components/header/header";
import Videos from "./components/videos/videos";
import "./app.css";

const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);

  const loadVideos = useCallback((url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&fields=items(id,snippet(title,channelTitle,thumbnails))&chart=mostPopular&maxResults=5&key=${API_KEY}`;
    loadVideos(url);
  }, []);

  return (
    <>
      <Header onSearch={loadVideos} api={API_KEY}></Header>
      <Videos videos={videos} />
    </>
  );
};

export default App;
