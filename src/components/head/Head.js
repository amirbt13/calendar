import React from "react";
import styles from "./Head.module.css";

const Head = ({ setDate, calType, setCalType }) => {
  const setToday = () => {
    setDate(new Date());
  };
  const changeType = () => {
    setCalType({ shamsi: !calType.shamsi, miladi: !calType.miladi });
  };
  return (
    <div className={styles.container}>
      <header>
        <div onClick={changeType}>
          {calType.miladi && "تقویم شمسی"}
          {calType.shamsi && "تقویم میلادی"}
        </div>
        <div onClick={setToday}>امروز</div>
      </header>
      <hr />
    </div>
  );
};

export default Head;
