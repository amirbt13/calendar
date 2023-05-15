import React, { useEffect, useState } from "react";
import styles from "./Calendar.module.css";
import RightCal from "./right/RightCal";
import LeftCal from "./left/LeftCal";

const Calendar = ({ date, setDate, months }) => {
  const [thisMonth, setThisMonth] = useState(date);
  const [nextMonth, setNextMonth] = useState(
    new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
  );
  const [selectedDays, setSelectedDays] = useState([]);
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
  console.log(selectedDays);
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
        <LeftCal
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          months={months}
          date={nextMonth}
        />
        <RightCal
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          months={months}
          date={thisMonth}
        />
      </div>
    </div>
  );
};

export default Calendar;
