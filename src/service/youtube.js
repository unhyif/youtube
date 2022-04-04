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
    this.key = process.env.REACT_APP_YOUTUBE_KEY;
  }

  // REVIEW: returns promise
  async popular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&fields=items(id,snippet)&chart=mostPopular&maxResults=5&key=${this.key}`
    )
      .then((res) => res.json())
      .then((data) => data.items)
      .then((videos) => videos.map(getVideoWithDecodedSnippet))
      .catch((e) => console.log(e));
  }

  async search(q) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&fields=items(id/videoId,snippet)&q=${q}&type=video&maxResults=5&key=${this.key}`
    )
      .then((res) => res.json())
      .then((data) => data.items)
      .then((videos) => videos.map(getVideoWithDecodedSnippet))
      .catch((e) => console.log(e));
  }
}

export default Youtube;
