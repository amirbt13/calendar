import React from "react";
// css
import styles from "./Head.module.css";

const Head = ({ setDate, calType, setCalType, startEnd }) => {
  const setToday = () => {
    setDate(new Date());
  };
  const changeType = () => {
    // changing type of calendar
    setCalType({ shamsi: !calType.shamsi, miladi: !calType.miladi });
    // if you have selected a day it will show miladi or shamsi calendar directly on that month
    if (startEnd.start) {
      setDate(startEnd.start);
    }
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
