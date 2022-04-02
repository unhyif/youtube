import React, { useEffect, useState } from "react";
import Videos from "./components/videos/videos";
import "./app.css";
const API_KEY = process.env.REACT_APP_YOUTUBE_KEY;

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&fields=items(id,snippet(title,channelTitle,thumbnails))&chart=mostPopular&maxResults=5&key=${API_KEY}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setVideos(data.items))
      .catch((e) => console.log(e));
  }, []);
  return <Videos videos={videos} />;
}

export default App;
