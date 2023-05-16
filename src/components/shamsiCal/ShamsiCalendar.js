import React, { useState, useEffect } from "react";
import styles from "./ShamsiCalendar.module.css";
import jalaali from "jalaali-js";
import ShCalModule from "../shared/shamsiCal/ShCalModule";

const ShamsiCalendar = ({ date, setDate, startEnd, setStartEnd }) => {
  const [thisMonth, setThisMonth] = useState(jalaali.toJalaali(date));
  const [nextMonth, setNextMonth] = useState(
    jalaali.toJalaali(
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
    )
  );
  //   console.log(thisMonth);
  //   console.log(nextMonth);
  const months = [
    "فرودین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];
  const changeMonth = (e) => {
    if (e.target.parentElement.id === "prev") {
      setDate(
        new Date(date.getFullYear(), date.getMonth() - 1, date.getDate())
      );
    }
    if (e.target.parentElement.id === "next") {
      setDate(
        new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
      );
    }
  };
  useEffect(() => {
    setThisMonth(jalaali.toJalaali(date));
    setNextMonth(
      jalaali.toJalaali(
        new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
      )
    );
    // eslint-disable-next-line
  }, [date.getMonth()]);

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div id="prev">
          <span onClick={changeMonth}>{"<"}</span>
          <p>ماه قبل</p>
        </div>
        <div id="next">
          <p>ماه بعد</p>
          <span onClick={changeMonth}>{">"}</span>
        </div>
      </div>
      <div className={styles.year}>{jalaali.toJalaali(date).jy}</div>
      <div className={styles.cals}>
        <ShCalModule
          date={thisMonth}
          months={months}
          orgDate={date}
          startEnd={startEnd}
          setStartEnd={setStartEnd}
        />
        <ShCalModule
          date={nextMonth}
          months={months}
          orgDate={date}
          startEnd={startEnd}
          setStartEnd={setStartEnd}
        />
      </div>
    </div>
  );
};

export default ShamsiCalendar;
