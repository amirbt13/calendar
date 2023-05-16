import React, { useEffect } from "react";
// css
import styles from "./CalModule.module.css";
// helper functions
import { isAfter, isBefore, isBetween, isStart } from "../functions.js";

const Day = ({ day, days, setDays, startEnd, setStartEnd }) => {
  const { dayNum, today, selected, fullDate } = day;
  const { start, end } = startEnd;
  const changeDay = () => {
    // selecting days logic
    if (!start) {
      setStartEnd({ ...startEnd, start: fullDate });
    } else if (!end && isAfter(fullDate, start)) {
      setStartEnd({ ...startEnd, end: fullDate });
    } else if (!end && isBefore(fullDate, start)) {
      setStartEnd({ end: start, start: fullDate });
    } else if (end && start) {
      setStartEnd({ start: null, end: null });
    }
  };
  useEffect(() => {
    // when you select date all the days between that range will be selected: true
    let newDays = days.map((item) => {
      if (
        isBetween(item.fullDate, start, end) ||
        isStart(item.fullDate, start)
      ) {
        return { ...item, selected: true };
      } else {
        return { ...item, selected: false };
      }
    });
    setDays([...newDays]);

    // eslint-disable-next-line
  }, [startEnd]);

  return (
    <div
      onClick={changeDay}
      className={
        selected && today
          ? styles.selected_today
          : selected
          ? styles.selected
          : today
          ? styles.today
          : null
      }
    >
      {dayNum}
    </div>
  );
};

export default Day;
