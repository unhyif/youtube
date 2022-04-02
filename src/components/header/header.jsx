import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onSearch, api }) => {
  const input = React.createRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&fields=items(id/videoId,snippet(title,channelTitle,thumbnails))&q=${input.current.value}&maxResults=5&key=${api}`;
    onSearch(url);
  };

  return (
    <header>
      <a href="/" className={styles.home}>
        <div className={styles.brand}>
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="YouTube"
            className="logo"
          />
          <h1 className="name">YouTube</h1>
        </div>
      </a>

      <form className={styles.searchForm} onSubmit={onSubmit}>
        <input ref={input} type="text" placeholder="검색" required />
        <button className={styles.searchBtn}>
          <img
            src={process.env.PUBLIC_URL + "/images/search.png"}
            alt="Search"
          />
        </button>
      </form>
    </header>
  );
});

export default Header;
