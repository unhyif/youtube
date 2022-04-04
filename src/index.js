import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtube";

const youtube = new Youtube();

const root = createRoot(document.getElementById("root"));
root.render(<App youtube={youtube} />);
