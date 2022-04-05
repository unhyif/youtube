import axios from "axios";

function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function getVideoWithDecodedSnippet(video) {
  video.snippet.title = decodeHtml(video.snippet.title);
  video.snippet.description = decodeHtml(video.snippet.description);
  return video;
}

class Youtube {
  constructor() {
    // REVIEW: constructor(httpClient) - dependency injection
    // this.youtube = httpClient

    this.key = process.env.REACT_APP_YOUTUBE_KEY;
    this.youtube = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3",
      params: { key: this.key },
    });
  }

  // REVIEW
  async popular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        fields: "items(id,snippet)",
        chart: "mostPopular",
        maxResults: 5,
      },
    });
    return response.data.items.map(getVideoWithDecodedSnippet);
  }

  async search(q) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        fields: "items(id/videoId,snippet)",
        q: q,
        type: "video",
        maxResults: 5,
      },
    });
    return response.data.items.map((video) => ({
      id: video.id.videoId,
      snippet: {
        ...video.snippet, // REVIEW
        title: decodeHtml(video.snippet.title),
        description: decodeHtml(video.snippet.description),
      },
    }));
  }
}

export default Youtube;
