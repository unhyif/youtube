import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";
// import axios from "axios";

// REVIEW
// const httpClient = axios.create({
//   baseURL: "https://youtube.googleapis.com/youtube/v3",
//   params: { key: process.env.REACT_APP_YOUTUBE_KEY },
// });
// const youtube = new Youtube(httpClient);

const youtube = new Youtube();

const root = createRoot(document.getElementById("root"));
root.render(<App youtube={youtube} />);
