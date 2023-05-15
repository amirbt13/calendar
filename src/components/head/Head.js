import React from "react";
import styles from "./Head.module.css";

const Head = ({ setDate }) => {
  const setToday = () => {
    setDate(new Date());
  };
  return (
    <div className={styles.container}>
      <header>
        <div>میلادی</div>
        <div onClick={setToday}>امروز</div>
      </header>
      <hr />
    </div>
  );
};

export default Head;
