import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import CalModule from "../shared/calendar/CalModule";

const Calendar = ({ date, setDate }) => {
  const [thisMonth, setThisMonth] = useState(date);
  const [nextMonth, setNextMonth] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
  );
  const [startEnd, setStartEnd] = useState({
    start: null,
    end: null,
  });
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
    setThisMonth(date);
    setNextMonth(
      new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
    );
    // eslint-disable-next-line
  }, [date.getMonth()]);
  console.log(startEnd);
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <div id="next">
          <span onClick={changeMonth}>{"<"}</span>
          <p>ماه بعد</p>
        </div>
        <div id="prev">
          <p>ماه قبل</p>
          <span onClick={changeMonth}>{">"}</span>
        </div>
      </div>
      <div className={styles.year}>{date.getFullYear()}</div>
      <div className={styles.cals}>
        <CalModule
          months={months}
          date={nextMonth}
          startEnd={startEnd}
          setStartEnd={setStartEnd}
        />
        <CalModule
          months={months}
          date={thisMonth}
          startEnd={startEnd}
          setStartEnd={setStartEnd}
        />
      </div>
    </div>
  );
};

export default Calendar;
