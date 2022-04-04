import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ onSearch }) => {
  const input = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input.current.value);
  };

  return (
    <header>
      <a href="/" className={styles.home}>
        <div className={styles.brand}>
          {/* Build 후 index.html 위치가 최상위 root */}
          <img src="/images/logo.png" alt="YouTube" className={styles.logo} />
          <h1 className={styles.title}>YouTube</h1>
        </div>
      </a>

      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input ref={input} type="search" placeholder="검색" required />
        <button className={styles.searchBtn}>
          <img src="/images/search.png" alt="Search" />
        </button>
      </form>
    </header>
  );
});

export default Header;
